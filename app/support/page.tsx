import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Поддержка | Partitoria',
  description: 'Поддержка приложения Partitoria и правила безопасного обращения.',
};

export const dynamic = 'force-static';

export default function SupportPage() {
  return (
    <PolicyLayout
      eyebrow="Поддержка"
      title="Мы поможем разобраться"
      summary="Partitoria готовится к открытому тестированию. Уже сейчас можно сообщить о проблеме с сайтом или задать вопрос о приложении."
    >
      <section>
        <h2>Связаться</h2>
        <p>
          Напишите на <a href="mailto:support@partitoria.app">support@partitoria.app</a>.
          Обычно достаточно указать модель устройства, версию Android, версию Partitoria
          и коротко описать, что вы делали и что произошло.
        </p>
        <a className="primary-link" href="mailto:support@partitoria.app?subject=Partitoria%20support">
          Написать в поддержку
        </a>
      </section>

      <section>
        <h2>Не отправляйте личные ноты без необходимости</h2>
        <p>
          Не прикладывайте PDF, резервную копию библиотеки, ключи подписи, пароли или платёжные сведения,
          если мы явно не договорились о безопасном способе передачи. Для обычной диагностики полезнее
          текст ошибки и последовательность действий.
        </p>
      </section>

      <section>
        <h2>Перед обращением</h2>
        <ul>
          <li>Убедитесь, что нужный файл по-прежнему открывается в другом приложении.</li>
          <li>Не удаляйте оригинал и резервную копию до завершения восстановления.</li>
          <li>Если проблема связана с интернет-источником, укажите его название и ссылку на страницу.</li>
        </ul>
      </section>

      <section id="english" lang="en">
        <p className="eyebrow">English</p>
        <h2>Support</h2>
        <p>
          Email <a href="mailto:support@partitoria.app">support@partitoria.app</a>. Include your device model,
          Android version, Partitoria version, the steps you took, and what happened.
        </p>
        <p>
          Please do not attach score PDFs, library backups, signing keys, passwords, or payment information
          unless we have agreed on a safe and necessary way to provide them. Keep the original file and any
          backup until recovery is complete.
        </p>
      </section>
    </PolicyLayout>
  );
}
