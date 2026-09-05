import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/policy-layout';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Partitoria',
  description: 'Политика конфиденциальности приложения Partitoria.',
};

export const dynamic = 'force-static';

export default function PrivacyPage() {
  return (
    <PolicyLayout
      eyebrow="Конфиденциальность"
      title="Политика конфиденциальности"
      summary="Partitoria хранит личную нотную библиотеку на устройстве и не использует рекламу, поведенческую аналитику или облачный аккаунт Partitoria."
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
          Импортированные PDF, названия файлов, музыкальные метаданные, теги, коллекции,
          избранное, история чтения, номера страниц, журналы импорта и сведения для
          восстановления хранятся локально. Partitoria не отправляет эти данные на собственный сервер.
        </p>
        <p>
          Приложение не требует аккаунта Partitoria и не содержит рекламных,
          поведенческих аналитических или социальных SDK.
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
      </section>

      <section>
        <h2>Защита и изменения</h2>
        <p>
          Сетевые обращения приложения используют HTTPS. Автоматическое резервное копирование Android
          исключает базу личной библиотеки и управляемые нотные файлы; для переноса используется отдельный
          экспорт или резервная копия, запускаемая пользователем. Если функциональность или потоки данных
          изменятся, эта политика будет обновлена до выпуска соответствующей версии.
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
          Imported PDFs, filenames, musical metadata, tags, collections, favourites, reading history,
          page positions, import journals, and recovery data are stored locally. Partitoria does not upload
          them to a Partitoria-operated server. The application does not require a Partitoria account and
          contains no advertising, behavioural analytics, or social SDKs.
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
          Application network requests use HTTPS. Android automatic backup excludes the personal-library
          database and managed score files. This policy will be updated before a release that materially
          changes these data flows. Effective 5 September 2026.
        </p>
      </section>
    </PolicyLayout>
  );
}
