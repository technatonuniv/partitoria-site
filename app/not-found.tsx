import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found" id="content">
        <p className="eyebrow">Ошибка 404</p>
        <h1>Страница не найдена</h1>
        <p>Возможно, адрес изменился или в нём есть опечатка.</p>
        <Link className="primary-link" href="/">Вернуться на главную</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
