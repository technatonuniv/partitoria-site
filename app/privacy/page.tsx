import type { Metadata } from 'next';
import Link from 'next/link';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Partitoria',
  description: 'Политика конфиденциальности приложения Partitoria.',
};

export const dynamic = 'force-static';

export default function PrivacyPage() {
  return (
    <PolicyLayout
      section="/privacy"
      eyebrow="Конфиденциальность"
      title="Политика конфиденциальности"
      summary="Личная нотная библиотека остаётся на устройстве. Для приглашённых участников закрытого пилота доступен необязательный аккаунт для лицензии Pro."
      effectiveDate="24 сентября 2026 года"
    >
      <section>
        <h2>Кто отвечает за приложение</h2>
        <p>
          Partitoria — независимое Android-приложение, публикуемое под именем Partitoria Studio.
          По вопросам конфиденциальности напишите на <a href="mailto:support@partitoria.app">support@partitoria.app</a>.
        </p>
      </section>

      <section>
        <h2>Что остаётся на устройстве</h2>
        <p>
          Импортированные PDF и аудиофайлы, локальные записи, названия файлов, музыкальные
          метаданные, теги, коллекции, избранное, история чтения, номера страниц, пометки,
          программы, журналы импорта и сведения для восстановления хранятся локально.
          Partitoria не отправляет эти данные на собственный сервер.
        </p>
        <p>
          Для личной библиотеки аккаунт Partitoria не требуется. Приложение не содержит рекламных,
          поведенческих аналитических или социальных SDK.
        </p>
      </section>

      <section>
        <h2>Необязательный аккаунт закрытого пилота</h2>
        <p>
          Только приглашённые адреса могут войти по одноразовому коду и получить выданную
          владельцем лицензию Pro. Сервер Partitoria получает подтверждённый email, идентификатор
          аккаунта, открытый ключ установки, аппаратное доказательство приложения и устройства,
          технический IP-адрес запроса, состояние лицензии и устройств. Он выдаёт подписанное
          разрешение с ограниченным сроком для работы офлайн. PDF, содержимое библиотеки,
          названия файлов, пометки и историю занятий сервер не получает. Публичная регистрация,
          покупка и подписка в этом пилоте не включены.
        </p>
        <p>
          Одноразовые коды отправляет Resend. Наш почтовый журнал хранит безопасные метаданные
          доставки до 90 дней, без кода и полного текста письма; зашифрованные резервные копии
          сервера хранятся до 30 дней. По{' '}
          <a href="https://resend.com/security/gdpr">заявлению Resend</a>, содержимое писем и
          журналы хранятся у него 30 дней в США. Отслеживание открытий и переходов отключено.
        </p>
      </section>

      <section>
        <h2>Микрофон и локальная запись</h2>
        <p>
          Доступ к микрофону запрашивается только после нажатия пользователем кнопки записи.
          Запись видима на экране и останавливается при потере разрешения или при прерывании
          работы приложения. Partitoria не записывает в фоне, не расшифровывает и не анализирует
          звук и не отправляет запись в интернет. Запись можно воспроизвести, экспортировать,
          удалить и включить в ручную резервную копию.
        </p>
      </section>

      <section>
        <h2>Когда данные покидают устройство</h2>
        <ul>
          <li>
            <strong>Поиск в интернете.</strong> Только после явной команды поиска запрос передаётся по HTTPS
            внешним источникам: IMSLP, Wikimedia Commons, Internet Archive, Gallica/BnF и Library of Congress.
            Эти сайты также получают обычные технические данные запроса, включая IP-адрес и User-Agent.
          </li>
          <li>
            <strong>Загрузка нот.</strong> После выбора загрузки устройство обращается к разрешённому
            источнику файла, например Mutopia, Wikimedia или Internet Archive.
          </li>
          <li>
            <strong>Внешние ссылки.</strong> Страница источника или лицензии открывается в системном браузере,
            где действует политика выбранного сайта.
          </li>
          <li>
            <strong>Файлы в облачном хранилище.</strong> Если вы сами выбираете облачного поставщика
            в системном файловом окне Android для импорта, экспорта или резервной копии,
            этот поставщик обрабатывает файл по своим правилам. Это не облако Partitoria.
          </li>
        </ul>
      </section>

      <section>
        <h2>Управление и удаление</h2>
        <p>
          Вы можете удалять элементы библиотеки и локальную историю средствами приложения,
          экспортировать свои данные, очистить данные приложения в настройках Android или удалить приложение.
          Внешние резервные копии удаляются вами в выбранном хранилище. Partitoria не может удалить журналы
          внешних сайтов, к которым устройство обращалось по вашей команде.
        </p>
        <p>
          Аккаунт закрытого пилота можно удалить в приложении после нового кода из письма либо{' '}
          <Link href="/support">запросить удаление без приложения</Link>. Оператор подтверждает запрос
          кодом, отправленным на уже подтверждённый адрес. Активные данные аккаунта и ожидающие
          письма удаляются после подтверждения; псевдонимизированный журнал сохраняется до 90 дней,
          зашифрованные копии — до 30 дней. Восстановление старой копии блокируется до сверки
          удалений и отзывов. Удаление аккаунта не удаляет локальную библиотеку. Уже выданное
          разрешение Pro может оставаться действительным офлайн до своего срока, не более 30 дней.
        </p>
      </section>

      <section>
        <h2>Дети и подростки</h2>
        <p>
          Partitoria — профессиональный музыкальный инструмент для музыкантов от 13 лет и взрослых;
          приложение не предназначено для детей младше 13 лет. Аккаунт закрытого пилота доступен
          только приглашённым участникам; рекламы, социальных функций и поведенческой аналитики нет.
          Если местное право требует согласия
          родителя или опекуна для использования интернет-сервисов подростком, не используйте
          поиск и загрузку из внешних источников без такого согласия. Личная офлайн-библиотека
          не требует передачи данных Partitoria.
        </p>
      </section>

      <section>
        <h2>Защита и изменения</h2>
        <p>
          Сетевые обращения приложения используют HTTPS. Автоматическое резервное копирование Android
          исключает базу личной библиотеки и управляемые нотные файлы; для переноса используется отдельный
          экспорт или резервная копия, запускаемая пользователем. Если функциональность или потоки данных
          изменятся, эта политика будет обновлена до выпуска соответствующей версии.
        </p>
        <p>
          Магазинные покупки и подписки не активны. Закрытый пилот передаёт только данные
          аккаунта и установки, описанные выше; токены покупок не передаются. Перед публичным
          выпуском аккаунтов или платных функций политика и декларации магазинов будут проверены заново.
        </p>
      </section>

      <section id="english" lang="en">
        <p className="eyebrow">English</p>
        <h2>Privacy Policy</h2>
        <p>
          Partitoria is an independent Android application published under the name Partitoria Studio.
          Privacy questions can be sent to <a href="mailto:support@partitoria.app">support@partitoria.app</a>.
        </p>
        <p>
          Imported PDFs and audio, local recordings, filenames, musical metadata, tags, collections,
          favourites, reading history, page positions, annotations, programmes, import journals, and
          recovery data are stored locally. Partitoria does not upload them to a Partitoria-operated
          server. The personal library does not require an account and contains no advertising,
          behavioural analytics, or social SDKs.
        </p>
        <p>
          An optional account is available only to invited closed-pilot participants. The Partitoria
          server processes a confirmed email, account ID, installation public key, hardware app/device
          proof, request IP address, licence and device state, and issues a signed time-limited offline
          Pro licence. It receives no scores, filenames, annotations or practice history. There is no
          public registration, purchase or subscription in this pilot. Resend sends one-time codes;
          our code-free delivery journal is kept for up to 90 days, and encrypted server backups for
          up to 30 days. <a href="https://resend.com/security/gdpr">Resend states</a> that it stores
          email content and logs in the United States for 30 days. Open and click tracking are off.
        </p>
        <p>
          Microphone access is requested only after you press Record. Recording is visible and stops if
          permission is lost or the app is interrupted. Partitoria does not record in the background,
          transcribe or analyse audio, or upload recordings. You can play, export, delete, and include a
          recording in a manual backup.
        </p>
        <p>
          When you explicitly submit an online search, the query is sent over HTTPS to external providers:
          IMSLP, Wikimedia Commons, Internet Archive, Gallica/BnF, and the Library of Congress. They also
          receive ordinary request information such as your IP address and User-Agent. A selected download
          contacts the permitted file host. Source and licence links open in your system browser.
        </p>
        <p>
          If you choose a cloud-backed Android document provider for import, export, or backup, that provider
          handles the selected data under its own policy; it is not Partitoria cloud storage. You can remove
          local items and history in the app, clear app data in Android, uninstall the app, and manage exported
          backups at their destination. Partitoria cannot erase logs held by third-party websites.
        </p>
        <p>
          You can delete a pilot account in the app with a fresh email code or{' '}
          <Link href="/support">request deletion without the app</Link>. The operator verifies the request
          with a new code sent to the confirmed address. Active account data and queued mail are
          removed after confirmation; pseudonymous audit data is retained for up to 90 days and
          encrypted backups for up to 30 days. Restoring an older backup is blocked pending deletion
          and revocation reconciliation. Local scores remain yours. A previously issued offline Pro
          licence can persist until its expiry, at most 30 days.
        </p>
        <p>
          Partitoria is a professional music utility for musicians aged 13 and over and adults; it is not
          directed to children under 13. The closed-pilot account is invitation-only; there is no
          advertising, social feature or behavioural analytics. Where local law requires parental or
          guardian consent for a teenager to use online
          services, do not use external-provider search or download without that consent. The personal offline
          library does not require data transmission to Partitoria.
        </p>
        <p>
          Application network requests use HTTPS. Android automatic backup excludes the personal-library
          database and managed score files. This policy will be updated before a release that materially
          changes these data flows. Store purchases and subscriptions are not active; the closed pilot
          processes only the account and installation data described above and no purchase token.
          Store disclosures will be reviewed before public accounts or paid features are activated.
          Effective 24 September 2026.
        </p>
      </section>
    </PolicyLayout>
  );
}
