import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import articles from '../lib/guide-articles.json' with { type: 'json' };

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
    verifyPage(`${base}${section}` || '/', locale);
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
      assert.ok(
        html.includes('<dialog '),
        `Missing image viewer: ${article.id}/${locale}`,
      );
      assert.ok(
        !/<a[^>]+href="\/guide\/[^"]+\.(png|webp)"/.test(html),
        `Screenshot is an external link: ${article.id}`,
      );
    }
  }
}
const captureManifest = JSON.parse(
  fs.readFileSync('public/guide/localized-captures.json', 'utf8'),
);
assert.equal(captureManifest.captures.length, 36);
for (const capture of captureManifest.captures) {
  const bytes = fs.readFileSync(path.join('public/guide', capture.path));
  assert.equal(bytes.readUInt32BE(16), 1200);
  assert.equal(bytes.readUInt32BE(20), 1920);
  assert.equal(
    crypto.createHash('sha256').update(bytes).digest('hex'),
    capture.sha256,
    capture.path,
  );
}
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
for (const url of canonical)
  assert.ok(
    sitemap.includes(`<loc>https://partitoria.app${url}</loc>`),
    `Missing sitemap URL: ${url}`,
  );
console.log(
  `PASS: ${canonical.length} canonical pages, ${articles.length} articles × 9 languages, local links and 36 original portrait captures.`,
);
console.log(
  'Static verification only; browser rendering and interactions require separate checks.',
);
