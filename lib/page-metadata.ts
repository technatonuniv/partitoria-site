import type { Metadata } from 'next';
import { guideImage } from './guide-image';
import { locales, localePath, type Locale } from './site-content';

export const siteOrigin = 'https://partitoria.app';

export function pageUrl(locale: Locale, path: string) {
  return new URL(localePath(locale, path), siteOrigin).href;
}

type PageDetails = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  availableLocales?: readonly Locale[];
  image?: string;
};

export function pageMetadata({
  locale, path, title, description, availableLocales = locales,
  image = guideImage(locale, 'reader.png').src,
}: PageDetails): Metadata {
  const url = pageUrl(locale, path);
  const languages = Object.fromEntries(availableLocales.map((language) => [language, pageUrl(language, path)]));
  const images = [new URL(image, siteOrigin).href];
  return {
    title,
    description,
    alternates: { canonical: url, languages: { ...languages, 'x-default': pageUrl('en', path) } },
    openGraph: { type: 'website', siteName: 'Partitoria', url, title, description, images },
    twitter: { card: 'summary', title, description, images },
  };
}
