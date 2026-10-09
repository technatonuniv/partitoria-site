import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const captureLocales = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'];
const certificate = '1B9C439D7020C9FE4277A890313EF58209C19CBB6B8D8BC2518AB9EF86DFB5E3';
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');

export function selectedGuideImages(articles) {
  const images = new Set(['library.png']); // The actual Home preview is independent of articles.
  for (const article of articles) {
    if (article.image === undefined) continue;
    assert.ok(typeof article.image === 'string' && /^[a-z0-9-]+\.png$/.test(article.image),
      `Invalid screenshot name: ${article.id}`);
    images.add(article.image);
  }
  return images;
}

export function captureVersionFor(selection, name) {
  const version = selection.versionsByImage[name] ?? selection.defaultVersionCode;
  assert.ok(Number.isSafeInteger(version) && version > 0, `Invalid capture namespace: ${name}`);
  return version;
}

/** Every selected file retains its own immutable namespace and complete build provenance. */
export function verifyGuideCaptures({ selection, images, publicRoot = 'public', exportRoot }) {
  assert.ok(selection.versionsByImage && typeof selection.versionsByImage === 'object');
  for (const name of Object.keys(selection.versionsByImage))
    assert.ok(images.has(name), `Unused capture override: ${name}`);
  const expectedByVersion = new Map();
  for (const name of images) {
    assert.match(name, /^[a-z0-9-]+\.png$/);
    const version = captureVersionFor(selection, name);
    if (!expectedByVersion.has(version)) expectedByVersion.set(version, new Set());
    for (const locale of captureLocales) expectedByVersion.get(version).add(`${locale}/${name}`);
  }
  // One retained historical set and one final candidate. New locale captures cannot drift
  // between candidate builds or silently fall back to another language.
  const replacements = [...expectedByVersion.keys()].filter(version => version !== selection.defaultVersionCode);
  assert.ok(replacements.length <= 1, 'Replacement screenshots must use one final candidate');
  let selectedCount = 0;
  for (const [version, expected] of expectedByVersion) {
    const namespace = path.join('guide', String(version));
    const folder = path.join(publicRoot, namespace);
    const manifest = JSON.parse(fs.readFileSync(path.join(folder, 'localized-captures.json'), 'utf8'));
    assert.equal(manifest.schemaVersion, 1);
    assert.equal(manifest.versionCode, version);
    assert.match(manifest.versionName, /^\d+\.\d+\.\d+(?:[.-][\w.-]+)?$/);
    assert.match(manifest.sourceCommit, /^[0-9a-f]{40}$/);
    assert.match(manifest.inputFingerprint, /^[0-9a-f]{64}$/);
    const apk = manifest.publicApk;
    assert.equal(apk.kind, 'public');
    assert.equal(apk.applicationId, 'com.technatonuniv.partitoria');
    assert.match(apk.sha256, /^[0-9a-f]{64}$/);
    assert.ok(Number.isSafeInteger(apk.bytes) && apk.bytes > 0);
    assert.equal(apk.appCertificateSha256.toUpperCase(), certificate);
    assert.equal(typeof apk.paidActivation, 'boolean', 'Record the actual build activation flag');
    assert.match(apk.artifactReceiptSha256, /^[0-9a-f]{64}$/);
    assert.match(apk.installReceiptSha256, /^[0-9a-f]{64}$/);
    const environment = manifest.captureEnvironment;
    assert.equal(environment.kind, 'disposable Android emulator');
    assert.equal(environment.formFactor, 'tablet');
    assert.equal(environment.orientation, 'portrait');
    assert.equal(environment.width, 1200);
    assert.equal(environment.height, 1920);
    assert.ok(Number.isSafeInteger(environment.densityDpi) && environment.densityDpi > 0);
    assert.ok(environment.width * 160 / environment.densityDpi >= 600, 'Tablet UI width required');
    assert.ok(Array.isArray(manifest.captures));
    const actual = new Set();
    for (const capture of manifest.captures) {
      assert.match(capture.path, /^(ru|en|de|it|es|pt|uk|fr|pl)\/[a-z0-9-]+\.png$/);
      assert.ok(!actual.has(capture.path), `Duplicate capture: ${version}/${capture.path}`);
      actual.add(capture.path);
      assert.equal(capture.locale, capture.path.split('/')[0], capture.path);
      assert.equal(capture.uiLocale, capture.locale, `Wrong app UI locale: ${capture.path}`);
      assert.equal(capture.versionCode, version, capture.path);
      assert.equal(capture.sourceCommit, manifest.sourceCommit, capture.path);
      assert.equal(capture.inputFingerprint, manifest.inputFingerprint, capture.path);
      assert.equal(capture.apkSha256, apk.sha256, capture.path);
      assert.equal(capture.width, 1200, capture.path);
      assert.equal(capture.height, 1920, capture.path);
      assert.equal(capture.pixelReview, 'PASS', `Pixel review pending: ${capture.path}`);
      assert.match(capture.pixelReviewReceiptSha256, /^[0-9a-f]{64}$/);
      assert.match(capture.sha256, /^[0-9a-f]{64}$/);
      const bytes = fs.readFileSync(path.join(folder, capture.path));
      assert.equal(bytes.length, capture.bytes, capture.path);
      assert.ok(bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])), capture.path);
      assert.equal(bytes.readUInt32BE(16), 1200, capture.path);
      assert.equal(bytes.readUInt32BE(20), 1920, capture.path);
      assert.equal(sha256(bytes), capture.sha256, capture.path);
      if (exportRoot) {
        const exported = fs.readFileSync(path.join(exportRoot, namespace, capture.path));
        assert.equal(sha256(exported), capture.sha256, `Exported capture changed: ${capture.path}`);
      }
    }
    for (const expectedPath of expected)
      assert.ok(actual.has(expectedPath), `Missing selected screenshot: ${version}/${expectedPath}`);
    selectedCount += expected.size;
  }
  return { selectedCount, versions: [...expectedByVersion.keys()] };
}
