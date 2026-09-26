import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Авторские права | Partitoria',
  description: 'Политика Partitoria в отношении нот, лицензий и обращений правообладателей.',
};

export const dynamic = 'force-static';

export default function CopyrightPage() {
  return (
    <PolicyLayout
      section="/copyright"
      eyebrow="Права и источники"
      title="Авторские права"
      summary="Partitoria — инструмент для личной библиотеки. Приложение не передаёт пользователю права на импортированные или найденные издания."
    >
      <section>
        <h2>Ответственность пользователя</h2>
        <p>
          Импортируйте и используйте только те PDF, которыми вы вправе пользоваться.
          Копирование файла в Partitoria, создание резервной копии или экспорт не меняют его правовой статус.
        </p>
      </section>

      <section>
        <h2>Внешние издания</h2>
        <p>
          Интернет-поиск отделён от личной библиотеки. Результат становится её частью только после вашего
          явного действия. Возможность загрузки оценивается для каждого издания и региона отдельно;
          ссылки на источник, автора издания, атрибуцию и лицензию должны сохраняться.
        </p>
        <p>
          Partitoria не продаёт сторонние ноты как собственный контент и не связана с внешними архивами,
          если это прямо не указано.
        </p>
      </section>

      <section>
        <h2>Обращение правообладателя</h2>
        <p>
          Если ссылка или описание на этом сайте либо в приложении нарушает ваши права,
          напишите на <a href="mailto:support@partitoria.app?subject=Copyright%20notice">support@partitoria.app</a>.
          Укажите произведение и издание, точный URL, основание ваших прав, желаемое действие и способ связи.
          Мы проверим обращение и при необходимости удалим или ограничим спорную ссылку.
        </p>
        <p>
          Partitoria не может удалить файл с независимого внешнего сайта: по поводу размещённого там материала
          следует также обратиться к оператору этого сайта.
        </p>
      </section>

      <section id="english" lang="en">
        <p className="eyebrow">English</p>
        <h2>Copyright</h2>
        <p>
          Import and use only PDFs you are entitled to use. Import, backup, and export do not change a file&apos;s
          copyright or licence status. Online discovery remains separate from the personal library until you
          explicitly save or download an item. Rights and regional eligibility are assessed per edition.
        </p>
        <p>
          Partitoria does not sell third-party scores as its own content and is not affiliated with external
          archives unless expressly stated. To report an infringing link or description, email
          <a href="mailto:support@partitoria.app?subject=Copyright%20notice"> support@partitoria.app</a> with the
          work and edition, exact URL, basis of your rights, requested action, and contact details.
          We cannot remove material hosted by an independent website.
        </p>
      </section>
    </PolicyLayout>
  );
}
