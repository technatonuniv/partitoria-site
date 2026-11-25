import assert from 'node:assert/strict';
import fs from 'node:fs';

const origin = 'https://partitoria.app';
const playUrl = 'https://play.google.com/store/apps/details?id=com.technatonuniv.partitoria';
const titles = new Set();
const descriptions = new Set();
const linksByPage = new Map();
const compareStrings = (left, right) => left.localeCompare(right);

// The input is React's static export (quoted and escaped attribute values).
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/\s([\w:-]+)="([^"]*)"/g)].map(([, key, value]) =>
    [key.toLowerCase(), value.replaceAll('&amp;', '&')]));
}
function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) => attributes(tag));
}
function one(list, message) {
  assert.equal(list.length, 1, message);
  return list[0];
}
function pagePath(locale, suffix) {
  if (suffix === '/facts') return `/${locale}/facts`;
  return (locale === 'ru' ? '' : `/${locale}`) + suffix || '/';
}
function verifyStructuredData(html, url, suffix, outputFile) {
  const nodes = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attributes(match[1]).type !== 'application/ld+json') continue;
    let document;
    try {
      document = JSON.parse(match[2]);
    } catch (error) {
      throw new Error(`Invalid JSON-LD at ${url}: ${error.message}`);
    }
    for (const block of [document].flat()) {
      assert.equal(block['@context'], 'https://schema.org', `JSON-LD context: ${url}`);
      nodes.push(...(block['@graph'] ?? [block]));
    }
  }
  const typed = (type) => nodes.filter((node) => [node['@type']].flat().includes(type));
  for (const node of nodes) {
    assert.ok(node['@type'], `Missing Schema.org type: ${url}`);
    assert.doesNotMatch(JSON.stringify(node), /"(?:aggregateRating|review|reviews)"\s*:|"@type"\s*:\s*"Review"/, `Unsourced rating/review: ${url}`);
  }
  if (!suffix || suffix === '/facts') {
    const app = one([...new Set([...typed('MobileApplication'), ...typed('SoftwareApplication')])], `Application schema: ${url}`);
    assert.ok(app.name?.includes('Partitoria') && app.operatingSystem === 'Android' && app.applicationCategory, `Application details: ${url}`);
    assert.ok([app.downloadUrl, app.installUrl, app.sameAs].flat().includes(playUrl), `Application listing: ${url}`);
    const publisher = app.publisher?.name || nodes.find((node) => node['@id'] && node['@id'] === app.publisher?.['@id'])?.name;
    assert.equal(publisher, 'Partitoria Studio', `Application publisher: ${url}`);
    assert.ok(app.isAccessibleForFree === true || [app.offers].flat().some((offer) =>
      offer?.price != null && Number(offer.price) === 0), `Free installation: ${url}`);
    if (!suffix) {
      assert.ok(typed('Organization').some((organization) => organization.name === 'Partitoria Studio'), `Organization: ${url}`);
      assert.ok(typed('WebSite').some((site) => site.name && new URL(site.url).origin === origin), `WebSite: ${url}`);
    }
  }
  if (suffix === '/guide' || suffix.startsWith('/guide/')) {
    const list = one(typed('BreadcrumbList'), `BreadcrumbList: ${url}`).itemListElement;
    assert.ok(Array.isArray(list) && list.length >= 2, `Breadcrumb trail: ${url}`);
    for (const [index, item] of list.entries()) {
      assert.ok(item['@type'] === 'ListItem' && item.position === index + 1 && item.name?.trim(), `Breadcrumb item: ${url}`);
      if (item.item || index !== list.length - 1) {
        const target = new URL(item.item?.['@id'] || item.item);
        assert.ok(target.origin === origin && outputFile(target.pathname), `Broken breadcrumb target in ${url}`);
        if (index === list.length - 1) assert.equal(target.pathname, url, `Last breadcrumb target in ${url}`);
      }
    }
  }
}

