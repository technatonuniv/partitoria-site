import type { Locale } from './site-content';
import selection from './guide-capture-selection.json';

export function guideImage(locale: Locale, name: string) {
  const version = (selection.versionsByImage as Record<string, number>)[name] ?? selection.defaultVersionCode;
  return { src: `/guide/${version}/${locale}/${name}`, translated: true, versionCode: version };
}

export function homeReader(locale: Locale) {
  const { versionCode } = guideImage(locale, 'reader.png');
  // The original 10814 reader showed the same music and identical pixels in all nine locales.
  const base = versionCode === 10814 ? '/home' : `/home/${versionCode}/${locale}`;
  return {
    src: `${base}/reader-360.webp`,
    srcSet: [240, 360, 540].map(width => `${base}/reader-${width}.webp ${width}w`).join(', '),
  };
}

export function musicXmlPreview(locale: Locale) {
  const image = guideImage(locale, 'musicxml-preview.png');
  if (image.versionCode < 11032) {
    // Before the localized series, the discovery article used a real English landscape capture.
    return { src: '/discovery/musicxml-preview.jpg', width: 960, height: 600, uiLocale: 'en' };
  }
  return { src: image.src, width: 1200, height: 1920, uiLocale: locale };
}
