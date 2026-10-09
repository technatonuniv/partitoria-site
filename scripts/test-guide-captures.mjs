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
    ['library.png', 'sidebar.png']);
  for (const image of ['', null, '../library.png', 'library.jpg'])
    assert.throws(() => selectedGuideImages([{ id:'invalid', image }]));
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
