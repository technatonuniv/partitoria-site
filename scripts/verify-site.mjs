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
const captureVersion = 10814;
const captureInput = '947cb2851b03ab89947aab3179cc5f3faef40e260823d5983b8e71145a8091f8';
const captureRoot = `public/guide/${captureVersion}`;
const primaryImages = ['library.png', 'add.png', 'tools.png', 'settings.png'];
for (const article of articles) {
  assert.ok(
    typeof article.image === 'string' && /^[a-z0-9-]+\.png$/.test(article.image),
    `Missing or invalid screenshot name: ${article.id}`,
  );
}
const expectedImages = new Set([...primaryImages, ...articles.map((a) => a.image)]);
const expectedCaptures = new Set(
  locales.flatMap((locale) => [...expectedImages].map((name) => `${locale}/${name}`)),
);
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
        html.includes(`src="/guide/${captureVersion}/${locale}/library.png"`),
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
    assert.ok(
      html.includes(`src="/guide/${captureVersion}/${locale}/${article.image}"`),
      `Wrong screenshot version or locale: ${article.id}/${locale}`,
    );
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
  fs.readFileSync(`${captureRoot}/localized-captures.json`, 'utf8'),
);
assert.equal(captureManifest.versionCode, captureVersion);
assert.equal(captureManifest.versionName, '1.8.0');
assert.equal(captureManifest.inputFingerprint, captureInput);
assert.match(captureManifest.sourceCommit, /^[0-9a-f]{40}$/);
assert.match(captureManifest.publicApk.sha256, /^[0-9a-f]{64}$/);
assert.ok(Number.isSafeInteger(captureManifest.publicApk.bytes) && captureManifest.publicApk.bytes > 0);
assert.equal(
  captureManifest.publicApk.appCertificateSha256.toUpperCase(),
  '1B9C439D7020C9FE4277A890313EF58209C19CBB6B8D8BC2518AB9EF86DFB5E3',
);
assert.equal(captureManifest.publicApk.paidActivation, false);
const environment = captureManifest.captureEnvironment;
assert.equal(environment.kind, 'disposable Android emulator');
assert.equal(environment.formFactor, 'tablet');
assert.equal(environment.orientation, 'portrait');
assert.equal(environment.width, 1200);
assert.equal(environment.height, 1920);
assert.ok(Number.isSafeInteger(environment.densityDpi) && environment.densityDpi > 0);
assert.ok(environment.width * 160 / environment.densityDpi >= 600, 'Tablet UI width required');
assert.ok(Array.isArray(captureManifest.captures));
const actualCaptures = new Set();
for (const capture of captureManifest.captures) {
  assert.ok(expectedCaptures.has(capture.path), `Unexpected capture: ${capture.path}`);
  assert.ok(!actualCaptures.has(capture.path), `Duplicate capture: ${capture.path}`);
  actualCaptures.add(capture.path);
  assert.equal(capture.locale, capture.path.split('/')[0], capture.path);
  assert.equal(capture.uiLocale, capture.locale, `Wrong app UI locale: ${capture.path}`);
  assert.equal(capture.versionCode, captureVersion, capture.path);
  assert.equal(capture.sourceCommit, captureManifest.sourceCommit, capture.path);
  assert.equal(capture.inputFingerprint, captureInput, capture.path);
  assert.equal(capture.apkSha256, captureManifest.publicApk.sha256, capture.path);
  assert.equal(capture.width, 1200, capture.path);
  assert.equal(capture.height, 1920, capture.path);
  assert.match(capture.sha256, /^[0-9a-f]{64}$/);
  const bytes = fs.readFileSync(path.join(captureRoot, capture.path));
  assert.ok(bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), capture.path);
  assert.equal(bytes.readUInt32BE(16), 1200, capture.path);
  assert.equal(bytes.readUInt32BE(20), 1920, capture.path);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), capture.sha256, capture.path);
  const exportedBytes = fs.readFileSync(path.join(root, 'guide', String(captureVersion), capture.path));
  assert.equal(crypto.createHash('sha256').update(exportedBytes).digest('hex'), capture.sha256, `Exported capture changed: ${capture.path}`);
}
const compareCapturePaths = (a, b) => String(a).localeCompare(String(b));
assert.deepEqual([...actualCaptures].sort(compareCapturePaths), [...expectedCaptures].sort(compareCapturePaths), 'Incomplete localized screenshot coverage');
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
for (const url of canonical)
  assert.ok(
    sitemap.includes(`<loc>https://partitoria.app${url}</loc>`),
    `Missing sitemap URL: ${url}`,
  );
console.log(
  `PASS: ${canonical.length} canonical pages, ${articles.length} articles × 9 languages, local links and ${actualCaptures.size} current localized tablet portrait captures.`,
);
console.log(
  'Static verification only; browser rendering and interactions require separate checks.',
);