export function verifySearchPage({ html, url, canonicalPath = url, locale, availableLocales, outputFile }) {
  const suffix = canonicalPath === '/' ? '' : canonicalPath.replace(new RegExp(`^/${locale}(?=/|$)`), '');
  const canonical = new URL(canonicalPath, origin).href;
  assert.equal(one(tags(html, 'html'), `Document root: ${url}`).lang, locale, `Document language: ${url}`);
  const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
  assert.ok(head, `Missing head: ${url}`);
  const meta = tags(head, 'meta');
  const links = tags(head, 'link');
  const field = (name) => one(meta.filter((tag) => (tag.property || tag.name) === name), `${name} at ${url}`).content;
  const title = one([...head.matchAll(/<title>([^<]*)<\/title>/gi)], `Title: ${url}`)[1].trim();
  const description = field('description')?.trim();
  assert.ok(title && description, `Empty title or description: ${url}`);
  if (canonicalPath === url) {
    for (const [value, seen] of [[title, titles], [description, descriptions]]) {
      assert.ok(!seen.has(value), `Repeated metadata at ${url}: ${value}`);
      seen.add(value);
    }
  }
  assert.equal(new URL(one(links.filter((tag) => tag.rel === 'canonical'), `Canonical tag: ${url}`).href).href, canonical, `Canonical URL: ${url}`);
  const alternatives = links.filter((tag) => tag.rel === 'alternate' && tag.hreflang);
  assert.deepEqual(alternatives.map((tag) => tag.hreflang).sort(compareStrings), [...availableLocales, 'x-default'].sort(compareStrings), `hreflang set: ${url}`);
  for (const alt of alternatives) {
    const target = pagePath(alt.hreflang === 'x-default' ? 'en' : alt.hreflang, suffix);
    assert.equal(new URL(alt.href).href, new URL(target, origin).href, `hreflang ${alt.hreflang} at ${url}`);
  }
  assert.equal(new URL(field('og:url')).href, canonical, `Open Graph URL: ${url}`);
  assert.match(field('twitter:card'), /^summary(?:_large_image)?$/, `Twitter card: ${url}`);
  for (const name of ['og:image', 'twitter:image']) {
    const image = new URL(field(name));
    assert.ok(image.origin === origin && /\.(?:png|jpe?g|webp)$/i.test(image.pathname) && outputFile(image.pathname), `${name} missing local image: ${url}`);
  }
  for (const tag of meta.filter((item) => /^(?:robots|googlebot|bingbot)$/i.test(item.name))) {
    assert.doesNotMatch(tag.content, /(?:^|[\s,])(?:noindex|none|nosnippet)(?:$|[\s,])/i, `Blocked indexing/snippet: ${url}`);
  }
  verifyStructuredData(html, url, suffix, outputFile);
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const anchors = tags(visible, 'a');
  linksByPage.set(url, anchors.filter((a) => a.href?.startsWith('/') && !a['data-language']).map((a) => new URL(a.href, origin).pathname));
  const footerAnchors = [...visible.matchAll(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi)].flatMap(([footer]) => tags(footer, 'a'));
  assert.ok(footerAnchors.some((a) => a.href === pagePath(locale, '/facts')), `Missing direct facts link in footer: ${url}`);
  if (suffix === '/facts') {
    for (const language of availableLocales) {
      const anchor = one(anchors.filter((a) => a['data-language'] === language), `Facts language switch ${language}: ${url}`);
      const target = new URL(anchor.href, origin);
      assert.ok(target.origin === origin && target.pathname === pagePath(language, '/facts'), `Facts switch target for ${language}: ${url}`);
    }
  }
  if (suffix === '/facts' || suffix.startsWith('/answers/')) {
    const slug = suffix.split('/').pop();
    const store = anchors.filter((a) => a.href?.startsWith('https://play.google.com/'));
    assert.ok(store.length > 0, `Missing tagged Play CTA: ${url}`);
    for (const { href } of store) {
      const link = new URL(href);
      const referrer = new URLSearchParams(link.searchParams.get('referrer') || '');
      link.searchParams.delete('referrer');
      assert.equal(link.href, playUrl, `Play listing: ${url}`);
      assert.equal(referrer.get('utm_source'), 'partitoria_site', `Play source: ${url}`);
      assert.equal(referrer.get('utm_medium'), 'website', `Play medium: ${url}`);
      assert.equal(referrer.get('utm_campaign'), `${slug}_${locale}`, `Play campaign: ${url}`);
    }
  }
}

export function verifyDiscoveryLinks(locales, newPaths) {
  const reached = new Set();
  const queue = locales.map((locale) => pagePath(locale, ''));
  while (queue.length) {
    const page = queue.pop();
    if (reached.has(page)) continue;
    reached.add(page);
    queue.push(...(linksByPage.get(page) || []));
  }
  for (const path of newPaths) assert.ok(reached.has(path), `No internal link path from a homepage: ${path}`);
}

export function verifyPublishedSearchFiles(root, canonical, newPaths) {
  const sitemap = fs.readFileSync(`${root}/sitemap.xml`, 'utf8');
  assert.ok(sitemap === fs.readFileSync('public/sitemap.xml', 'utf8'), 'Stale exported sitemap');
  assert.ok(!/hreflang=/i.test(sitemap), 'hreflang belongs to the page head only');
  const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, xml]) => {
    const loc = one([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)], 'Expected one sitemap loc')[1];
    const dates = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
    assert.ok(dates.length <= 1, `Duplicate lastmod: ${loc}`);
    if (dates.length) {
      const date = dates[0][1];
      assert.match(date, /^\d{4}-\d{2}-\d{2}$/, `Invalid lastmod: ${loc}`);
      assert.equal(new Date(date).toISOString().slice(0, 10), date, `Invalid lastmod: ${loc}`);
    }
    if (newPaths.has(new URL(loc).pathname)) assert.ok(dates.length === 1, `Missing editorial date: ${loc}`);
    return loc;
  });
  assert.deepEqual(entries.sort(compareStrings), canonical.map((url) => new URL(url, origin).href).sort(compareStrings), 'Sitemap must contain each canonical URL exactly once');
  const robots = fs.readFileSync(`${root}/robots.txt`, 'utf8');
  assert.equal(robots, fs.readFileSync('public/robots.txt', 'utf8'), 'Stale exported robots.txt');
  const directives = robots.split(/\r?\n/).map((line) => line.split('#')[0].trim()).filter(Boolean);
  assert.ok(directives.some((line) => /^user-agent:\s*\*$/i.test(line)), 'No wildcard crawler policy');
  assert.ok(!directives.some((line) => /^disallow:\s*\S/i.test(line)), 'Export restricts crawler access');
  assert.ok(directives.includes(`Sitemap: ${origin}/sitemap.xml`), 'Missing robots sitemap directive');
  const keyName = '3b909daf287a4751b9fb0bd1099c1321.txt';
  assert.equal(fs.readFileSync(`${root}/${keyName}`, 'utf8').trim(), keyName.slice(0, -4), 'Invalid exported IndexNow ownership key');
}
