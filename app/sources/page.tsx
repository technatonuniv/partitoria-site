import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Источники нот | Partitoria',
  description: 'Внешние источники, которые могут использоваться поиском Partitoria.',
};

export const dynamic = 'force-static';

const sources = [
  ['IMSLP / Petrucci Music Library', 'https://imslp.org/'],
  ['Wikimedia Commons', 'https://commons.wikimedia.org/'],
  ['Internet Archive', 'https://archive.org/'],
  ['Gallica — Bibliothèque nationale de France', 'https://gallica.bnf.fr/'],
  ['Library of Congress', 'https://www.loc.gov/'],
  ['Mutopia Project', 'https://www.mutopiaproject.org/'],
] as const;

export default function SourcesPage() {
  return (
    <PolicyLayout
      eyebrow="Открытый интернет"
      title="Источники нот"
      summary="Partitoria может помогать находить издания во внешних публичных архивах. Личная библиотека и результаты поиска остаются разными областями."
    >
      <section>
        <h2>Поддерживаемые источники</h2>
        <ul className="source-list">
          {sources.map(([name, url]) => (
            <li key={name}>
              <a href={url} rel="noreferrer">{name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Как работает доступ</h2>
        <p>
          Поиск начинается только после явной команды пользователя. Прямая загрузка разрешается только для
          общественного достояния или открытой лицензии, когда конкретный источник и издание это допускают.
          В остальных случаях Partitoria открывает официальную страницу источника в браузере.
        </p>
        <p>
          Условия, лицензии и региональная доступность могут изменяться. Перед использованием файла проверяйте
          сведения на странице конкретного издания.
        </p>
      </section>

      <section id="english" lang="en">
        <p className="eyebrow">English</p>
        <h2>Score sources</h2>
        <p>
          Partitoria may help find editions in the independent public archives listed above. Search begins only
          after an explicit user action. Direct download is enabled only for public-domain or openly licensed
          editions where the specific source and edition permit it; otherwise Partitoria opens the official
          source page in your browser. Check the current licence and regional availability for each edition.
        </p>
      </section>
    </PolicyLayout>
  );
}
