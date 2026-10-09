import type { Locale } from './site-content';
import selection from './guide-capture-selection.json';

export function guideImage(locale: Locale, name: string) {
  const version = (selection.versionsByImage as Record<string, number>)[name] ?? selection.defaultVersionCode;
  return { src: `/guide/${version}/${locale}/${name}`, translated: true, versionCode: version };
}
