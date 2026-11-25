import { legalContent, type LegalPage } from './legal-content';
import { pageMetadata } from './page-metadata';
import { siteCopy, type Locale } from './site-content';

export function legalMetadata(locale: Locale, section: LegalPage) {
  const copy = siteCopy[locale];
  return pageMetadata({
    locale, path: `/${section}`, title: `${copy[section]} | Partitoria — ${copy.footer}`,
    description: legalContent[locale][section][0],
  });
}
