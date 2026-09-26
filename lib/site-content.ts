export const locales = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ru: 'Русский', en: 'English', de: 'Deutsch', it: 'Italiano', es: 'Español',
  pt: 'Português', uk: 'Українська', fr: 'Français', pl: 'Polski',
};

export function localePath(locale: Locale, path = '') {
  return `${locale === 'ru' ? '' : `/${locale}`}${path || '/'}`;
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
    homeTitle: 'Ваши ноты. Ваш порядок.', homeLead: 'Partitoria собирает личную библиотеку нот на Android. Добавляйте свои файлы, находите нужное произведение и читайте его без сети.', homeAction: 'Открыть руководство', homeSecond: 'О приложении',
    valueTitle: 'Всё начинается с вашей библиотеки', valueOne: 'Импортируйте законно полученные ноты и храните исходные файлы без изменений.', valueTwo: 'Ищите по названию, композитору, партии, тегам и коллекциям. Поиск по библиотеке работает локально.', valueThree: 'Читайте, организуйте и сохраняйте полную ручную резервную копию даже без аккаунта.',
    statusTitle: 'Сейчас идёт закрытое тестирование', statusText: 'Публичной установки и магазинной подписки пока нет. Официальная ссылка появится здесь после подготовки выпуска.',
    guideTitle: 'Руководство Partitoria', guideLead: 'Короткие инструкции по действующим возможностям приложения. Скриншоты сняты в портретной ориентации эмулятора; библиотека на них синтетическая.', search: 'Поиск по руководству', all: 'Все разделы', results: 'Материалов', empty: 'Ничего не найдено. Попробуйте другой запрос или раздел.', screenshot: 'Экран Partitoria', imageNote: 'Подлинный экран приложения на английском. Портретный эмулятор Android; демонстрационные PDF.', access: 'Доступ', read: 'Читать', contact: 'Нужна помощь?', footer: 'Личная нотная библиотека для Android', independent: 'Независимое приложение',
  },
  en: {
    home: 'Home', guide: 'Guide', support: 'Support', privacy: 'Privacy', terms: 'Terms', copyright: 'Copyright', sources: 'Sources', skip: 'Skip to content', navigation: 'Main navigation',
    homeTitle: 'Your scores. Your way.', homeLead: 'Partitoria keeps your personal sheet-music library on Android. Add your files, find the right work, and read it offline.', homeAction: 'Open the guide', homeSecond: 'About the app',
    valueTitle: 'Your library comes first', valueOne: 'Import scores you may lawfully use. Their original files stay unchanged.', valueTwo: 'Search by title, composer, part, tag and collection. Library search stays on your device.', valueThree: 'Read, organise and make a complete manual backup without an account.',
    statusTitle: 'Closed testing is under way', statusText: 'There is no public install or store subscription yet. An official link will appear here when the release is ready.',
    guideTitle: 'Partitoria guide', guideLead: 'Practical instructions for features in the current app. Screenshots come from a portrait Android emulator with a synthetic library.', search: 'Search the guide', all: 'All sections', results: 'Articles', empty: 'No matches. Try another search or section.', screenshot: 'Partitoria screen', imageNote: 'Genuine app screen in English. Portrait Android emulator; demonstration PDFs.', access: 'Access', read: 'Read', contact: 'Need help?', footer: 'Your Android sheet-music library', independent: 'Independent application',
  },
  de: {
    home: 'Startseite', guide: 'Handbuch', support: 'Hilfe', privacy: 'Datenschutz', terms: 'Bedingungen', copyright: 'Urheberrecht', sources: 'Quellen', skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation',
    homeTitle: 'Ihre Noten. Ihre Ordnung.', homeLead: 'Partitoria verwaltet Ihre persönliche Notenbibliothek auf Android. Fügen Sie eigene Dateien hinzu, finden Sie Werke und lesen Sie offline.', homeAction: 'Handbuch öffnen', homeSecond: 'Über die App',
    valueTitle: 'Ihre Bibliothek steht im Mittelpunkt', valueOne: 'Importieren Sie rechtmäßig erworbene Noten. Die Originaldateien bleiben unverändert.', valueTwo: 'Suchen Sie nach Titel, Komponist, Stimme, Tag und Sammlung. Die Bibliothekssuche bleibt lokal.', valueThree: 'Lesen, ordnen und sichern Sie Ihre gesamte Bibliothek manuell – ohne Konto.',
    statusTitle: 'Geschlossener Test läuft', statusText: 'Eine öffentliche Installation oder ein Store-Abonnement gibt es noch nicht. Der offizielle Link erscheint hier zum Start.',
    guideTitle: 'Partitoria-Handbuch', guideLead: 'Praktische Anleitungen zu aktuellen Funktionen. Die Bildschirmfotos stammen aus einem Android-Emulator im Hochformat mit einer synthetischen Bibliothek.', search: 'Im Handbuch suchen', all: 'Alle Bereiche', results: 'Artikel', empty: 'Keine Treffer. Versuchen Sie einen anderen Begriff oder Bereich.', screenshot: 'Partitoria-Bildschirm', imageNote: 'Echter App-Bildschirm auf Englisch. Android-Emulator im Hochformat; Demo-PDFs.', access: 'Zugang', read: 'Lesen', contact: 'Brauchen Sie Hilfe?', footer: 'Ihre Notenbibliothek für Android', independent: 'Unabhängige Anwendung',
  },
  it: {
    home: 'Home', guide: 'Guida', support: 'Assistenza', privacy: 'Privacy', terms: 'Condizioni', copyright: 'Diritti d’autore', sources: 'Fonti', skip: 'Vai al contenuto', navigation: 'Navigazione principale',
    homeTitle: 'I tuoi spartiti. Il tuo ordine.', homeLead: 'Partitoria raccoglie la tua biblioteca personale di spartiti su Android. Aggiungi i tuoi file, trova un brano e leggilo anche offline.', homeAction: 'Apri la guida', homeSecond: 'L’app',
    valueTitle: 'La tua biblioteca al centro', valueOne: 'Importa spartiti che puoi usare legalmente. I file originali restano intatti.', valueTwo: 'Cerca per titolo, compositore, parte, tag e raccolta. La ricerca nella biblioteca è locale.', valueThree: 'Leggi, organizza e crea un backup manuale completo senza un account.',
    statusTitle: 'Test chiuso in corso', statusText: 'L’installazione pubblica e gli abbonamenti negli store non sono ancora disponibili. Il link ufficiale apparirà qui.',
    guideTitle: 'Guida a Partitoria', guideLead: 'Istruzioni pratiche per le funzioni attuali. Le schermate provengono da un emulatore Android verticale con una biblioteca sintetica.', search: 'Cerca nella guida', all: 'Tutte le sezioni', results: 'Articoli', empty: 'Nessun risultato. Prova un’altra parola o sezione.', screenshot: 'Schermata di Partitoria', imageNote: 'Schermata autentica in inglese. Emulatore Android verticale; PDF dimostrativi.', access: 'Accesso', read: 'Leggi', contact: 'Serve aiuto?', footer: 'La tua biblioteca di spartiti per Android', independent: 'Applicazione indipendente',
  },
  es: {
    home: 'Inicio', guide: 'Guía', support: 'Ayuda', privacy: 'Privacidad', terms: 'Condiciones', copyright: 'Derechos de autor', sources: 'Fuentes', skip: 'Ir al contenido', navigation: 'Navegación principal',
    homeTitle: 'Tus partituras. Tu orden.', homeLead: 'Partitoria reúne tu biblioteca personal de partituras en Android. Añade tus archivos, encuentra una obra y léela sin conexión.', homeAction: 'Abrir la guía', homeSecond: 'Sobre la app',
    valueTitle: 'Tu biblioteca es lo primero', valueOne: 'Importa partituras que puedas usar legalmente. Los archivos originales no se modifican.', valueTwo: 'Busca por título, compositor, parte, etiqueta y colección. La búsqueda en la biblioteca es local.', valueThree: 'Lee, organiza y crea una copia de seguridad manual completa sin una cuenta.',
    statusTitle: 'Pruebas cerradas en curso', statusText: 'Aún no hay instalación pública ni suscripción en tiendas. El enlace oficial aparecerá aquí cuando esté listo.',
    guideTitle: 'Guía de Partitoria', guideLead: 'Instrucciones prácticas para las funciones actuales. Las capturas son de un emulador Android vertical con una biblioteca sintética.', search: 'Buscar en la guía', all: 'Todas las secciones', results: 'Artículos', empty: 'Sin resultados. Prueba otra búsqueda o sección.', screenshot: 'Pantalla de Partitoria', imageNote: 'Pantalla real de la app en inglés. Emulador Android vertical; PDF de demostración.', access: 'Acceso', read: 'Leer', contact: '¿Necesitas ayuda?', footer: 'Tu biblioteca de partituras para Android', independent: 'Aplicación independiente',
  },
  pt: {
    home: 'Início', guide: 'Guia', support: 'Apoio', privacy: 'Privacidade', terms: 'Termos', copyright: 'Direitos de autor', sources: 'Fontes', skip: 'Ir para o conteúdo', navigation: 'Navegação principal',
    homeTitle: 'As suas partituras. À sua maneira.', homeLead: 'A Partitoria organiza a sua biblioteca pessoal de partituras no Android. Adicione ficheiros, encontre uma obra e leia sem ligação.', homeAction: 'Abrir o guia', homeSecond: 'Sobre a aplicação',
    valueTitle: 'A sua biblioteca em primeiro lugar', valueOne: 'Importe partituras que pode usar legalmente. Os ficheiros originais não são alterados.', valueTwo: 'Pesquise por título, compositor, parte, etiqueta e coleção. A pesquisa da biblioteca é local.', valueThree: 'Leia, organize e faça uma cópia de segurança manual completa sem conta.',
    statusTitle: 'Teste fechado em curso', statusText: 'Ainda não há instalação pública nem subscrição nas lojas. A ligação oficial aparecerá aqui quando estiver pronta.',
    guideTitle: 'Guia da Partitoria', guideLead: 'Instruções práticas para as funções atuais. As capturas vêm de um emulador Android vertical com uma biblioteca sintética.', search: 'Pesquisar no guia', all: 'Todas as secções', results: 'Artigos', empty: 'Sem resultados. Tente outra pesquisa ou secção.', screenshot: 'Ecrã da Partitoria', imageNote: 'Ecrã real da aplicação em inglês. Emulador Android vertical; PDFs de demonstração.', access: 'Acesso', read: 'Ler', contact: 'Precisa de ajuda?', footer: 'A sua biblioteca de partituras para Android', independent: 'Aplicação independente',
  },
  uk: {
    home: 'Головна', guide: 'Посібник', support: 'Підтримка', privacy: 'Конфіденційність', terms: 'Умови', copyright: 'Авторське право', sources: 'Джерела', skip: 'Перейти до вмісту', navigation: 'Основна навігація',
    homeTitle: 'Ваші ноти. Ваш порядок.', homeLead: 'Partitoria зберігає особисту бібліотеку нот на Android. Додавайте свої файли, знаходьте твори й читайте без інтернету.', homeAction: 'Відкрити посібник', homeSecond: 'Про застосунок',
    valueTitle: 'Ваша бібліотека понад усе', valueOne: 'Імпортуйте ноти, якими маєте право користуватися. Оригінали файлів не змінюються.', valueTwo: 'Шукайте за назвою, композитором, партією, тегом і колекцією. Пошук бібліотекою локальний.', valueThree: 'Читайте, впорядковуйте та створюйте повну ручну резервну копію без акаунта.',
    statusTitle: 'Триває закрите тестування', statusText: 'Публічного встановлення та магазинної підписки поки немає. Офіційне посилання з’явиться тут після підготовки випуску.',
    guideTitle: 'Посібник Partitoria', guideLead: 'Практичні інструкції до чинних функцій. Знімки екрана зроблено у портретному Android-емуляторі з синтетичною бібліотекою.', search: 'Пошук у посібнику', all: 'Усі розділи', results: 'Статей', empty: 'Нічого не знайдено. Спробуйте інший запит або розділ.', screenshot: 'Екран Partitoria', imageNote: 'Справжній екран застосунку англійською. Портретний Android-емулятор; демонстраційні PDF.', access: 'Доступ', read: 'Читати', contact: 'Потрібна допомога?', footer: 'Ваша бібліотека нот для Android', independent: 'Незалежний застосунок',
  },
  fr: {
    home: 'Accueil', guide: 'Guide', support: 'Assistance', privacy: 'Confidentialité', terms: 'Conditions', copyright: 'Droits d’auteur', sources: 'Sources', skip: 'Aller au contenu', navigation: 'Navigation principale',
    homeTitle: 'Vos partitions. Votre ordre.', homeLead: 'Partitoria rassemble votre bibliothèque personnelle de partitions sur Android. Ajoutez vos fichiers, trouvez une œuvre et lisez hors connexion.', homeAction: 'Ouvrir le guide', homeSecond: 'À propos',
    valueTitle: 'Votre bibliothèque d’abord', valueOne: 'Importez les partitions que vous pouvez utiliser légalement. Les fichiers d’origine restent intacts.', valueTwo: 'Cherchez par titre, compositeur, partie, étiquette ou collection. La recherche reste sur l’appareil.', valueThree: 'Lisez, classez et créez une sauvegarde manuelle complète sans compte.',
    statusTitle: 'Test fermé en cours', statusText: 'Il n’y a pas encore d’installation publique ni d’abonnement en boutique. Le lien officiel paraîtra ici.',
    guideTitle: 'Guide Partitoria', guideLead: 'Des instructions pratiques pour les fonctions actuelles. Les captures proviennent d’un émulateur Android en portrait avec une bibliothèque synthétique.', search: 'Rechercher dans le guide', all: 'Toutes les sections', results: 'Articles', empty: 'Aucun résultat. Essayez un autre terme ou une autre section.', screenshot: 'Écran Partitoria', imageNote: 'Vrai écran de l’application en anglais. Émulateur Android en portrait ; PDF de démonstration.', access: 'Accès', read: 'Lire', contact: 'Besoin d’aide ?', footer: 'Votre bibliothèque de partitions Android', independent: 'Application indépendante',
  },
  pl: {
    home: 'Strona główna', guide: 'Przewodnik', support: 'Pomoc', privacy: 'Prywatność', terms: 'Warunki', copyright: 'Prawa autorskie', sources: 'Źródła', skip: 'Przejdź do treści', navigation: 'Nawigacja główna',
    homeTitle: 'Twoje nuty. Twój porządek.', homeLead: 'Partitoria porządkuje osobistą bibliotekę nut na Androidzie. Dodawaj własne pliki, znajduj utwory i czytaj bez internetu.', homeAction: 'Otwórz przewodnik', homeSecond: 'O aplikacji',
    valueTitle: 'Twoja biblioteka jest najważniejsza', valueOne: 'Importuj nuty, z których możesz legalnie korzystać. Oryginalne pliki pozostają bez zmian.', valueTwo: 'Szukaj według tytułu, kompozytora, partii, tagu i kolekcji. Wyszukiwanie działa lokalnie.', valueThree: 'Czytaj, porządkuj i twórz pełną ręczną kopię zapasową bez konta.',
    statusTitle: 'Trwają testy zamknięte', statusText: 'Publiczna instalacja i subskrypcja sklepowa nie są jeszcze dostępne. Oficjalny odnośnik pojawi się tutaj.',
    guideTitle: 'Przewodnik Partitoria', guideLead: 'Praktyczne instrukcje do obecnych funkcji. Zrzuty pochodzą z emulatora Androida w pionie, z syntetyczną biblioteką.', search: 'Szukaj w przewodniku', all: 'Wszystkie działy', results: 'Artykułów', empty: 'Brak wyników. Spróbuj innego hasła lub działu.', screenshot: 'Ekran Partitoria', imageNote: 'Prawdziwy ekran aplikacji po angielsku. Pionowy emulator Androida; demonstracyjne PDF-y.', access: 'Dostęp', read: 'Czytaj', contact: 'Potrzebujesz pomocy?', footer: 'Twoja biblioteka nut na Androida', independent: 'Niezależna aplikacja',
  },
};
