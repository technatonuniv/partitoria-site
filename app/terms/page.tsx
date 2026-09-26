import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Условия использования | Partitoria',
  description: 'Условия использования приложения и сайта Partitoria.',
};

export const dynamic = 'force-static';

export default function TermsPage() {
  return (
    <PolicyLayout
      section="/terms"
      eyebrow="Правовая информация"
      title="Условия использования"
      summary="Эти условия применяются к сайту Partitoria и публично распространяемым версиям приложения."
    >
      <section>
        <h2>Назначение</h2>
        <p>
          Partitoria помогает организовывать и читать личную нотную библиотеку. Пользователь самостоятельно
          отвечает за законность получения, хранения, копирования, исполнения и распространения своих файлов.
        </p>
      </section>

      <section>
        <h2>Внешние сервисы</h2>
        <p>
          Приложение может показывать ссылки или результаты независимых архивов. Их доступность, содержание,
          лицензии, региональные ограничения и правила контролируются соответствующими операторами.
          Partitoria не гарантирует постоянную доступность стороннего материала.
        </p>
      </section>

      <section>
        <h2>Данные и резервные копии</h2>
        <p>
          Сохраняйте проверенные резервные копии важных файлов. Хотя Partitoria проектируется с приоритетом
          целостности и восстановления, ни одно устройство или программное обеспечение не исключает полностью
          риск потери данных. Не удаляйте единственный внешний оригинал после импорта.
        </p>
      </section>

      <section>
        <h2>Изменения</h2>
        <p>
          Существенные изменения условий будут опубликованы на этой странице с новой датой действия.
          Вопросы можно направить на <a href="mailto:support@partitoria.app">support@partitoria.app</a>.
        </p>
      </section>

      <section id="english" lang="en">
        <p className="eyebrow">English</p>
        <h2>Terms of Use</h2>
        <p>
          These terms apply to the Partitoria website and publicly distributed versions of the application.
          Partitoria helps organise and read a personal sheet-music library. You are responsible for ensuring
          that you may lawfully obtain, store, copy, perform, and distribute your files.
        </p>
        <p>
          Links and search results may come from independent archives that control their own availability,
          content, licences, regional restrictions, and terms. Keep verified backups of important files and
          do not delete your only external original after import. Material changes will be published here with
          a new effective date. Contact: <a href="mailto:support@partitoria.app">support@partitoria.app</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
