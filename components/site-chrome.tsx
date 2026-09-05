import Link from 'next/link';

type SiteHeaderProps = {
  english?: boolean;
};

export function SiteHeader({ english = false }: SiteHeaderProps) {
  return (
    <>
      <a className="skip-link" href="#content">
        {english ? 'Skip to content' : 'Перейти к содержанию'}
      </a>
      <header className="site-header">
        <Link className="brand" href={english ? '/en' : '/'} aria-label="Partitoria — home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Partitoria</span>
        </Link>
        <nav aria-label={english ? 'Main navigation' : 'Основная навигация'}>
          <Link href={english ? '/en#principles' : '/#principles'}>
            {english ? 'About' : 'О приложении'}
          </Link>
          <Link href="/support">{english ? 'Support' : 'Поддержка'}</Link>
          <Link className="language-link" href={english ? '/' : '/en'} lang={english ? 'ru' : 'en'}>
            {english ? 'Русский' : 'English'}
          </Link>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter({ english = false }: SiteHeaderProps) {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-brand">Partitoria Studio</span>
        <span>{english ? 'Independent Android application' : 'Независимое Android-приложение'}</span>
      </div>
      <nav aria-label={english ? 'Legal information' : 'Правовая информация'}>
        <Link href="/privacy">{english ? 'Privacy' : 'Конфиденциальность'}</Link>
        <Link href="/copyright">{english ? 'Copyright' : 'Авторские права'}</Link>
        <Link href="/terms">{english ? 'Terms' : 'Условия'}</Link>
        <Link href="/sources">{english ? 'Sources' : 'Источники'}</Link>
      </nav>
      <span>© 2026 Partitoria Studio</span>
    </footer>
  );
}
