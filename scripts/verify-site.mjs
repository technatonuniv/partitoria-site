import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import articles from '../lib/guide-articles.json' with { type: 'json' };
import selection from '../lib/guide-capture-selection.json' with { type: 'json' };
import historicalImageCopy from '../lib/guide-image-history.json' with { type: 'json' };
import topicRoutes from '../lib/discovery-topics-routes.json' with { type: 'json' };
import { captureVersionFor, selectedGuideImages, verifyGuideCaptures } from './verify-guide-captures.mjs';
import { verifyDiscoveryLinks, verifyPublishedSearchFiles, verifySearchPage } from './verify-search.mjs';

const locales = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'];
const categories = [
  'start',
  'library',
  'reading',
  'rehearsal',
  'data',
  'settings',
];
const root = path.resolve('dist/client');
const expectedImages = selectedGuideImages(articles);
assert.equal(
  new Set(articles.map((a) => a.id)).size,
  articles.length,
  'Duplicate article IDs',
);
const canonical = [];
const discoveryPaths = new Set();
function outputFile(url) {
  const stem = path.join(root, url);
  return [stem, `${stem}.html`, path.join(stem, 'index.html')].find(
    (p) => fs.existsSync(p) && fs.statSync(p).isFile(),
  );
}
function verifyPage(url, locale, { availableLocales = locales, canonicalPath = url } = {}) {
  const file = outputFile(url);
  assert.ok(file, `Missing static page: ${url}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('Partitoria Studio'), `Missing public credit: ${url}`);
  assert.ok(html.includes('/language-preference.js'), `Missing language negotiation: ${url}`);
  if (!discoveryPaths.has(canonicalPath)) {
    assert.ok(html.includes('href="https://play.google.com/store/apps/details?id=com.technatonuniv.partitoria"'), `Missing Google Play link: ${url}`);
  }
  const home = locale === 'ru' ? '/' : `/${locale}`;
  assert.ok(html.includes(`href="${home}#features"`), `Missing features navigation: ${url}`);
  assert.ok(!html.replaceAll('https://play.google.com/store/apps/details?id=com.technatonuniv.partitoria', '').includes('technaton'), `Old public credit: ${url}`);
  assert.ok(
    html.includes(`<main lang="${locale}"`),
    `Missing language: ${url}`,
  );
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    `Expected one h1: ${url}`,
  );
  for (const [, value] of html.matchAll(
    /(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    if (value.startsWith('//')) continue;
    assert.ok(
      outputFile(decodeURI(value)),
      `Broken local reference ${value} in ${url}`,
    );
  }
  verifySearchPage({ html, url, canonicalPath, locale, availableLocales, outputFile });
  if (url === canonicalPath) canonical.push(url);
  return html;
}
for (const locale of locales) {
  const base = locale === 'ru' ? '' : `/${locale}`;
  for (const section of [
    '',
    '/guide',
    '/support',
    '/privacy',
    '/terms',
    '/copyright',
    '/sources',
  ]) {
    const html = verifyPage(`${base}${section}` || '/', locale);
    if (!section) {
      assert.ok(html.includes('id="features"'), `Missing features section: ${locale}`);
      assert.equal((html.match(/class="feature-card"/g) || []).length, 6, `Expected six feature groups: ${locale}`);
      assert.ok(
        html.includes(`src="/guide/${captureVersionFor(selection, 'library.png')}/${locale}/library.png"`),
        `Missing current localized home screenshot: ${locale}`,
      );
    }
  }
  for (const category of categories)
    verifyPage(`${base}/guide/section/${category}`, locale);
  const factsPath = `/${locale}/facts`;
  discoveryPaths.add(factsPath);
  verifyPage(factsPath, locale);
  for (const [slug, translations] of Object.entries(topicRoutes)) {
    if (!translations[locale]) continue;
    const topicPath = `${base}/answers/${slug}`;
    discoveryPaths.add(topicPath);
    verifyPage(topicPath, locale, { availableLocales: Object.keys(translations) });
  }
  for (const article of articles) {
    assert.ok(categories.includes(article.category), article.id);
    assert.deepEqual(
      Object.keys(article.text).sort(),
      [...locales].sort(),
      `Missing translation ${article.id}`,
    );
    assert.ok(
      article.text[locale].length >= 5,
      `Insufficient instructions: ${article.id}/${locale}`,
    );
    assert.ok(
      article.text[locale].every((t) => t.trim().length > 0),
      `Empty text: ${article.id}/${locale}`,
    );
    const html = verifyPage(`${base}/guide/${article.id}`, locale);
    if (article.image) {
      const version = captureVersionFor(selection, article.image);
      assert.ok(
        html.includes(`src="/guide/${version}/${locale}/${article.image}"`),
        `Wrong screenshot version or locale: ${article.id}/${locale}`,
      );
      if (version === 10814) {
        assert.ok(html.includes('data-capture-version="10814"') && html.includes(historicalImageCopy[locale]),
          `Missing historical image caption: ${article.id}/${locale}`);
      } else {
        assert.ok(!html.includes('data-capture-version="10814"'),
          `Current capture labelled historical: ${article.id}/${locale}`);
      }
      assert.ok(
        html.includes('<dialog '),
        `Missing image viewer: ${article.id}/${locale}`,
      );
      assert.ok(
        !/<a[^>]+href="\/guide\/[^"]+\.(png|webp)"/.test(html),
        `Screenshot is an external link: ${article.id}`,
      );
    } else {
      assert.ok(!html.includes('class="guide-figure"'),
        `Unexpected illustration for text-only article: ${article.id}/${locale}`);
    }
  }
}
// Without JavaScript the language-selection entry serves the English edition.
const gateway = verifyPage('/facts', 'en', { canonicalPath: '/en/facts' });
const englishFacts = fs.readFileSync(outputFile('/en/facts'), 'utf8');
const factsText = (html) => [...html.matchAll(/<(h1|h2|p)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => match[2]);
assert.deepEqual(factsText(gateway), factsText(englishFacts), 'The /facts fallback must display the English facts before JavaScript');
const captureResult = verifyGuideCaptures({ selection, images: expectedImages, exportRoot: root });
verifyDiscoveryLinks(locales, discoveryPaths);
verifyPublishedSearchFiles(root, canonical, discoveryPaths);
console.log(
  `PASS: ${canonical.length} canonical pages with reciprocal hreflang, social metadata, JSON-LD, sitemap and open robots policy. The /facts entry serves the English fallback. ${discoveryPaths.size} discovery pages linked from the site with tagged Play CTAs. ${articles.length} articles × 9 languages, local links and ${captureResult.selectedCount} selected localized tablet portrait captures with original provenance.`,
);
console.log(
  'Static verification only; browser rendering and interactions require separate checks.',
);
