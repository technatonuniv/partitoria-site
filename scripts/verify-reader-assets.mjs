import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { captureLocales, captureVersionFor } from './verify-guide-captures.mjs';
import { structuredNodes, tags } from './verify-search.mjs';

const widths = [240, 360, 540];
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const guidePath = (selection, locale, name) => `/guide/${captureVersionFor(selection, name)}/${locale}/${name}`;
const thumbnailDir = (version, locale) => version === 10814 ? '/home' : `/home/${version}/${locale}`;

function linkedImages(node, results, inImage = false) {
  if (Array.isArray(node)) {
    for (const item of node) linkedImages(item, results, inImage);
  } else if (node && typeof node === 'object') {
    const imageObject = inImage || [node['@type']].flat().includes('ImageObject');
    for (const [key, value] of Object.entries(node)) {
      const imageProperty = ['image', 'screenshot', 'logo', 'thumbnail', 'thumbnailUrl', 'primaryImageOfPage'].includes(key);
      const imageUrl = imageObject && ['url', 'contentUrl', '@id'].includes(key);
      if (typeof value === 'string' && (imageProperty || imageUrl)) {
        // A fragment @id identifies a graph node. Its file is given by url or contentUrl.
        if (!value.startsWith('#') && (key !== '@id' || !value.includes('#'))) results.push(value);
      } else if (typeof value === 'object') {
        linkedImages(value, results, imageProperty);
      }
    }
  } else if (inImage && typeof node === 'string') {
    results.push(node);
  }
}

function verifyLightbox(html, expected, url) {
  const trigger = html.match(/<button\b[^>]*class="screenshot-trigger"[^>]*>([\s\S]*?)<\/button>/);
  const dialog = html.match(/<dialog\b[^>]*class="screenshot-dialog"[^>]*>([\s\S]*?)<\/dialog>/);
  for (const [name, fragment] of [['preview', trigger], ['dialog', dialog]]) {
    assert.ok(fragment, `Missing ${name} at ${url}`);
    const mounted = tags(fragment[1], 'img');
    assert.equal(mounted.length, 1, `Expected one ${name} image at ${url}`);
    assert.equal(mounted[0].src, expected, `Wrong ${name} image at ${url}`);
    assert.equal(mounted[0].width, '1200', url);
    assert.equal(mounted[0].height, '1920', url);
  }
}

