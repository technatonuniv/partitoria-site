import type { Locale } from './site-content';

// Existing private licences remain separate from public store subscriptions.
export const privacyDetails: Record<Locale, { title: string; text: string }> = {
  ru: {
    title: 'Ранее выданный закрытый доступ',
    text: 'Сведения только для существующих участников прежнего отдельного закрытого канала, без предложения публичной регистрации. Подтверждённый email, сведения об устройстве и лицензии обрабатываются для прежнего доступа. Письма доставляет Resend (данные в США, письма и журналы — 30 дней); отслеживание открытий и переходов выключено. Наш аудит и метаданные доставки без кодов сохраняются до 90 дней. Запрос удаления можно направить на support@partitoria.app без приложения; перед исполнением он проверяется. Локальная библиотека остаётся. Прежний подписанный офлайн-доступ может действовать до указанного срока, максимум 30 дней; это не срок лицензии Google Play. Удаление серверных копий описано выше.',
  },
  en: {
    title: 'Previously issued closed access',
    text: 'This applies only to existing participants of the former separate closed channel, without offering public registration. Confirmed email, device and licence details are processed for that earlier access. Resend delivers mail (US storage; email and logs: 30 days); open and click tracking are off. Our audit and code-free delivery metadata last up to 90 days. Request deletion at support@partitoria.app, including without the app; requests are verified before action. Your local library remains. An earlier signed offline grant may last until its displayed expiry, at most 30 days; this is not the Google Play licence period. Server-backup deletion is described above.',
  },
  de: {
    title: 'Früher erteilter geschlossener Zugang',
    text: 'Dies gilt nur für bestehende Teilnehmer des früheren getrennten geschlossenen Kanals, ohne öffentliche Registrierung anzubieten. Bestätigte E-Mail-, Geräte- und Lizenzdaten dienen diesem früheren Zugang. Resend versendet E-Mails (US-Speicherung; Nachrichten und Protokolle: 30 Tage); Öffnungs- und Klicktracking sind aus. Unser Audit und codefreie Zustelldaten bleiben bis 90 Tage. Löschung können Sie auch ohne App bei support@partitoria.app beantragen; Anfragen werden vor Umsetzung geprüft. Die lokale Bibliothek bleibt. Früherer signierter Offline-Zugang gilt bis zum angezeigten Ende, maximal 30 Tage; dies ist nicht die Google-Play-Lizenzfrist. Die Löschung von Serversicherungen ist oben beschrieben.',
  },
  it: {
    title: 'Accesso chiuso concesso in precedenza',
    text: 'Vale solo per partecipanti esistenti del precedente canale chiuso separato, senza offrire registrazione pubblica. Email confermata, dispositivo e licenza servono a quell’accesso precedente. Resend invia email (dati negli USA; messaggi e log: 30 giorni); tracciamento aperture e clic disattivato. Il nostro audit e i metadati di consegna senza codici restano fino a 90 giorni. Chiedi cancellazione a support@partitoria.app anche senza app; la richiesta viene verificata prima di agire. La biblioteca locale resta. Il precedente accesso offline firmato può valere fino alla scadenza indicata, al massimo 30 giorni; non è la durata della licenza Google Play. La cancellazione dei backup server è descritta sopra.',
  },
  es: {
    title: 'Acceso cerrado concedido anteriormente',
    text: 'Solo se aplica a participantes existentes del antiguo canal cerrado separado, sin ofrecer registro público. Correo confirmado, dispositivo y licencia se tratan para ese acceso anterior. Resend entrega correo (datos en EE. UU.; mensajes y registros: 30 días); seguimiento de aperturas y clics desactivado. Nuestro registro de auditoría y metadatos de entrega sin códigos duran hasta 90 días. Solicita eliminación a support@partitoria.app, también sin la app; se verifica antes de actuar. La biblioteca local permanece. El permiso anterior sin conexión puede durar hasta la fecha indicada, como máximo 30 días; no es el periodo de licencia Google Play. La eliminación de copias del servidor se describe arriba.',
  },
  pt: {
    title: 'Acesso fechado concedido anteriormente',
    text: 'Aplica-se só aos participantes existentes do antigo canal fechado separado, sem oferecer registo público. Email confirmado, dispositivo e licença são tratados para esse acesso anterior. A Resend entrega email (dados nos EUA; mensagens e registos: 30 dias); seguimento de aberturas e cliques desligado. A nossa auditoria e metadados de entrega sem códigos duram até 90 dias. Peça eliminação a support@partitoria.app mesmo sem aplicação; o pedido é verificado antes de agir. A biblioteca local fica. O acesso offline anterior pode durar até à data indicada, no máximo 30 dias; não é o prazo da licença Google Play. A eliminação de cópias do servidor é descrita acima.',
  },
  uk: {
    title: 'Раніше наданий закритий доступ',
    text: 'Це лише для наявних учасників колишнього окремого закритого каналу, без пропозиції публічної реєстрації. Підтверджений email, відомості про пристрій і ліцензію обробляються для попереднього доступу. Листи доставляє Resend (дані у США; листи й журнали — 30 днів); відстеження відкриттів і переходів вимкнено. Наш аудит і метадані доставки без кодів зберігаються до 90 днів. Запит видалення можна надіслати на support@partitoria.app без застосунку; його перевіряють перед виконанням. Локальна бібліотека залишається. Попередній підписаний офлайн-доступ може діяти до вказаного строку, максимум 30 днів; це не строк ліцензії Google Play. Видалення серверних копій описане вище.',
  },
  fr: {
    title: 'Accès fermé accordé auparavant',
    text: 'Cela concerne uniquement les participants existants de l’ancien canal fermé distinct, sans proposer d’inscription publique. Adresse confirmée, appareil et licence servent à cet accès antérieur. Resend transmet les e-mails (stockage aux États-Unis ; messages et journaux : 30 jours) ; suivi des ouvertures et clics désactivé. Notre audit et les métadonnées de livraison sans codes durent jusqu’à 90 jours. Demandez la suppression à support@partitoria.app même sans application ; la demande est vérifiée avant action. La bibliothèque locale reste. L’ancien accès hors ligne signé peut durer jusqu’à l’échéance indiquée, au maximum 30 jours ; ce n’est pas la durée de licence Google Play. La suppression des sauvegardes serveur est décrite ci-dessus.',
  },
  pl: {
    title: 'Wcześniej przyznany zamknięty dostęp',
    text: 'Dotyczy tylko istniejących uczestników dawnego osobnego zamkniętego kanału, bez oferty publicznej rejestracji. Potwierdzony e-mail, urządzenie i licencja są przetwarzane dla wcześniejszego dostępu. Resend dostarcza pocztę (dane w USA; wiadomości i logi: 30 dni); śledzenie otwarć i kliknięć wyłączone. Nasz audyt i metadane doręczeń bez kodów trwają do 90 dni. Zgłoś usunięcie na support@partitoria.app także bez aplikacji; zgłoszenie jest weryfikowane przed wykonaniem. Lokalna biblioteka pozostaje. Wcześniejszy podpisany dostęp offline może trwać do wskazanej daty, najwyżej 30 dni; to nie okres licencji Google Play. Usuwanie kopii serwera opisano powyżej.',
  },
};
