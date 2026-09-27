import type { Locale } from './site-content';

const translatedImages = new Set([
  'library.png',
  'add.png',
  'tools.png',
  'settings.png',
]);

export function guideImage(locale: Locale, name: string) {
  const translated = translatedImages.has(name);
  return { src: `/guide/${translated ? `${locale}/` : ''}${name}`, translated };
}
