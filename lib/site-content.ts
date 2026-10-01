export const locales = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ru: 'Русский', en: 'English', de: 'Deutsch', it: 'Italiano', es: 'Español',
  pt: 'Português', uk: 'Українська', fr: 'Français', pl: 'Polski',
};

export function localePath(locale: Locale, path = '') {
  return locale === 'ru' ? path || '/' : `/${locale}${path}`;
}

type SiteCopy = {
  home: string; guide: string; support: string; privacy: string; terms: string;
  copyright: string; sources: string; skip: string; navigation: string;
  homeTitle: string; homeLead: string; homeAction: string; homeSecond: string;
  valueTitle: string; valueOne: string; valueTwo: string; valueThree: string;
  statusTitle: string; statusText: string; guideTitle: string; guideLead: string;
  search: string; all: string; results: string; empty: string; screenshot: string;
  imageNote: string; access: string; read: string; contact: string;
  footer: string; independent: string;
};

export const siteCopy: Record<Locale, SiteCopy> = {
  ru: {
    home: 'Главная', guide: 'Руководство', support: 'Поддержка', privacy: 'Конфиденциальность', terms: 'Условия', copyright: 'Авторские права', sources: 'Источники', skip: 'Перейти к содержанию', navigation: 'Основная навигация',
    homeTitle: 'Ваша нотная библиотека', homeLead: 'Partitoria собирает личную библиотеку нот на Android. Добавляйте свои файлы, находите нужное произведение и читайте его без сети.', homeAction: 'Открыть руководство', homeSecond: 'О приложении',
    valueTitle: 'Всё начинается с вашей библиотеки', valueOne: 'Соберите PDF и фотографии нот в одном месте. Разложите их по коллекциям для занятий, ансамбля или ближайшего концерта.', valueTwo: 'Найдите произведение по названию, композитору или партии. Нужные ноты всегда под рукой, даже без интернета.', valueThree: 'Откройте ноты на весь экран. Сохраните резервную копию библиотеки, чтобы перенести её на другой планшет.',
    statusTitle: "Коммерческий выпуск готовится", statusText: "Сейчас доступ ограничен тестированием. Публичная установка и подписки Google Play откроются после подготовки и проверок выпуска; официальная ссылка появится здесь.",
    guideTitle: 'Руководство Partitoria', guideLead: 'Пошаговые инструкции: от первых нот до подготовки к выступлению.', search: 'Поиск по руководству', all: 'Все разделы', results: 'Материалов', empty: 'Ничего не найдено. Попробуйте другой запрос или раздел.', screenshot: 'Экран Partitoria', imageNote: 'Подлинный экран приложения на английском. Портретный эмулятор Android; демонстрационные PDF.', access: 'Доступ', read: 'Читать', contact: 'Нужна помощь?', footer: 'Личная нотная библиотека для Android', independent: 'Независимое приложение',
  },
  en: {
    home: 'Home', guide: 'Guide', support: 'Support', privacy: 'Privacy', terms: 'Terms', copyright: 'Copyright', sources: 'Sources', skip: 'Skip to content', navigation: 'Main navigation',
    homeTitle: 'Your sheet-music library', homeLead: 'Partitoria keeps your personal sheet-music library on Android. Add your files, find the right work, and read it offline.', homeAction: 'Open the guide', homeSecond: 'About the app',
    valueTitle: 'Your library comes first', valueOne: 'Keep PDFs and photos of scores together. Organise collections for practice, your ensemble or the next concert.', valueTwo: 'Find a work by title, composer or part. Your scores stay within reach, even without an internet connection.', valueThree: 'Open scores full screen. Back up your library so you can move it to another tablet.',
    statusTitle: "Preparing the commercial release", statusText: "Availability is currently limited to testing. Public installation and Google Play subscriptions will open after release preparation and checks; the official link will appear here.",
    guideTitle: 'Partitoria guide', guideLead: 'Step-by-step help, from your first scores to preparing a performance.', search: 'Search the guide', all: 'All sections', results: 'Articles', empty: 'No matches. Try another search or section.', screenshot: 'Partitoria screen', imageNote: 'Genuine app screen in English. Portrait Android emulator; demonstration PDFs.', access: 'Access', read: 'Read', contact: 'Need help?', footer: 'Your Android sheet-music library', independent: 'Independent application',
  },
  de: {
    home: 'Startseite', guide: 'Handbuch', support: 'Hilfe', privacy: 'Datenschutz', terms: 'Bedingungen', copyright: 'Urheberrecht', sources: 'Quellen', skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation',
    homeTitle: 'Ihre Notenbibliothek', homeLead: 'Partitoria verwaltet Ihre persönliche Notenbibliothek auf Android. Fügen Sie eigene Dateien hinzu, finden Sie Werke und lesen Sie offline.', homeAction: 'Handbuch öffnen', homeSecond: 'Über die App',
    valueTitle: 'Ihre Bibliothek steht im Mittelpunkt', valueOne: 'Sammeln Sie PDFs und Fotos von Noten an einem Ort. Ordnen Sie Sammlungen für das Üben, Ihr Ensemble oder das nächste Konzert.', valueTwo: 'Finden Sie Werke nach Titel, Komponist oder Stimme. Ihre Noten sind auch ohne Internet griffbereit.', valueThree: 'Lesen Sie Noten im Vollbild. Sichern Sie Ihre Bibliothek, um sie auf ein anderes Tablet mitzunehmen.',
    statusTitle: "Der kommerzielle Start wird vorbereitet", statusText: "Der Zugang ist derzeit auf Tests beschränkt. Öffentliche Installation und Google-Play-Abonnements starten nach Vorbereitung und Prüfung; der offizielle Link erscheint hier.",
    guideTitle: 'Partitoria-Handbuch', guideLead: 'Schritt für Schritt: von den ersten Noten bis zur Vorbereitung eines Auftritts.', search: 'Im Handbuch suchen', all: 'Alle Bereiche', results: 'Artikel', empty: 'Keine Treffer. Versuchen Sie einen anderen Begriff oder Bereich.', screenshot: 'Partitoria-Bildschirm', imageNote: 'Echter App-Bildschirm auf Englisch. Android-Emulator im Hochformat; Demo-PDFs.', access: 'Zugang', read: 'Lesen', contact: 'Brauchen Sie Hilfe?', footer: 'Ihre Notenbibliothek für Android', independent: 'Unabhängige Anwendung',
  },
  it: {
    home: 'Home', guide: 'Guida', support: 'Assistenza', privacy: 'Privacy', terms: 'Condizioni', copyright: 'Diritti d’autore', sources: 'Fonti', skip: 'Vai al contenuto', navigation: 'Navigazione principale',
    homeTitle: 'La tua biblioteca di spartiti', homeLead: 'Partitoria raccoglie la tua biblioteca personale di spartiti su Android. Aggiungi i tuoi file, trova un brano e leggilo anche offline.', homeAction: 'Apri la guida', homeSecond: 'L’app',
    valueTitle: 'La tua biblioteca al centro', valueOne: 'Riunisci PDF e foto di spartiti. Crea raccolte per lo studio, il tuo ensemble o il prossimo concerto.', valueTwo: 'Trova un brano per titolo, compositore o parte. Gli spartiti sono a portata di mano anche senza internet.', valueThree: 'Apri gli spartiti a schermo intero. Salva un backup della biblioteca per trasferirla su un altro tablet.',
    statusTitle: "Lancio commerciale in preparazione", statusText: "L’accesso attuale è limitato ai test. Installazione pubblica e abbonamenti Google Play si apriranno dopo preparazione e verifiche; il link ufficiale apparirà qui.",
    guideTitle: 'Guida a Partitoria', guideLead: 'Istruzioni passo per passo, dai primi spartiti alla preparazione di un concerto.', search: 'Cerca nella guida', all: 'Tutte le sezioni', results: 'Articoli', empty: 'Nessun risultato. Prova un’altra parola o sezione.', screenshot: 'Schermata di Partitoria', imageNote: 'Schermata autentica in inglese. Emulatore Android verticale; PDF dimostrativi.', access: 'Accesso', read: 'Leggi', contact: 'Serve aiuto?', footer: 'La tua biblioteca di spartiti per Android', independent: 'Applicazione indipendente',
  },
  es: {
    home: 'Inicio', guide: 'Guía', support: 'Ayuda', privacy: 'Privacidad', terms: 'Condiciones', copyright: 'Derechos de autor', sources: 'Fuentes', skip: 'Ir al contenido', navigation: 'Navegación principal',
    homeTitle: 'Tu biblioteca de partituras', homeLead: 'Partitoria reúne tu biblioteca personal de partituras en Android. Añade tus archivos, encuentra una obra y léela sin conexión.', homeAction: 'Abrir la guía', homeSecond: 'Sobre la app',
    valueTitle: 'Tu biblioteca es lo primero', valueOne: 'Reúne PDF y fotos de partituras. Organízalos en colecciones para estudiar, tocar en grupo o preparar un concierto.', valueTwo: 'Encuentra una obra por título, compositor o parte. Tus partituras están a mano incluso sin internet.', valueThree: 'Abre las partituras a pantalla completa. Guarda una copia de la biblioteca para trasladarla a otra tableta.',
    statusTitle: "Lanzamiento comercial en preparación", statusText: "El acceso actual se limita a pruebas. La instalación pública y suscripciones Google Play se abrirán tras preparación y comprobaciones; el enlace oficial aparecerá aquí.",
    guideTitle: 'Guía de Partitoria', guideLead: 'Instrucciones paso a paso, desde las primeras partituras hasta preparar un concierto.', search: 'Buscar en la guía', all: 'Todas las secciones', results: 'Artículos', empty: 'Sin resultados. Prueba otra búsqueda o sección.', screenshot: 'Pantalla de Partitoria', imageNote: 'Pantalla real de la app en inglés. Emulador Android vertical; PDF de demostración.', access: 'Acceso', read: 'Leer', contact: '¿Necesitas ayuda?', footer: 'Tu biblioteca de partituras para Android', independent: 'Aplicación independiente',
  },
  pt: {
    home: 'Início', guide: 'Guia', support: 'Apoio', privacy: 'Privacidade', terms: 'Termos', copyright: 'Direitos de autor', sources: 'Fontes', skip: 'Ir para o conteúdo', navigation: 'Navegação principal',
    homeTitle: 'A sua biblioteca de partituras', homeLead: 'A Partitoria organiza a sua biblioteca pessoal de partituras no Android. Adicione ficheiros, encontre uma obra e leia sem ligação.', homeAction: 'Abrir o guia', homeSecond: 'Sobre a aplicação',
    valueTitle: 'A sua biblioteca em primeiro lugar', valueOne: 'Reúna PDFs e fotografias de partituras. Organize coleções para estudar, tocar em conjunto ou preparar um concerto.', valueTwo: 'Encontre uma obra pelo título, compositor ou parte. As partituras estão à mão, mesmo sem internet.', valueThree: 'Abra as partituras em ecrã inteiro. Guarde uma cópia da biblioteca para a transferir para outro tablet.',
    statusTitle: "Lançamento comercial em preparação", statusText: "O acesso atual limita-se a testes. A instalação pública e subscrições Google Play abrirão após preparação e verificações; a ligação oficial aparecerá aqui.",
    guideTitle: 'Guia da Partitoria', guideLead: 'Instruções passo a passo, das primeiras partituras à preparação de um concerto.', search: 'Pesquisar no guia', all: 'Todas as secções', results: 'Artigos', empty: 'Sem resultados. Tente outra pesquisa ou secção.', screenshot: 'Ecrã da Partitoria', imageNote: 'Ecrã real da aplicação em inglês. Emulador Android vertical; PDFs de demonstração.', access: 'Acesso', read: 'Ler', contact: 'Precisa de ajuda?', footer: 'A sua biblioteca de partituras para Android', independent: 'Aplicação independente',
  },
  uk: {
    home: 'Головна', guide: 'Посібник', support: 'Підтримка', privacy: 'Конфіденційність', terms: 'Умови', copyright: 'Авторське право', sources: 'Джерела', skip: 'Перейти до вмісту', navigation: 'Основна навігація',
    homeTitle: 'Ваша нотна бібліотека', homeLead: 'Partitoria зберігає особисту бібліотеку нот на Android. Додавайте свої файли, знаходьте твори й читайте без інтернету.', homeAction: 'Відкрити посібник', homeSecond: 'Про застосунок',
    valueTitle: 'Ваша бібліотека понад усе', valueOne: 'Зберіть PDF і фотографії нот в одному місці. Створіть колекції для занять, ансамблю чи найближчого концерту.', valueTwo: 'Знайдіть твір за назвою, композитором або партією. Потрібні ноти завжди під рукою, навіть без інтернету.', valueThree: 'Відкрийте ноти на весь екран. Збережіть резервну копію бібліотеки, щоб перенести її на інший планшет.',
    statusTitle: "Комерційний випуск готується", statusText: "Зараз доступ обмежений тестуванням. Публічне встановлення й підписки Google Play відкриються після підготовки та перевірок; офіційне посилання з’явиться тут.",
    guideTitle: 'Посібник Partitoria', guideLead: 'Покрокові інструкції: від перших нот до підготовки до виступу.', search: 'Пошук у посібнику', all: 'Усі розділи', results: 'Статей', empty: 'Нічого не знайдено. Спробуйте інший запит або розділ.', screenshot: 'Екран Partitoria', imageNote: 'Справжній екран застосунку англійською. Портретний Android-емулятор; демонстраційні PDF.', access: 'Доступ', read: 'Читати', contact: 'Потрібна допомога?', footer: 'Ваша бібліотека нот для Android', independent: 'Незалежний застосунок',
  },
  fr: {
    home: 'Accueil', guide: 'Guide', support: 'Assistance', privacy: 'Confidentialité', terms: 'Conditions', copyright: 'Droits d’auteur', sources: 'Sources', skip: 'Aller au contenu', navigation: 'Navigation principale',
    homeTitle: 'Votre bibliothèque de partitions', homeLead: 'Partitoria rassemble votre bibliothèque personnelle de partitions sur Android. Ajoutez vos fichiers, trouvez une œuvre et lisez hors connexion.', homeAction: 'Ouvrir le guide', homeSecond: 'À propos',
    valueTitle: 'Votre bibliothèque d’abord', valueOne: 'Rassemblez vos PDF et photos de partitions. Classez-les en collections pour le travail, votre ensemble ou le prochain concert.', valueTwo: 'Retrouvez une œuvre par titre, compositeur ou partie. Vos partitions restent à portée de main, même sans internet.', valueThree: 'Ouvrez les partitions en plein écran. Sauvegardez votre bibliothèque pour la transférer sur une autre tablette.',
    statusTitle: "Lancement commercial en préparation", statusText: "L’accès actuel est limité aux tests. Installation publique et abonnements Google Play ouvriront après préparation et vérifications ; le lien officiel paraîtra ici.",
    guideTitle: 'Guide Partitoria', guideLead: 'Des instructions pas à pas, des premières partitions à la préparation d’un concert.', search: 'Rechercher dans le guide', all: 'Toutes les sections', results: 'Articles', empty: 'Aucun résultat. Essayez un autre terme ou une autre section.', screenshot: 'Écran Partitoria', imageNote: 'Vrai écran de l’application en anglais. Émulateur Android en portrait ; PDF de démonstration.', access: 'Accès', read: 'Lire', contact: 'Besoin d’aide ?', footer: 'Votre bibliothèque de partitions Android', independent: 'Application indépendante',
  },
  pl: {
    home: 'Strona główna', guide: 'Przewodnik', support: 'Pomoc', privacy: 'Prywatność', terms: 'Warunki', copyright: 'Prawa autorskie', sources: 'Źródła', skip: 'Przejdź do treści', navigation: 'Nawigacja główna',
    homeTitle: 'Twoja biblioteka nut', homeLead: 'Partitoria porządkuje osobistą bibliotekę nut na Androidzie. Dodawaj własne pliki, znajduj utwory i czytaj bez internetu.', homeAction: 'Otwórz przewodnik', homeSecond: 'O aplikacji',
    valueTitle: 'Twoja biblioteka jest najważniejsza', valueOne: 'Zbierz pliki PDF i zdjęcia nut w jednym miejscu. Ułóż kolekcje do ćwiczeń, dla zespołu lub na najbliższy koncert.', valueTwo: 'Znajdź utwór według tytułu, kompozytora lub partii. Nuty masz pod ręką również bez internetu.', valueThree: 'Otwórz nuty na pełnym ekranie. Zapisz kopię biblioteki, aby przenieść ją na inny tablet.',
    statusTitle: "Przygotowujemy wydanie komercyjne", statusText: "Obecny dostęp ogranicza się do testów. Publiczna instalacja i subskrypcje Google Play otworzą się po przygotowaniu i weryfikacji; oficjalny odnośnik pojawi się tutaj.",
    guideTitle: 'Przewodnik Partitoria', guideLead: 'Instrukcje krok po kroku: od pierwszych nut do przygotowania koncertu.', search: 'Szukaj w przewodniku', all: 'Wszystkie działy', results: 'Artykułów', empty: 'Brak wyników. Spróbuj innego hasła lub działu.', screenshot: 'Ekran Partitoria', imageNote: 'Prawdziwy ekran aplikacji po angielsku. Pionowy emulator Androida; demonstracyjne PDF-y.', access: 'Dostęp', read: 'Czytaj', contact: 'Potrzebujesz pomocy?', footer: 'Twoja biblioteka nut na Androida', independent: 'Niezależna aplikacja',
  },
};
