import Link from 'next/link';
import { localeNames, localePath, locales, siteCopy, type Locale } from '@/lib/site-content';

type ChromeProps = { locale?: Locale; section?: string };

export function SiteHeader({ locale = 'ru', section = '' }: ChromeProps) {
  const t = siteCopy[locale];
  return (
    <>
      <a className="skip-link" href="#content">{t.skip}</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href={localePath(locale)} aria-label={`Partitoria — ${t.home}`}>
            <span className="brand-mark" aria-hidden="true">P</span>
            <span>Partitoria</span>
          </Link>
          <nav className="main-nav" aria-label={t.navigation}>
            <Link href={localePath(locale)}>{t.home}</Link>
            <Link href={localePath(locale, '/guide')}>{t.guide}</Link>
            <Link href={localePath(locale, '/support')}>{t.support}</Link>
          </nav>
          <details className="language-menu">
            <summary aria-label={localeNames[locale]}>{localeNames[locale]} <span aria-hidden="true">⌄</span></summary>
            <div className="language-options">
              {locales.map((target) => <Link key={target} lang={target} href={localePath(target, section)} aria-current={target === locale ? 'page' : undefined}>{localeNames[target]}</Link>)}
            </div>
          </details>
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
        <div className="footer-identity"><span className="footer-brand">Partitoria</span><span>{t.footer}</span><span>{t.independent}</span></div>
        <nav aria-label={t.navigation}>
          <Link href={localePath(locale, '/guide')}>{t.guide}</Link>
          <Link href={localePath(locale, '/support')}>{t.support}</Link>
          <Link href={localePath(locale, '/privacy')}>{t.privacy}</Link>
          <Link href={localePath(locale, '/copyright')}>{t.copyright}</Link>
          <Link href={localePath(locale, '/terms')}>{t.terms}</Link>
          <Link href={localePath(locale, '/sources')}>{t.sources}</Link>
        </nav>
        <small>© 2026 technaton</small>
      </div>
    </footer>
  );
}