export function verifyRenderedCaptures({ html, url, locale, selection, articles, images, nodes = structuredNodes(html, url), outputFile }) {
  const clean = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const suffix = url.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/';
  const current = new Set([...images].map(name => guidePath(selection, locale, name)));
  const hero = thumbnailDir(captureVersionFor(selection, 'reader.png'), locale);
  const thumbnails = widths.map(width => `${hero}/reader-${width}.webp`);
  const imageTags = tags(clean, 'img');
  const sources = tags(clean, 'source');
  let share = guidePath(selection, locale, 'reader.png');
  if (suffix === '/') {
    verifyLightbox(clean, guidePath(selection, locale, 'library.png'), url);
    assert.ok(imageTags.some(image => image.src === thumbnails[1]), `Missing home reader at ${url}`);
    const expectedSet = thumbnails.map((src, index) => `${src} ${widths[index]}w`).join(', ');
    assert.ok(sources.some(source => source.srcset === expectedSet), `Wrong responsive reader set at ${url}`);
    for (const thumbnail of thumbnails) current.add(thumbnail);
  } else if (suffix === '/facts' || suffix.startsWith('/answers/')) {
    const figure = clean.match(/<figure class="discovery-figure(?: landscape)?">([\s\S]*?)<\/figure>/);
    assert.ok(figure, `Missing discovery figure at ${url}`);
    const [image] = tags(figure[1], 'img');
    assert.ok(image?.src, `Missing discovery image at ${url}`);
    share = image.src;
    if (suffix === '/answers/musicxml-musescore-android') {
      const localized = captureVersionFor(selection, 'musicxml-preview.png') >= 11032;
      const expected = localized ? guidePath(selection, locale, 'musicxml-preview.png') : '/discovery/musicxml-preview.jpg';
      assert.equal(share, expected, `Wrong MusicXML example at ${url}`);
      assert.equal(image.width, localized ? '1200' : '960', url);
      assert.equal(image.height, localized ? '1920' : '600', url);
      if (!localized) current.add(expected);
    }
    assert.ok(current.has(share), `Unexpected discovery capture at ${url}: ${share}`);
  } else if (suffix.startsWith('/guide/')) {
    const article = articles.find(item => suffix === '/guide/' + item.id);
    if (article?.image) {
      share = guidePath(selection, locale, article.image);
      verifyLightbox(clean, share, url);
    }
  }
  for (const meta of tags(clean, 'meta').filter(meta => ['og:image', 'twitter:image'].includes(meta.property || meta.name))) {
    assert.equal(meta.content, 'https://partitoria.app' + share, `Wrong social image at ${url}`);
  }
  const candidates = imageTags.map(image => image.src);
  for (const node of nodes) linkedImages(node, candidates);
  const socialImages = ['og:image:url', 'og:image:secure_url', 'twitter:image:src'];
  for (const meta of tags(clean, 'meta')) {
    if (socialImages.includes(meta.property || meta.name)) candidates.push(meta.content);
  }
  for (const element of [...imageTags, ...sources, ...tags(clean, 'link')]) {
    const srcset = element.srcset || element.imagesrcset;
    if (srcset) candidates.push(...srcset.split(',').map(entry => entry.trim().split(/\s+/)[0]));
    if (element.as === 'image' && element.href) candidates.push(element.href);
  }
  for (const candidate of candidates) {
    if (!candidate) continue;
    const asset = new URL(candidate, 'https://partitoria.app' + url);
    assert.equal(asset.origin, 'https://partitoria.app', `Off-site image at ${url}: ${candidate}`);
    if (outputFile) assert.ok(outputFile(asset.pathname), `Missing image asset at ${url}: ${candidate}`);
    if (/^\/(guide|home|discovery)\//.test(asset.pathname)) {
      assert.ok(current.has(asset.pathname), `Stale or wrong-locale capture at ${url}: ${candidate}`);
    }
  }
}

export function verifyReaderThumbnails({ selection, publicRoot = 'public', exportRoot }) {
  const version = captureVersionFor(selection, 'reader.png');
  const versioned = version !== 10814;
  const folder = path.join(publicRoot, 'home', String(version));
  let manifest;
  if (versioned) {
    const name = 'reader-thumbnails.json';
    const raw = fs.readFileSync(path.join(folder, name));
    manifest = JSON.parse(raw);
    assert.equal(manifest.versionCode, version);
    assert.deepEqual(Object.keys(manifest.locales).sort(), [...captureLocales].sort());
    if (exportRoot) assert.deepEqual(fs.readFileSync(path.join(exportRoot, 'home', String(version), name)), raw);
  }
  let sharedSourceHash;
  for (const locale of captureLocales) {
    const sourceHash = sha256(fs.readFileSync(path.join(publicRoot, guidePath(selection, locale, 'reader.png'))));
    if (versioned) {
      assert.equal(manifest.locales[locale].sourceSha256, sourceHash, `Thumbnail source changed: ${locale}`);
    } else {
      sharedSourceHash ??= sourceHash;
      assert.equal(sourceHash, sharedSourceHash, 'Shared legacy thumbnails require byte-identical localized readers');
    }
    for (const width of widths) {
      const asset = `${thumbnailDir(version, locale)}/reader-${width}.webp`;
      const bytes = fs.readFileSync(path.join(publicRoot, asset));
      // These RGB WebPs are generated with Pillow's lossy VP8 encoder.
      assert.equal(bytes.toString('ascii', 0, 4), 'RIFF', asset);
      assert.equal(bytes.toString('ascii', 8, 16), 'WEBPVP8 ', asset);
      assert.equal(bytes.readUInt16LE(26) & 0x3fff, width, asset);
      assert.equal(bytes.readUInt16LE(28) & 0x3fff, width * 8 / 5, asset);
      const digest = sha256(bytes);
      if (versioned) assert.equal(digest, manifest.locales[locale].sha256ByWidth[width], asset);
      if (exportRoot) assert.equal(sha256(fs.readFileSync(path.join(exportRoot, asset))), digest, asset);
    }
  }
}
