import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import articles from '../lib/guide-articles.json' with { type: 'json' };
import selection from '../lib/guide-capture-selection.json' with { type: 'json' };
import historicalImageCopy from '../lib/guide-image-history.json' with { type: 'json' };
import { captureVersionFor, selectedGuideImages, verifyGuideCaptures } from './verify-guide-captures.mjs';

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
function outputFile(url) {
  const stem = path.join(root, url);
  return [stem, `${stem}.html`, path.join(stem, 'index.html')].find(
    (p) => fs.existsSync(p) && fs.statSync(p).isFile(),
  );
}
function verifyPage(url, locale) {
  const file = outputFile(url);
  assert.ok(file, `Missing static page: ${url}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('Partitoria Studio'), `Missing public credit: ${url}`);
  assert.ok(html.includes('/language-preference.js'), `Missing language negotiation: ${url}`);
  assert.ok(!html.includes('technaton'), `Old public credit: ${url}`);
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
  canonical.push(url);
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
      assert.ok(
        html.includes(`src="/guide/${captureVersionFor(selection, 'library.png')}/${locale}/library.png"`),
        `Missing current localized home screenshot: ${locale}`,
      );
    }
  }
  for (const category of categories)
    verifyPage(`${base}/guide/section/${category}`, locale);
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
const captureResult = verifyGuideCaptures({ selection, images: expectedImages, exportRoot: root });
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
for (const url of canonical)
  assert.ok(
    sitemap.includes(`<loc>https://partitoria.app${url}</loc>`),
    `Missing sitemap URL: ${url}`,
  );
console.log(
  `PASS: ${canonical.length} canonical pages, ${articles.length} articles × 9 languages, local links and ${captureResult.selectedCount} selected localized tablet portrait captures with original provenance.`,
);
console.log(
  'Static verification only; browser rendering and interactions require separate checks.',
);
