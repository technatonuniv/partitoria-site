import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { selectedGuideImages, verifyGuideCaptures } from './verify-guide-captures.mjs';
import { verifyRenderedCaptures } from './verify-reader-assets.mjs';

// Synthetic receipt variants live only in a temporary directory. They are validation fixtures,
// never screenshot provenance or release evidence.
function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'partitoria-capture-test-'));
  const baseline = JSON.parse(fs.readFileSync('public/guide/10814/localized-captures.json', 'utf8'));
  baseline.captures = baseline.captures.filter(capture => capture.path.endsWith('/library.png'));
  const candidate = structuredClone(baseline);
  candidate.versionCode = 10820;
  candidate.sourceCommit = 'a'.repeat(40);
  candidate.inputFingerprint = 'b'.repeat(64);
  candidate.publicApk.sha256 = 'c'.repeat(64);
  candidate.publicApk.paidActivation = true;
  candidate.captures.forEach(capture => Object.assign(capture, {
    path: capture.path.replace('library.png', 'appearance.png'), versionCode: candidate.versionCode,
    sourceCommit: candidate.sourceCommit, inputFingerprint: candidate.inputFingerprint,
    apkSha256: candidate.publicApk.sha256,
  }));
  for (const manifest of [baseline, candidate]) {
    const folder = path.join(root, 'guide', String(manifest.versionCode));
    fs.mkdirSync(folder, { recursive: true });
    for (const capture of manifest.captures) {
      const destination = path.join(folder, capture.path);
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.copyFileSync(`public/guide/10814/${capture.locale}/library.png`, destination);
    }
    fs.writeFileSync(path.join(folder, 'localized-captures.json'), JSON.stringify(manifest));
  }
  return { root, candidate,
    selection: { defaultVersionCode:10814, versionsByImage:{ 'appearance.png':10820 } },
    images:new Set(['library.png', 'appearance.png']),
    cleanup:()=> {
      assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
      assert.ok(path.basename(root).startsWith('partitoria-capture-test-'));
      fs.rmSync(root,{recursive:true,force:true});
    } };
}

test('mixed immutable namespaces retain exact per-file provenance and all nine locales', () => {
  const f = fixture();
  try {
    assert.deepEqual(verifyGuideCaptures({ ...f, publicRoot:f.root }), { selectedCount:18, versions:[10814,10820] });
  } finally { f.cleanup(); }
});

test('a missing locale, relabelled APK, unreviewed image or changed bytes rejects delivery', () => {
  const f = fixture();
  const manifestPath = path.join(f.root, 'guide/10820/localized-captures.json');
  const verify = () => verifyGuideCaptures({ ...f, publicRoot:f.root });
  try {
    for (const mutation of [
      manifest => manifest.captures.pop(),
      manifest => { manifest.captures[0].apkSha256 = 'd'.repeat(64); },
      manifest => { manifest.captures[0].pixelReview = 'PENDING'; },
    ]) {
      const changed = structuredClone(f.candidate); mutation(changed);
      fs.writeFileSync(manifestPath, JSON.stringify(changed));
      assert.throws(verify);
    }
    fs.writeFileSync(manifestPath, JSON.stringify(f.candidate));
    const image = path.join(f.root, 'guide/10820', f.candidate.captures[0].path);
    const bytes = fs.readFileSync(image); bytes[bytes.length-1] ^= 1; fs.writeFileSync(image, bytes);
    assert.throws(verify);
  } finally { f.cleanup(); }
});

test('coverage follows actual article images plus Home and rejects malformed optional images', () => {
  assert.deepEqual([...selectedGuideImages([{ id:'text-only' }, { id:'illustrated', image:'sidebar.png' }])],
    ['library.png', 'reader.png', 'sidebar.png']);
  assert.ok(selectedGuideImages([], { defaultVersionCode:11032, versionsByImage:{} }).has('musicxml-preview.png'));
  for (const image of ['', null, '../library.png', 'library.jpg'])
    assert.throws(() => selectedGuideImages([{ id:'invalid', image }]));
});

test('hero derivatives and MusicXML preview follow the source locale and selected release', () => {
  for (const version of [10814, 11032]) {
    const resolver = loadComponent('lib/guide-image.ts', {
      './guide-capture-selection.json': { defaultVersionCode: version, versionsByImage: {} },
    });
    const hero = resolver.homeReader('fr');
    assert.equal(hero.src, version === 10814 ? '/home/reader-360.webp' : '/home/11032/fr/reader-360.webp');
    assert.ok(hero.srcSet.includes('240w') && hero.srcSet.includes('540w'));
    const preview = resolver.musicXmlPreview('fr');
    assert.equal(preview.src, version === 10814 ? '/discovery/musicxml-preview.jpg' : '/guide/11032/fr/musicxml-preview.png');
    assert.equal(preview.uiLocale, version === 10814 ? 'en' : 'fr');
    assert.equal(preview.width > preview.height, version === 10814);
  }
});

