import type { Locale } from './site-content';

export const launchPrices = [
  { usd: '1.99', eur: '2.49' },
  { usd: '4.99', eur: '5.99' },
  { usd: '8.99', eur: '10.99' },
  { usd: '14.99', eur: '17.99' },
] as const;

type CommercialCopy = {
  title: string;
  free: string;
  pro: string;
  periods: [string, string, string, string];
  tableLabels: [string, string, string];
  priceNote: string;
  trial: string;
  manage: string;
  offline: string;
  availability: string;
  termsLabel: string;
};

// Approved launch terms. The website does not sell or activate subscriptions.
export const commercialCopy: Record<Locale, CommercialCopy> = {
  ru: {
    title: 'Библиотека бесплатно. Pro — по желанию',
    free: 'Импорт, обычные сведения, теги и коллекции, локальный поиск и чтение, восстановление, экспорт оригиналов и полные ручные резервные копии остаются бесплатными. Аккаунт Partitoria не нужен.',
    pro: 'Partitoria Pro добавляет пометки, профили чтения и навигацию, программы и режим исполнения, настройку клавиш, педалей и MIDI, репетиционные задачи, метроном и локальное аудио, перенос пометок с проверкой, умные коллекции и автоматические локальные снимки. Все четыре срока открывают одинаковые возможности.',
    periods: ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев'],
    tableLabels: ['Срок подписки', 'США · USD', 'Еврозона · EUR'],
    priceNote: 'Планируемая цена за весь выбранный срок, не за каждый месяц. В других странах действует локальная цена Google Play. Итоговая цена, налоги и даты показаны магазином перед подтверждением.',
    trial: 'Подходящему новому подписчику Google Play предлагает один календарный месяц полного Pro. Это магазинный месяц, а не 30 дней по таймеру приложения. После него списывается полная цена выбранного срока, и подписка продлевается автоматически, если её не отменить. Доступность и точные даты определяет Google Play; смена срока, переустановка или другое устройство не дают повторный trial.',
    manage: "Отмена останавливает продление: доступ сохраняется до подтверждённой магазином даты окончания оплаченного или пробного периода, если покупка не возвращена или не отозвана. Покупка требует вашего подтверждения в Google Play. Отмените подписку в разделе «Платежи и подписки → Подписки» до следующего списания. Удаление приложения не отменяет подписку. Восстановление использует тот же Google-аккаунт; при проблеме с оплатой или возвратом действуют правила Google Play. Сохранённые ноты, пометки, программы и записи остаются доступны для чтения, экспорта, удаления и восстановления после окончания Pro.",
    offline: 'После проверки покупки Pro действует офлайн по подписанному разрешению до 7 дней, но не дольше подтверждённого магазином срока доступа. Примерно через сутки после последней проверки приложение может попытаться обновить разрешение, когда оно открыто, есть сеть и доступны сервисы Google Play. Время успешной проверки зависит от их доступности; ежедневное или фоновое обновление не гарантируется. Обновите доступ перед длительной поездкой или выступлением. Уже начатое разрешённое исполнение не прерывается из-за временной недоступности сервиса; после окончания разрешения для новых Pro-действий понадобится проверка. Free-библиотека остаётся офлайн.',
    availability: 'Коммерческий выпуск готовится; сейчас доступ ограничен тестированием. Цель — распространение во всех разрешённых странах Google Play. Подписки доступны только там, где магазин поддерживает оплату; при недоступной оплате сохраняется Free. Официальная ссылка появится после открытия соответствующего выпуска.',
    termsLabel: 'Условия подписки',
  },
  en: {
    title: 'A free library. Optional Pro',
    free: 'Import, ordinary metadata, tags and collections, local search and reading, recovery, original export and complete manual backups stay free. No Partitoria account is needed.',
    pro: 'Partitoria Pro adds annotations, reading profiles and navigation, programmes and performance mode, custom keyboard, pedal and MIDI controls, rehearsal tasks, metronome and local audio, reviewed annotation transfer, smart collections and automatic local snapshots. All four periods unlock the same features.',
    periods: ['1 month', '3 months', '6 months', '12 months'],
    tableLabels: ['Subscription period', 'USA · USD', 'Eurozone · EUR'],
    priceNote: 'Planned total for the entire selected period, not a monthly equivalent. Google Play localises prices in other countries. The store shows the final price, tax treatment and dates before you confirm.',
    trial: 'Eligible new subscribers can receive one calendar month of full Pro through Google Play. This is a store-managed month, not an app timer counting 30 days. The full selected-period price is charged afterwards and renews automatically unless cancelled. Google Play determines eligibility and exact dates; changing plans, reinstalling or using another device does not create another trial.',
    manage: "Cancellation stops renewal: access continues until the store-confirmed end of the paid or trial period unless the purchase is refunded or revoked. A purchase requires your confirmation in Google Play. Cancel under Payments and subscriptions → Subscriptions before the next charge. Uninstalling does not cancel a subscription. Restore with the same Google account; payment issues and refunds follow Google Play rules. Saved scores, annotations, programmes and recordings remain readable, exportable, deletable and recoverable after Pro ends.",
    offline: 'After purchase verification, a signed Pro licence works offline for up to 7 days, capped by the access period confirmed by the store. About 24 hours after the last check, the app may attempt a refresh while open, with internet and Google Play services available. Successful timing depends on their availability; daily or background refresh is not guaranteed. Refresh before a long trip or performance. An admitted performance is not interrupted by a temporary service outage; new Pro actions need verification after the licence expires. Your Free library stays offline.',
    availability: 'The commercial release is in preparation; availability is currently limited to testing. Distribution is intended for all permitted Google Play countries. Subscriptions require supported store billing in your market; Free remains available when billing is unavailable. An official link will appear when the corresponding release opens.',
    termsLabel: 'Subscription terms',
  },
  de: {
    title: 'Kostenlose Bibliothek. Pro auf Wunsch',
    free: 'Import, normale Metadaten, Tags und Sammlungen, lokale Suche und Lesen, Wiederherstellung, Originalexport und vollständige manuelle Sicherungen bleiben kostenlos. Ein Partitoria-Konto ist nicht nötig.',
    pro: 'Partitoria Pro ergänzt Anmerkungen, Leseprofile und Navigation, Programme und Aufführungsmodus, eigene Tasten-, Pedal- und MIDI-Belegung, Übungsaufgaben, Metronom und lokales Audio, geprüfte Übertragung von Anmerkungen, intelligente Sammlungen und automatische lokale Sicherungen. Alle vier Laufzeiten bieten dieselben Funktionen.',
    periods: ['1 Monat', '3 Monate', '6 Monate', '12 Monate'],
    tableLabels: ['Abonnementlaufzeit', 'USA · USD', 'Eurozone · EUR'],
    priceNote: 'Geplanter Gesamtpreis für die gewählte Laufzeit, kein monatlicher Vergleichspreis. In anderen Ländern lokalisiert Google Play die Preise. Endpreis, Steuern und Termine zeigt der Store vor der Bestätigung.',
    trial: 'Berechtigte neue Abonnenten können einen Kalendermonat vollständiges Pro über Google Play erhalten. Es gilt der Store-Monat, kein App-Timer für 30 Tage. Danach wird der volle Laufzeitpreis berechnet; das Abonnement verlängert sich automatisch, sofern es nicht gekündigt wird. Google Play bestimmt Berechtigung und genaue Termine. Ein Planwechsel, eine Neuinstallation oder ein anderes Gerät erzeugt keinen weiteren Testzeitraum.',
    manage: "Die Kündigung stoppt die Verlängerung: Der Zugang bleibt bis zum bestätigten Ende des bezahlten oder Testzeitraums, sofern der Kauf nicht erstattet oder widerrufen wird. Ein Kauf erfordert Ihre Bestätigung in Google Play. Kündigen Sie vor der nächsten Zahlung unter Zahlungen und Abos → Abos. Deinstallation kündigt nicht. Stellen Sie Käufe mit demselben Google-Konto wieder her; für Zahlungsprobleme und Erstattungen gelten die Google-Play-Regeln. Gespeicherte Noten, Anmerkungen, Programme und Aufnahmen bleiben nach Pro lesbar, exportierbar, löschbar und wiederherstellbar.",
    offline: 'Nach der Kaufprüfung gilt die signierte Pro-Lizenz offline bis zu 7 Tage, höchstens bis zum bestätigten Ende des Store-Zugangs. Etwa 24 Stunden nach der letzten Prüfung kann die geöffnete App eine Aktualisierung versuchen, wenn Internet und Google-Play-Dienste verfügbar sind. Der erfolgreiche Zeitpunkt hängt von ihrer Verfügbarkeit ab; tägliche oder Hintergrundaktualisierung ist nicht garantiert. Aktualisieren Sie vor einer längeren Reise oder Aufführung. Eine begonnene berechtigte Aufführung wird durch einen vorübergehenden Ausfall nicht unterbrochen; nach Lizenzablauf brauchen neue Pro-Aktionen eine Prüfung. Die kostenlose Bibliothek bleibt offline.',
    availability: 'Der kommerzielle Start wird vorbereitet; der Zugang ist derzeit auf Tests beschränkt. Geplant ist die Verteilung in allen zulässigen Google-Play-Ländern. Abonnements benötigen unterstützte Store-Zahlungen im jeweiligen Markt; ohne diese bleibt Free verfügbar. Der offizielle Link erscheint zum jeweiligen Start.',
    termsLabel: 'Abonnementbedingungen',
  },
  it: {
    title: 'Biblioteca gratuita. Pro facoltativo',
    free: 'Importazione, metadati ordinari, tag e raccolte, ricerca e lettura locali, recupero, esportazione degli originali e backup manuali completi restano gratuiti. Non serve un account Partitoria.',
    pro: 'Partitoria Pro aggiunge annotazioni, profili di lettura e navigazione, programmi e modalità esecuzione, comandi personalizzati per tastiera, pedali e MIDI, attività di studio, metronomo e audio locale, trasferimento controllato delle annotazioni, raccolte intelligenti e snapshot locali automatici. Le quattro durate offrono le stesse funzioni.',
    periods: ['1 mese', '3 mesi', '6 mesi', '12 mesi'],
    tableLabels: ['Durata dell’abbonamento', 'USA · USD', 'Eurozona · EUR'],
    priceNote: 'Prezzo previsto per l’intera durata scelta, non un equivalente mensile. Negli altri paesi Google Play localizza i prezzi. Lo store mostra prezzo finale, imposte e date prima della conferma.',
    trial: 'I nuovi abbonati idonei possono ricevere un mese di calendario di Pro completo tramite Google Play. È un mese gestito dallo store, non un timer di 30 giorni dell’app. Poi viene addebitato il prezzo totale della durata scelta, con rinnovo automatico salvo disdetta. Google Play stabilisce idoneità e date esatte; cambiare piano, reinstallare o usare un altro dispositivo non concede un’altra prova.',
    manage: "La disdetta ferma il rinnovo: l’accesso continua fino alla scadenza confermata del periodo pagato o di prova, salvo rimborso o revoca. L’acquisto richiede la tua conferma in Google Play. Disdici in Pagamenti e abbonamenti → Abbonamenti prima dell’addebito successivo. Disinstallare non annulla l’abbonamento. Ripristina con lo stesso account Google; per pagamenti e rimborsi valgono le regole di Google Play. Spartiti, annotazioni, programmi e registrazioni salvati restano leggibili, esportabili, eliminabili e recuperabili dopo Pro.",
    offline: 'Dopo la verifica dell’acquisto, la licenza Pro firmata funziona offline fino a 7 giorni, senza superare il periodo confermato dallo store. Circa 24 ore dopo l’ultima verifica, l’app aperta può tentare un aggiornamento con internet e servizi Google Play disponibili. Il momento della verifica riuscita dipende dalla loro disponibilità; un aggiornamento quotidiano o in background non è garantito. Aggiornala prima di un viaggio lungo o un concerto. Un’esecuzione già autorizzata non si interrompe per un guasto temporaneo del servizio; dopo la scadenza, le nuove azioni Pro richiedono una verifica. La biblioteca Free resta offline.',
    availability: 'Il lancio commerciale è in preparazione; l’accesso attuale è limitato ai test. La distribuzione è prevista in tutti i paesi consentiti da Google Play. Gli abbonamenti richiedono pagamenti supportati nel tuo mercato; Free resta disponibile dove non lo sono. Il link ufficiale apparirà all’apertura del relativo rilascio.',
    termsLabel: 'Condizioni dell’abbonamento',
  },
  es: {
    title: 'Biblioteca gratuita. Pro opcional',
    free: 'La importación, los metadatos habituales, etiquetas y colecciones, búsqueda y lectura locales, recuperación, exportación de originales y copias manuales completas siguen siendo gratuitos. No necesitas una cuenta Partitoria.',
    pro: 'Partitoria Pro añade anotaciones, perfiles de lectura y navegación, programas y modo de interpretación, controles personalizados de teclado, pedales y MIDI, tareas de ensayo, metrónomo y audio local, transferencia revisada de anotaciones, colecciones inteligentes y copias locales automáticas. Los cuatro periodos ofrecen las mismas funciones.',
    periods: ['1 mes', '3 meses', '6 meses', '12 meses'],
    tableLabels: ['Periodo de suscripción', 'EE. UU. · USD', 'Eurozona · EUR'],
    priceNote: 'Precio previsto para todo el periodo elegido, no un equivalente mensual. Google Play adapta los precios en otros países. La tienda muestra precio final, impuestos y fechas antes de confirmar.',
    trial: 'Los nuevos suscriptores elegibles pueden recibir un mes natural de Pro completo mediante Google Play. Es un mes gestionado por la tienda, no un temporizador de 30 días en la app. Después se cobra el precio total del periodo elegido y se renueva automáticamente salvo cancelación. Google Play determina la elegibilidad y las fechas; cambiar de plan, reinstalar o usar otro dispositivo no concede otra prueba.',
    manage: "Cancelar detiene la renovación: el acceso continúa hasta el final confirmado del periodo pagado o de prueba, salvo reembolso o revocación. La compra requiere tu confirmación en Google Play. Cancela en Pagos y suscripciones → Suscripciones antes del siguiente cargo. Desinstalar no cancela la suscripción. Restaura con la misma cuenta de Google; los pagos y reembolsos siguen las normas de Google Play. Las partituras, anotaciones, programas y grabaciones guardados se pueden leer, exportar, borrar y recuperar tras finalizar Pro.",
    offline: 'Tras verificar la compra, la licencia Pro firmada funciona sin conexión hasta 7 días, sin superar el periodo de acceso confirmado por la tienda. Unas 24 horas después de la última comprobación, la app abierta puede intentar actualizar con internet y servicios Google Play disponibles. El momento de la verificación depende de su disponibilidad; no se garantiza actualización diaria ni en segundo plano. Actualízala antes de un viaje largo o concierto. Una interpretación ya autorizada no se interrumpe por una caída temporal del servicio; tras caducar, las nuevas acciones Pro requieren verificación. La biblioteca Free sigue sin conexión.',
    availability: 'El lanzamiento comercial está en preparación; el acceso actual está limitado a pruebas. Se prevé distribuir en todos los países permitidos de Google Play. Las suscripciones requieren pagos admitidos en tu mercado; Free sigue disponible donde no los hay. El enlace oficial aparecerá cuando se abra el lanzamiento correspondiente.',
    termsLabel: 'Condiciones de suscripción',
  },
  pt: {
    title: 'Biblioteca gratuita. Pro opcional',
    free: 'Importação, metadados habituais, etiquetas e coleções, pesquisa e leitura locais, recuperação, exportação de originais e cópias manuais completas continuam gratuitos. Não precisa de conta Partitoria.',
    pro: 'A Partitoria Pro acrescenta anotações, perfis de leitura e navegação, programas e modo de atuação, comandos personalizados de teclado, pedais e MIDI, tarefas de ensaio, metrónomo e áudio local, transferência revista de anotações, coleções inteligentes e cópias locais automáticas. Os quatro períodos oferecem as mesmas funções.',
    periods: ['1 mês', '3 meses', '6 meses', '12 meses'],
    tableLabels: ['Período de subscrição', 'EUA · USD', 'Zona euro · EUR'],
    priceNote: 'Preço previsto para todo o período escolhido, não um equivalente mensal. A Google Play adapta preços noutros países. A loja mostra o preço final, impostos e datas antes da confirmação.',
    trial: 'Novos subscritores elegíveis podem receber um mês de calendário de Pro completo pela Google Play. É um mês gerido pela loja, não um temporizador de 30 dias da aplicação. Depois cobra-se o preço total do período escolhido, com renovação automática salvo cancelamento. A Google Play determina elegibilidade e datas; mudar de plano, reinstalar ou usar outro dispositivo não dá outro teste.',
    manage: "Cancelar impede a renovação: o acesso continua até ao fim confirmado do período pago ou de teste, salvo reembolso ou revogação. A compra exige a sua confirmação na Google Play. Cancele em Pagamentos e subscrições → Subscrições antes da próxima cobrança. Desinstalar não cancela a subscrição. Restaure com a mesma conta Google; pagamentos e reembolsos seguem as regras da Google Play. Partituras, anotações, programas e gravações guardados continuam legíveis, exportáveis, apagáveis e recuperáveis depois de Pro.",
    offline: 'Após a verificação da compra, a licença Pro assinada funciona sem ligação até 7 dias, sem ultrapassar o período confirmado pela loja. Cerca de 24 horas após a última verificação, a aplicação aberta pode tentar atualizar com internet e serviços Google Play disponíveis. O momento da verificação bem-sucedida depende da disponibilidade; não se garante atualização diária ou em segundo plano. Atualize antes de uma viagem longa ou concerto. Uma atuação já autorizada não se interrompe por uma falha temporária do serviço; depois da validade, novas ações Pro exigem verificação. A biblioteca Free continua offline.',
    availability: 'O lançamento comercial está em preparação; o acesso atual limita-se a testes. Prevê-se distribuição em todos os países permitidos pela Google Play. As subscrições exigem pagamentos suportados no seu mercado; Free continua disponível onde não existem. A ligação oficial aparecerá na abertura do respetivo lançamento.',
    termsLabel: 'Termos da subscrição',
  },
  uk: {
    title: 'Безкоштовна бібліотека. Pro за бажанням',
    free: 'Імпорт, звичайні метадані, теги й колекції, локальні пошук і читання, відновлення, експорт оригіналів і повні ручні резервні копії залишаються безкоштовними. Акаунт Partitoria не потрібен.',
    pro: 'Partitoria Pro додає помітки, профілі читання й навігацію, програми та режим виконання, налаштування клавіш, педалей і MIDI, репетиційні завдання, метроном і локальне аудіо, перенесення поміток із перевіркою, розумні колекції та автоматичні локальні знімки. Усі чотири строки відкривають однакові можливості.',
    periods: ['1 місяць', '3 місяці', '6 місяців', '12 місяців'],
    tableLabels: ['Строк підписки', 'США · USD', 'Єврозона · EUR'],
    priceNote: 'Запланована ціна за весь обраний строк, а не за кожен місяць. В інших країнах Google Play встановлює локальні ціни. Остаточну ціну, податки й дати магазин показує перед підтвердженням.',
    trial: 'Новим підписникам, які відповідають умовам Google Play, доступний один календарний місяць повного Pro. Це магазинний місяць, а не таймер застосунку на 30 днів. Потім списується повна ціна обраного строку з автоматичним продовженням, якщо не скасувати. Google Play визначає право й точні дати; зміна строку, перевстановлення або інший пристрій не дають повторної проби.',
    manage: "Скасування зупиняє продовження: доступ зберігається до підтвердженого кінця оплаченого чи пробного періоду, якщо купівлю не повернено чи відкликано. Купівля потребує вашого підтвердження в Google Play. Скасуйте в «Платежі й підписки → Підписки» до наступного списання. Видалення застосунку не скасовує підписку. Відновіть із тим самим Google-акаунтом; щодо платежів і повернень діють правила Google Play. Збережені ноти, помітки, програми й записи залишаються доступними для читання, експорту, видалення й відновлення після Pro.",
    offline: 'Після перевірки купівлі підписаний дозвіл Pro працює офлайн до 7 днів, але не довше підтвердженого магазином строку. Приблизно через 24 години після останньої перевірки відкритий застосунок може спробувати оновити дозвіл за наявності мережі й сервісів Google Play. Час успішної перевірки залежить від їхньої доступності; щоденне чи фонове оновлення не гарантується. Оновіть перед довгою поїздкою або виступом. Уже дозволене виконання не переривається через тимчасову недоступність сервісу; після завершення дозволу нові Pro-дії потребують перевірки. Free-бібліотека залишається офлайн.',
    availability: 'Комерційний випуск готується; зараз доступ обмежений тестуванням. Мета — поширення в усіх дозволених країнах Google Play. Підписки доступні там, де магазин підтримує оплату; без неї зберігається Free. Офіційне посилання з’явиться після відкриття відповідного випуску.',
    termsLabel: 'Умови підписки',
  },
  fr: {
    title: 'Une bibliothèque gratuite. Pro en option',
    free: 'Importation, métadonnées ordinaires, étiquettes et collections, recherche et lecture locales, récupération, export des originaux et sauvegardes manuelles complètes restent gratuits. Aucun compte Partitoria n’est nécessaire.',
    pro: 'Partitoria Pro ajoute annotations, profils de lecture et navigation, programmes et mode concert, commandes personnalisées de clavier, pédales et MIDI, tâches de travail, métronome et audio local, transfert vérifié des annotations, collections intelligentes et sauvegardes locales automatiques. Les quatre durées offrent les mêmes fonctions.',
    periods: ['1 mois', '3 mois', '6 mois', '12 mois'],
    tableLabels: ['Durée de l’abonnement', 'États-Unis · USD', 'Zone euro · EUR'],
    priceNote: 'Prix prévu pour toute la durée choisie, pas un équivalent mensuel. Google Play adapte les prix dans les autres pays. La boutique indique prix final, taxes et dates avant confirmation.',
    trial: 'Les nouveaux abonnés éligibles peuvent obtenir un mois civil de Pro complet via Google Play. Il s’agit d’un mois géré par la boutique, pas d’un compteur de 30 jours dans l’application. Le prix total de la durée choisie est ensuite facturé, avec renouvellement automatique sauf résiliation. Google Play fixe l’éligibilité et les dates ; changer de formule, réinstaller ou utiliser un autre appareil ne crée pas un nouvel essai.',
    manage: "La résiliation arrête le renouvellement : l’accès continue jusqu’à la fin confirmée de la période payée ou d’essai, sauf remboursement ou révocation. L’achat exige votre confirmation dans Google Play. Résiliez dans Paiements et abonnements → Abonnements avant le prochain prélèvement. Désinstaller ne résilie pas. Restaurez avec le même compte Google ; paiements et remboursements suivent les règles de Google Play. Partitions, annotations, programmes et enregistrements sauvegardés restent lisibles, exportables, supprimables et récupérables après Pro.",
    offline: 'Après vérification de l’achat, la licence Pro signée fonctionne hors connexion jusqu’à 7 jours, sans dépasser la période confirmée par la boutique. Environ 24 heures après la dernière vérification, l’application ouverte peut tenter une actualisation avec internet et les services Google Play disponibles. Le moment de réussite dépend de leur disponibilité ; une actualisation quotidienne ou en arrière-plan n’est pas garantie. Actualisez avant un long voyage ou un concert. Une exécution déjà autorisée n’est pas interrompue par une panne temporaire du service ; après expiration, les nouvelles actions Pro nécessitent une vérification. La bibliothèque Free reste hors connexion.',
    availability: 'Le lancement commercial est en préparation ; l’accès actuel est limité aux tests. La distribution vise tous les pays autorisés de Google Play. Les abonnements nécessitent un paiement pris en charge dans votre marché ; Free reste disponible sinon. Le lien officiel paraîtra à l’ouverture de la version correspondante.',
    termsLabel: 'Conditions d’abonnement',
  },
  pl: {
    title: 'Bezpłatna biblioteka. Opcjonalne Pro',
    free: 'Import, zwykłe metadane, tagi i kolekcje, lokalne wyszukiwanie i czytanie, odzyskiwanie, eksport oryginałów i pełne ręczne kopie pozostają bezpłatne. Konto Partitoria nie jest potrzebne.',
    pro: 'Partitoria Pro dodaje adnotacje, profile czytania i nawigację, programy i tryb występu, własne mapowanie klawiatury, pedałów i MIDI, zadania ćwiczeń, metronom i lokalny dźwięk, sprawdzany transfer adnotacji, inteligentne kolekcje oraz automatyczne lokalne kopie. Wszystkie cztery okresy udostępniają te same funkcje.',
    periods: ['1 miesiąc', '3 miesiące', '6 miesięcy', '12 miesięcy'],
    tableLabels: ['Okres subskrypcji', 'USA · USD', 'Strefa euro · EUR'],
    priceNote: 'Planowana cena za cały wybrany okres, nie miesięczny odpowiednik. Google Play lokalizuje ceny w innych krajach. Sklep pokazuje ostateczną cenę, podatki i daty przed potwierdzeniem.',
    trial: 'Uprawnieni nowi subskrybenci mogą otrzymać jeden miesiąc kalendarzowy pełnego Pro przez Google Play. To miesiąc zarządzany przez sklep, a nie licznik 30 dni w aplikacji. Następnie pobierana jest pełna cena wybranego okresu z automatycznym odnowieniem, chyba że anulujesz. Google Play określa uprawnienia i daty; zmiana planu, ponowna instalacja lub inne urządzenie nie dają kolejnej próby.',
    manage: "Anulowanie zatrzymuje odnowienie: dostęp trwa do potwierdzonego końca okresu płatnego lub próbnego, chyba że zakup zostanie zwrócony lub cofnięty. Zakup wymaga Twojego potwierdzenia w Google Play. Anuluj w Płatności i subskrypcje → Subskrypcje przed kolejną opłatą. Odinstalowanie nie anuluje subskrypcji. Przywróć z tym samym kontem Google; płatności i zwroty podlegają zasadom Google Play. Zapisane nuty, adnotacje, programy i nagrania pozostają dostępne do czytania, eksportu, usunięcia i odzyskania po Pro.",
    offline: 'Po weryfikacji zakupu podpisana licencja Pro działa offline do 7 dni, nie dłużej niż okres potwierdzony przez sklep. Około 24 godziny po ostatnim sprawdzeniu otwarta aplikacja może próbować odświeżenia, gdy internet i usługi Google Play są dostępne. Termin udanej weryfikacji zależy od ich dostępności; codzienne ani działające w tle odświeżanie nie jest gwarantowane. Odśwież przed długą podróżą lub występem. Rozpoczęty uprawniony występ nie zostaje przerwany przez chwilową awarię usługi; po wygaśnięciu nowe działania Pro wymagają weryfikacji. Biblioteka Free pozostaje offline.',
    availability: 'Wydanie komercyjne jest przygotowywane; obecny dostęp ogranicza się do testów. Dystrybucja jest planowana we wszystkich dozwolonych krajach Google Play. Subskrypcje wymagają obsługiwanych płatności w Twoim rynku; bez nich pozostaje Free. Oficjalny odnośnik pojawi się po otwarciu odpowiedniego wydania.',
    termsLabel: 'Warunki subskrypcji',
  },
};
