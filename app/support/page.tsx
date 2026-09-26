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
      section="/support"
      eyebrow="Поддержка"
      title="Мы поможем разобраться"
      summary="Partitoria проходит закрытое тестирование. Здесь можно сообщить о проблеме и запросить удаление приглашённого аккаунта без приложения."
      effectiveDate="24 сентября 2026 года"
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
        <h2>Удаление аккаунта закрытого пилота</h2>
        <p>
          Если у вас есть приглашённый аккаунт Partitoria, удаление можно начать в приложении.
          Запрос без приложения направьте на{' '}
          <a href="mailto:support@partitoria.app?subject=Partitoria%20account%20deletion">
            support@partitoria.app
          </a>. Укажите подтверждённый адрес аккаунта; не присылайте пароль, одноразовый код,
          PDF или резервную копию библиотеки. Оператор проверит запрос и отправит свежий код
          на адрес аккаунта. Одного знания адреса для удаления или переноса доступа недостаточно.
          Удаление аккаунта не удаляет ноты с устройства; ранее выданный офлайн-доступ может
          действовать до указанного в приложении срока.
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
        <p>
          Invited pilot account holders can request deletion in the app or email{' '}
          <a href="mailto:support@partitoria.app?subject=Partitoria%20account%20deletion">
            support@partitoria.app
          </a> without the app. Include the confirmed account email, but do not send passwords,
          one-time codes, scores or library backups in the initial request. The operator verifies
          the request with a fresh code sent to that email. Knowing the address alone is insufficient.
          Deleting an account does not delete local scores; an existing offline licence may remain
          valid until its displayed expiry.
        </p>
      </section>
    </PolicyLayout>
  );
}
