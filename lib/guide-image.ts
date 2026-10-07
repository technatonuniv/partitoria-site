import type { Locale } from './site-content';

export function guideImage(locale: Locale, name: string) {
  return { src: `/guide/10814/${locale}/${name}`, translated: true };
}
