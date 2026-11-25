import type { Metadata } from 'next';
import { localePath, locales, siteCopy, type Locale } from './site-content';

const siteOrigin = 'https://partitoria.app';
const homeUrl = (locale: Locale) => new URL(localePath(locale), siteOrigin).href;
const languages = Object.fromEntries(locales.map((locale) => [locale, homeUrl(locale)]));

export function homeMetadata(locale: Locale): Metadata {
  const copy = siteCopy[locale];
  const url = homeUrl(locale);
  const title = `Partitoria — ${copy.homeTitle}`;
  return {
    title,
    description: copy.homeLead,
    alternates: { canonical: url, languages: { ...languages, 'x-default': homeUrl('en') } },
    openGraph: { type: 'website', siteName: 'Partitoria', title, description: copy.homeLead, url },
  };
}
