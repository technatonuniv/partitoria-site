import { googlePlayUrl } from '@/lib/features-content';
import { pageUrl, siteOrigin } from '@/lib/page-metadata';
import type { Locale } from '@/lib/site-content';

export const downloadSummary: Record<Locale, string> = {
  ru: 'Установка бесплатная. Подписку Partitoria Pro можно оформить в приложении через Google Play.',
  en: 'Free to install. You can subscribe to Partitoria Pro in the app through Google Play.',
  de: 'Die Installation ist kostenlos. Partitoria Pro lässt sich in der App über Google Play abonnieren.',
  it: 'L’installazione è gratuita. Puoi abbonarti a Partitoria Pro nell’app tramite Google Play.',
  es: 'La instalación es gratuita. Puedes suscribirte a Partitoria Pro desde la aplicación a través de Google Play.',
  pt: 'A instalação é gratuita. Pode subscrever o Partitoria Pro na aplicação através do Google Play.',
  uk: 'Встановлення безкоштовне. Передплату Partitoria Pro можна оформити в застосунку через Google Play.',
  fr: 'L’installation est gratuite. Vous pouvez vous abonner à Partitoria Pro dans l’application via Google Play.',
  pl: 'Instalacja jest bezpłatna. Subskrypcję Partitoria Pro możesz wykupić w aplikacji przez Google Play.',
};

function JsonLd({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(value).replace(/</g, '\\u003c'),
  }} />;
}

export function ApplicationStructuredData({ locale }: { locale: Locale }) {
  const publisher = { '@id': `${siteOrigin}/#publisher` };
  return <JsonLd value={{
    '@context': 'https://schema.org',
    '@graph': [
      { ...publisher, '@type': 'Organization', name: 'Partitoria Studio', url: siteOrigin },
      { '@type': 'WebSite', '@id': `${siteOrigin}/#website`, url: siteOrigin, name: 'Partitoria', publisher },
      {
        '@type': 'SoftwareApplication', '@id': `${siteOrigin}/#app`, name: 'Partitoria',
        operatingSystem: 'Android', applicationCategory: 'MultimediaApplication',
        downloadUrl: googlePlayUrl, publisher, isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', description: downloadSummary[locale], url: googlePlayUrl },
      },
    ],
  }} />;
}

export function GuideBreadcrumbs({ locale, items }: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  return <JsonLd value={{
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, index) => ({
      '@type': 'ListItem', position: index + 1, name, item: pageUrl(locale, path),
    })),
  }} />;
}
