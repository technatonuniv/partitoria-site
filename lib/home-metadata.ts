import { pageMetadata } from './page-metadata';
import { siteCopy, type Locale } from './site-content';

export function homeMetadata(locale: Locale) {
  const copy = siteCopy[locale];
  return pageMetadata({
    locale,
    path: '',
    title: `Partitoria — ${copy.homeTitle}`,
    description: copy.homeLead,
  });
}