test('a stale, wrong-locale or unregistered capture cannot pass as an active social or visible screenshot', () => {
  const selection = { defaultVersionCode: 11032, versionsByImage: {} };
  const images = selectedGuideImages([], selection);
  const expected = '/guide/11032/fr/musicxml-preview.png';
  function verify(image = expected, social = expected, extra = '') {
    const html = `<meta property="og:image" content="https://partitoria.app${social}">
      <meta name="twitter:image" content="https://partitoria.app${social}">
      <figure class="discovery-figure"><img src="${image}" width="1200" height="1920"></figure>${extra}`;
    verifyRenderedCaptures({ html, url: '/fr/answers/musicxml-musescore-android', locale: 'fr', selection, articles: [], images });
  }
  assert.doesNotThrow(() => verify());
  for (const stale of ['/guide/10814/fr/reader.png', '/discovery/musicxml-preview.jpg', '/guide/11032/en/musicxml-preview.png']) {
    assert.throws(() => verify(stale));
    assert.throws(() => verify(expected, stale));
    assert.throws(() => verify(expected, expected, `<source srcSet="${stale} 240w">`));
    assert.throws(() => verify(expected, expected, `<img src="https://partitoria.app${stale}">`));
    const json = { '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      screenshot: [{ '@type': 'ImageObject', contentUrl: 'https://partitoria.app' + stale }] };
    assert.throws(() => verify(expected, expected, `<script type="application/ld+json">${JSON.stringify(json)}</script>`));
  }
});

test('guide thumbnail and lightbox must each mount the exact article capture', () => {
  const selection = { defaultVersionCode: 11032, versionsByImage: {} };
  const articles = [{ id: 'reader', image: 'reader.png' }];
  const images = selectedGuideImages(articles, selection);
  function verify(preview, full) {
    const image = name => `<img src="/guide/11032/fr/${name}" width="1200" height="1920">`;
    const html = `<button class="screenshot-trigger">${image(preview)}</button>
      <dialog class="screenshot-dialog">${image(full)}</dialog>`;
    verifyRenderedCaptures({ html, url: '/fr/guide/reader', locale: 'fr', selection, articles, images });
  }
  assert.doesNotThrow(() => verify('reader.png', 'reader.png'));
  assert.throws(() => verify('library.png', 'reader.png'), /Wrong preview/);
  assert.throws(() => verify('reader.png', 'library.png'), /Wrong dialog/);
});

function loadComponent(file, dependencies = {}) {
  const filename = path.resolve(file);
  const localRequire = createRequire(filename);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module:ts.ModuleKind.CommonJS, jsx:ts.JsxEmit.ReactJSX, esModuleInterop:true },
  }).outputText;
  const compiledModule = { exports:{} };
  vm.runInNewContext(compiled, { module:compiledModule, exports:compiledModule.exports,
    require: name => Object.hasOwn(dependencies, name) ? dependencies[name] : localRequire(name),
  }, { filename });
  return compiledModule.exports;
}

test('all nine captions follow the actual selected image version, never a current replacement', () => {
  const copy = JSON.parse(fs.readFileSync('lib/guide-image-history.json', 'utf8'));
  assert.deepEqual(Object.keys(copy).sort(), ['ru','en','de','it','es','pt','uk','fr','pl'].sort());
  for (const version of [10814,10824]) {
    const selection = { defaultVersionCode:10814, versionsByImage:{ 'library.png':version } };
    const resolver = loadComponent('lib/guide-image.ts', { './guide-capture-selection.json':selection });
    const { Screenshot } = loadComponent('components/screenshot.tsx', {
      '@/lib/guide-image':resolver, '@/lib/guide-image-history.json':copy,
      'next/image':({ src, alt, width, height }) => React.createElement('img', { src, alt, width, height }),
    });
    for (const locale of Object.keys(copy)) {
      const resolved = resolver.guideImage(locale, 'library.png');
      assert.equal(resolved.versionCode, version);
      const rendered = renderToStaticMarkup(React.createElement(Screenshot, {
        article:{ id:'example', title:'Example', image:'library.png' }, locale,
        copy:{ screenshot:'Screenshot' }, navigation:{ enlarge:'Enlarge', close:'Close', zoomIn:'Zoom in', zoomOut:'Zoom out' },
      }));
      assert.ok(rendered.includes(`/guide/${version}/${locale}/library.png`));
      assert.equal(rendered.includes('<figcaption'), version === 10814);
      assert.equal(rendered.includes(copy[locale]), version === 10814);
    }
  }
});
