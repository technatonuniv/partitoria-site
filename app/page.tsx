import { BookOpen, FileCheck2, LibraryBig, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export const dynamic = 'force-static';

const principles = [
  {
    icon: LibraryBig,
    title: 'Личная библиотека — главное',
    text: 'Импортируйте свои PDF, находите ноты локально и продолжайте с сохранённой страницы.',
  },
  {
    icon: FileCheck2,
    title: 'Ваши файлы остаются вашими',
    text: 'Оригиналы не изменяются. Экспорт, резервная копия и восстановление остаются под вашим контролем.',
  },
  {
    icon: ShieldCheck,
    title: 'Спокойная работа офлайн',
    text: 'Чтение и организация личной библиотеки не требуют аккаунта или постоянного подключения к интернету.',
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow">Нотная библиотека для Android</p>
          <h1>Ваши ноты.<br />Всегда под рукой.</h1>
          <p className="hero-lead">
            Partitoria помогает музыкантам хранить личную библиотеку PDF,
            быстро находить произведения и читать партитуры без лишних отвлечений.
          </p>
          <output className="status-pill">
            <span aria-hidden="true" />
            Готовится к закрытому тестированию
          </output>
        </div>

        <figure className="hero-visual">
          <Image
            src="/partitoria-tablet-concept.png"
            alt="Концепция интерфейса Partitoria на планшете: личная библиотека и просмотр нот"
            width="1586"
            height="992"
            priority
          />
          <figcaption>Планшетный интерфейс: библиотека и полноэкранное чтение</figcaption>
        </figure>
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">Сделано для музыкантов</p>
          <h2 id="principles-title">Надёжная библиотека, а не ещё один каталог</h2>
        </div>
        <div className="principle-grid">
          {principles.map(({ icon: Icon, title, text }) => (
            <article className="principle-card" key={title}>
              <Icon aria-hidden="true" strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="release-note" id="status" aria-labelledby="status-title">
        <BookOpen aria-hidden="true" strokeWidth={1.5} />
        <div>
          <p className="eyebrow">Текущий статус</p>
          <h2 id="status-title">Публичный выпуск ещё не состоялся</h2>
          <p>
            Сейчас мы готовим приложение, карточку Google Play и проверку на реальных устройствах.
            На сайте появится официальная ссылка, когда сборка будет готова к тестированию.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
