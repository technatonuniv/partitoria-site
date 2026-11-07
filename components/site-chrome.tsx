import Link from 'next/link';
import {
  localeNames,
  localePath,
  locales,
  siteCopy,
  type Locale,
} from '@/lib/site-content';
import { languageNotice, automaticLanguage } from '@/lib/language-notice';
import { featuresCopy, googlePlayUrl } from '@/lib/features-content';

type ChromeProps = { locale?: Locale; section?: string };

const playBadgeAlt: Record<Locale, string> = {
  ru: 'Скачать Partitoria в Google Play',
  en: 'Get Partitoria on Google Play',
  de: 'Partitoria bei Google Play herunterladen',
  it: 'Scarica Partitoria su Google Play',
  es: 'Descarga Partitoria en Google Play',
  pt: 'Descarregar a Partitoria na Google Play',
  uk: 'Завантажити Partitoria у Google Play',
  fr: 'Télécharger Partitoria sur Google Play',
  pl: 'Pobierz Partitoria w Google Play',
};

export function SiteHeader({ locale = 'ru', section = '' }: ChromeProps) {
  const t = siteCopy[locale];
  return (
    <>
      <a className="skip-link" href="#content">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link
            className="brand"
            href={localePath(locale)}
            aria-label={`Partitoria — ${t.home}`}
          >
            <span className="brand-mark" aria-hidden="true">
              P
            </span>
            <span>Partitoria</span>
          </Link>
          <nav className="main-nav" aria-label={t.navigation}>
            <Link
              href={localePath(locale)}
              aria-current={!section ? 'page' : undefined}
            >
              {t.home}
            </Link>
            <Link
              href={`${localePath(locale)}#features`}
            >
              {featuresCopy[locale].nav}
            </Link>
            <Link
              href={localePath(locale, '/guide')}
              aria-current={section.startsWith('/guide') ? 'page' : undefined}
            >
              {t.guide}
            </Link>
            <Link
              href={localePath(locale, '/support')}
              aria-current={section === '/support' ? 'page' : undefined}
            >
              {t.support}
            </Link>
          </nav>
          <details className="language-menu">
            <summary aria-label={localeNames[locale]}>
              {localeNames[locale]} <span aria-hidden="true">⌄</span>
            </summary>
            <div className="language-options">
              <p className="language-notice">{languageNotice[locale]}</p>
              {locales.map((target) => (
                <a
                  key={target}
                  data-language={target}
                  lang={target}
                  href={`${localePath(target, section)}?lang=${target}`}
                  aria-current={target === locale ? 'page' : undefined}
                >
                  {localeNames[target]}
                </a>
              ))}
              <a href={section || '/'} data-language-reset="true">{automaticLanguage[locale]}</a>
            </div>
          </details>
          <a className="header-play" href={googlePlayUrl}>Google Play <span aria-hidden="true">↗</span></a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale = 'ru' }: ChromeProps) {
  const t = siteCopy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <span className="footer-brand">Partitoria</span>
          <span>{t.footer}</span>
          <span>{t.independent}</span>
          <div className="footer-store-badges">
            <a className="footer-store-badge" href={googlePlayUrl}>
              <img src={`/store-badges/google-play-${locale}.png`} alt={playBadgeAlt[locale]} width="646" height="250" />
            </a>
          </div>
        </div>
        <nav aria-label={t.navigation}>
          <Link href={`${localePath(locale)}#features`}>{featuresCopy[locale].nav}</Link>
          <Link href={localePath(locale, '/guide')}>{t.guide}</Link>
          <Link href={localePath(locale, '/support')}>{t.support}</Link>
          <Link href={localePath(locale, '/privacy')}>{t.privacy}</Link>
          <Link href={localePath(locale, '/copyright')}>{t.copyright}</Link>
          <Link href={localePath(locale, '/terms')}>{t.terms}</Link>
          <Link href={localePath(locale, '/sources')}>{t.sources}</Link>
        </nav>
        <div className="footer-legal">
          <small>© 2026 Partitoria Studio</small>
          <small>Google Play and the Google Play logo are trademarks of Google LLC.</small>
        </div>
      </div>
    </footer>
  );
}
