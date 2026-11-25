import type { Locale } from './site-content';

export const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.technatonuniv.partitoria';

type FeatureCopy = {
  nav: string; title: string; intro: string; note: string; guide: string;
  playTitle: string; playText: string;
  formatsTitle: string; formatsIntro: string; formatsNote: string;
  formats: { name: string; detail: string }[];
  items: { title: string; text: string; pro?: boolean }[];
};

export const featuresCopy: Record<Locale, FeatureCopy> = {
  ru: {
    formatsTitle: 'Какие файлы можно открыть', formatsIntro: 'Импортируйте PDF и сканы или откройте поддерживаемый файл нотного редактора. Partitoria создаёт страницы для чтения и сохраняет оригинал.', formatsNote: 'Импорт и чтение перечисленных форматов бесплатны.',
    formats: [{ name: 'PDF', detail: 'ноты и сборники' }, { name: 'Сканы и фото', detail: 'JPEG, PNG, WebP, HEIC/HEIF, многостраничный TIFF' }, { name: 'MusicXML', detail: '.musicxml, .xml и сжатый .mxl' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'мелодии в нотации ABC' }, { name: 'ChordPro', detail: 'песенники с аккордами, фрагментами ABC и LilyPond' }, { name: 'Текст', detail: '.txt в UTF-8' }],
    nav: 'Возможности', title: 'Всё для жизни с нотами', intro: 'От первой страницы до выхода на сцену — ваши ноты и инструменты всегда рядом.',
    note: 'Базовая библиотека и чтение бесплатны. Дополнительные инструменты отмечены Pro.', guide: 'Подробное руководство', playTitle: 'Partitoria в Google Play', playText: 'Откройте страницу приложения, чтобы узнать о доступности для вашего устройства и региона.',
    items: [
      { title: 'Своя нотная библиотека', text: 'Добавляйте PDF, сканы и фото, MusicXML, MuseScore, ABC, ChordPro и текст. Объединяйте страницы, ищите по названию, композитору и партии. Коллекции, теги, избранное и история помогают держать всё в порядке.' },
      { title: 'Чтение без интернета', text: 'Открывайте ноты на весь экран, листайте касанием, свайпом, клавиатурой или Bluetooth-педалью (стрелки, Page Up/Down) без рук, обрезайте поля и возвращайтесь к сохранённой странице.' },
      { title: 'Ваши данные — с вами', text: 'Экспортируйте оригиналы, создавайте полную резервную копию и восстанавливайте библиотеку. Выбирайте оформление и обложки; доступны девять языков.' },
      { title: 'Пометки и удобное чтение', text: 'Рукописные и текстовые пометки, знаки и слои, профили чтения и расширенная навигация. Переносите пометки с проверкой.', pro: true },
      { title: 'Репетиция и выступление', text: 'Составляйте программы, используйте режим исполнения и репетиционные задачи. Настраивайте команды для клавиатуры, педалей и MIDI.', pro: true },
      { title: 'Инструменты для занятий', text: 'Метроном, локальные аудиозаписи и фрагменты A–B, умные коллекции и автоматические локальные копии.', pro: true },
    ],
  },
  en: {
    formatsTitle: 'Which files can I open?', formatsIntro: 'Import a PDF or scan, or open a supported notation file. Partitoria lays out notation files as pages for reading and keeps the original.', formatsNote: 'Importing and reading these formats is free.',
    formats: [{ name: 'PDF', detail: 'scores and anthologies' }, { name: 'Scans and photos', detail: 'JPEG, PNG, WebP, HEIC/HEIF, multi-page TIFF' }, { name: 'MusicXML', detail: '.musicxml, .xml and compressed .mxl' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'tunes in ABC notation' }, { name: 'ChordPro', detail: 'songbooks with chords, ABC and LilyPond fragments' }, { name: 'Text', detail: '.txt in UTF-8' }],
    nav: 'Features', title: 'Everything for life with music', intro: 'From the first page to the stage, keep your scores and tools close at hand.', note: 'The core library and reading are free. Extra tools are marked Pro.', guide: 'Explore the guide', playTitle: 'Partitoria on Google Play', playText: 'Visit the app page to check availability for your device and region.', items: [
      { title: 'Your music library', text: 'Add PDF, scans and photos, MusicXML, MuseScore, ABC, ChordPro and text. Combine pages and search by title, composer or part. Collections, tags, favourites and history keep everything organised.' },
      { title: 'Read offline', text: 'Open scores full screen, turn pages by touch, swipe, keyboard or hands-free with a Bluetooth pedal (arrow or Page Up/Down keys), crop margins and return to your saved page.' },
      { title: 'Your data travels with you', text: 'Export originals, make a complete backup and restore your library. Choose themes and covers; nine languages are available.' },
      { title: 'Annotations and reading', text: 'Handwritten and text annotations, stamps and layers, reading profiles and extended navigation. Transfer annotations with review.', pro: true },
      { title: 'Rehearse and perform', text: 'Build programmes, use performance mode and rehearsal tasks, and customise keyboard, pedal and MIDI commands.', pro: true },
      { title: 'Practice tools', text: 'Metronome, local audio recordings and A–B sections, smart collections and automatic local snapshots.', pro: true },
    ],
  },
  de: {
    formatsTitle: 'Welche Dateien lassen sich öffnen?', formatsIntro: 'Importieren Sie PDFs und Scans oder öffnen Sie unterstützte Notationsdateien. Partitoria setzt die Noten für die Anzeige und bewahrt die Originaldatei auf.', formatsNote: 'Import und Lesen der aufgeführten Formate sind kostenlos.',
    formats: [{ name: 'PDF', detail: 'Noten und Sammlungen' }, { name: 'Scans und Fotos', detail: 'JPEG, PNG, WebP, HEIC/HEIF, mehrseitiges TIFF' }, { name: 'MusicXML', detail: '.musicxml, .xml und komprimiert .mxl' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'Melodien in ABC-Notation' }, { name: 'ChordPro', detail: 'Liederbücher mit Akkorden, ABC- und LilyPond-Fragmenten' }, { name: 'Text', detail: '.txt in UTF-8' }],
    nav: 'Funktionen', title: 'Alles für das Leben mit Noten', intro: 'Von der ersten Seite bis zur Bühne: Ihre Noten und Werkzeuge sind immer dabei.', note: 'Bibliothek und Lesen sind kostenlos. Zusätzliche Werkzeuge sind mit Pro gekennzeichnet.', guide: 'Handbuch entdecken', playTitle: 'Partitoria bei Google Play', playText: 'Prüfen Sie auf der App-Seite die Verfügbarkeit für Ihr Gerät und Ihre Region.', items: [
      { title: 'Ihre Notenbibliothek', text: 'Importieren Sie PDF, Scans und Fotos, MusicXML, MuseScore, ABC, ChordPro und Text. Seiten zusammenführen und nach Titel, Komponist oder Stimme suchen. Sammlungen, Tags, Favoriten und Verlauf schaffen Ordnung.' },
      { title: 'Offline lesen', text: 'Noten im Vollbild lesen, per Berührung, Wischen, Tastatur oder freihändig mit Bluetooth-Pedal (Pfeiltasten oder Bild auf/ab) blättern, Ränder zuschneiden und zur gespeicherten Seite zurückkehren.' },
      { title: 'Ihre Daten bleiben bei Ihnen', text: 'Originale exportieren, vollständig sichern und die Bibliothek wiederherstellen. Wählen Sie Darstellung und Cover; neun Sprachen stehen bereit.' },
      { title: 'Anmerkungen und Lesen', text: 'Handschriftliche und Textanmerkungen, Zeichen und Ebenen, Leseprofile und erweiterte Navigation. Anmerkungen mit Prüfung übertragen.', pro: true },
      { title: 'Proben und auftreten', text: 'Programme erstellen, Aufführungsmodus und Übungsaufgaben nutzen sowie Tasten-, Pedal- und MIDI-Befehle anpassen.', pro: true },
      { title: 'Werkzeuge zum Üben', text: 'Metronom, lokale Audioaufnahmen und A–B-Abschnitte, intelligente Sammlungen und automatische lokale Sicherungen.', pro: true },
    ],
  },
  it: {
    formatsTitle: 'Quali file posso aprire?', formatsIntro: 'Importa PDF e scansioni oppure apri un file di notazione supportato. Partitoria impagina la partitura per la lettura e conserva il file originale.', formatsNote: 'Importare e leggere i formati elencati è gratuito.',
    formats: [{ name: 'PDF', detail: 'spartiti e raccolte' }, { name: 'Scansioni e foto', detail: 'JPEG, PNG, WebP, HEIC/HEIF, TIFF multipagina' }, { name: 'MusicXML', detail: '.musicxml, .xml e .mxl compresso' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'melodie in notazione ABC' }, { name: 'ChordPro', detail: 'canzonieri con accordi, frammenti ABC e LilyPond' }, { name: 'Testo', detail: '.txt in UTF-8' }],
    nav: 'Funzioni', title: 'Tutto per vivere la musica', intro: 'Dalla prima pagina al palco, spartiti e strumenti sempre con te.', note: 'Biblioteca e lettura di base sono gratuite. Gli strumenti aggiuntivi sono indicati con Pro.', guide: 'Scopri la guida', playTitle: 'Partitoria su Google Play', playText: 'Visita la pagina dell’app per verificarne la disponibilità per dispositivo e paese.', items: [
      { title: 'La tua biblioteca', text: 'Aggiungi PDF, scansioni e foto, MusicXML, MuseScore, ABC, ChordPro e testo. Unisci pagine e cerca per titolo, compositore o parte. Raccolte, tag, preferiti e cronologia mantengono tutto in ordine.' },
      { title: 'Lettura offline', text: 'Leggi a schermo intero, sfoglia con tocco, scorrimento, tastiera o a mani libere con un pedale Bluetooth (frecce o Pag su/giù), ritaglia i margini e torna alla pagina salvata.' },
      { title: 'I tuoi dati con te', text: 'Esporta gli originali, crea un backup completo e ripristina la biblioteca. Scegli temi e copertine; sono disponibili nove lingue.' },
      { title: 'Annotazioni e lettura', text: 'Note a mano e testo, simboli e livelli, profili di lettura e navigazione avanzata. Trasferisci le annotazioni con verifica.', pro: true },
      { title: 'Prove e concerti', text: 'Crea programmi, usa la modalità esecuzione e le attività di studio, personalizza i comandi di tastiera, pedali e MIDI.', pro: true },
      { title: 'Strumenti per studiare', text: 'Metronomo, registrazioni audio locali e sezioni A–B, raccolte intelligenti e copie locali automatiche.', pro: true },
    ],
  },
  es: {
    formatsTitle: '¿Qué archivos puedo abrir?', formatsIntro: 'Importa PDF y escaneos o abre un archivo de notación compatible. Partitoria compone las páginas para la lectura y conserva el archivo original.', formatsNote: 'La importación y la lectura de estos formatos son gratuitas.',
    formats: [{ name: 'PDF', detail: 'partituras y colecciones' }, { name: 'Escaneos y fotos', detail: 'JPEG, PNG, WebP, HEIC/HEIF, TIFF de varias páginas' }, { name: 'MusicXML', detail: '.musicxml, .xml y .mxl comprimido' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'melodías en notación ABC' }, { name: 'ChordPro', detail: 'cancioneros con acordes y fragmentos ABC y LilyPond' }, { name: 'Texto', detail: '.txt en UTF-8' }],
    nav: 'Funciones', title: 'Todo para vivir la música', intro: 'De la primera página al escenario, tus partituras y herramientas siempre cerca.', note: 'La biblioteca y lectura básicas son gratuitas. Las herramientas adicionales se indican con Pro.', guide: 'Explorar la guía', playTitle: 'Partitoria en Google Play', playText: 'Visita la página de la aplicación para consultar la disponibilidad en tu dispositivo y región.', items: [
      { title: 'Tu biblioteca de partituras', text: 'Añade PDF, escaneos y fotos, MusicXML, MuseScore, ABC, ChordPro y texto. Combina páginas y busca por título, compositor o parte. Colecciones, etiquetas, favoritos e historial mantienen el orden.' },
      { title: 'Lee sin conexión', text: 'Abre partituras a pantalla completa, pasa páginas con toque, deslizamiento, teclado o sin manos con un pedal Bluetooth (flechas o Re Pág/Av Pág), recorta márgenes y vuelve a la página guardada.' },
      { title: 'Tus datos te acompañan', text: 'Exporta originales, crea una copia completa y restaura la biblioteca. Elige temas y portadas; hay nueve idiomas disponibles.' },
      { title: 'Anotaciones y lectura', text: 'Notas manuscritas y de texto, símbolos y capas, perfiles de lectura y navegación ampliada. Transfiere anotaciones con revisión.', pro: true },
      { title: 'Ensaya y actúa', text: 'Crea programas, usa el modo de interpretación y tareas de ensayo, y personaliza comandos de teclado, pedales y MIDI.', pro: true },
      { title: 'Herramientas de estudio', text: 'Metrónomo, grabaciones locales y secciones A–B, colecciones inteligentes y copias locales automáticas.', pro: true },
    ],
  },
  pt: {
    formatsTitle: 'Que ficheiros posso abrir?', formatsIntro: 'Importe PDF e digitalizações ou abra um ficheiro de notação compatível. A Partitoria prepara as páginas para leitura e conserva o ficheiro original.', formatsNote: 'A importação e a leitura destes formatos são gratuitas.',
    formats: [{ name: 'PDF', detail: 'partituras e coletâneas' }, { name: 'Digitalizações e fotos', detail: 'JPEG, PNG, WebP, HEIC/HEIF, TIFF de várias páginas' }, { name: 'MusicXML', detail: '.musicxml, .xml e .mxl comprimido' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'melodias em notação ABC' }, { name: 'ChordPro', detail: 'cancioneiros com acordes e fragmentos ABC e LilyPond' }, { name: 'Texto', detail: '.txt em UTF-8' }],
    nav: 'Funcionalidades', title: 'Tudo para viver a música', intro: 'Da primeira página ao palco, tenha partituras e ferramentas sempre à mão.', note: 'A biblioteca e leitura básicas são gratuitas. As ferramentas adicionais estão assinaladas com Pro.', guide: 'Explorar o guia', playTitle: 'Partitoria na Google Play', playText: 'Visite a página da aplicação para verificar a disponibilidade no seu dispositivo e região.', items: [
      { title: 'A sua biblioteca de partituras', text: 'Adicione PDF, digitalizações e fotos, MusicXML, MuseScore, ABC, ChordPro e texto. Combine páginas e pesquise por título, compositor ou parte. Coleções, etiquetas, favoritos e histórico mantêm tudo organizado.' },
      { title: 'Leia sem ligação', text: 'Abra partituras em ecrã inteiro, vire páginas com toque, deslize, teclado ou sem mãos com um pedal Bluetooth (setas ou Page Up/Down), corte margens e volte à página guardada.' },
      { title: 'Os seus dados consigo', text: 'Exporte originais, crie uma cópia completa e restaure a biblioteca. Escolha temas e capas; há nove idiomas disponíveis.' },
      { title: 'Anotações e leitura', text: 'Notas manuscritas e de texto, símbolos e camadas, perfis de leitura e navegação avançada. Transfira anotações com revisão.', pro: true },
      { title: 'Ensaie e atue', text: 'Crie programas, use o modo de atuação e tarefas de ensaio e personalize comandos de teclado, pedais e MIDI.', pro: true },
      { title: 'Ferramentas de estudo', text: 'Metrónomo, gravações locais e secções A–B, coleções inteligentes e cópias locais automáticas.', pro: true },
    ],
  },
  uk: {
    formatsTitle: 'Які файли можна відкрити', formatsIntro: 'Імпортуйте PDF і скани або відкрийте файл нотного редактора в підтримуваному форматі. Partitoria створює сторінки для читання та зберігає оригінал.', formatsNote: 'Імпорт і читання перелічених форматів безкоштовні.',
    formats: [{ name: 'PDF', detail: 'ноти та збірники' }, { name: 'Скани й фото', detail: 'JPEG, PNG, WebP, HEIC/HEIF, багатосторінковий TIFF' }, { name: 'MusicXML', detail: '.musicxml, .xml і стиснений .mxl' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'мелодії в нотації ABC' }, { name: 'ChordPro', detail: 'співаники з акордами, фрагментами ABC і LilyPond' }, { name: 'Текст', detail: '.txt в UTF-8' }],
    nav: 'Можливості', title: 'Усе для життя з нотами', intro: 'Від першої сторінки до сцени — ваші ноти та інструменти завжди поруч.', note: 'Базова бібліотека й читання безкоштовні. Додаткові інструменти позначено Pro.', guide: 'Докладний посібник', playTitle: 'Partitoria у Google Play', playText: 'Відкрийте сторінку застосунку, щоб перевірити доступність для пристрою та регіону.', items: [
      { title: 'Власна нотна бібліотека', text: 'Додавайте PDF, скани й фото, MusicXML, MuseScore, ABC, ChordPro і текст. Об’єднуйте сторінки, шукайте за назвою, композитором і партією. Колекції, теги, обране та історія допомагають підтримувати лад.' },
      { title: 'Читання без інтернету', text: 'Відкривайте ноти на весь екран, гортайте дотиком, свайпом, клавіатурою або без рук Bluetooth-педаллю (стрілки, Page Up/Down), обрізайте поля та повертайтеся до збереженої сторінки.' },
      { title: 'Ваші дані з вами', text: 'Експортуйте оригінали, створюйте повну резервну копію та відновлюйте бібліотеку. Обирайте оформлення й обкладинки; доступні дев’ять мов.' },
      { title: 'Позначки та читання', text: 'Рукописні й текстові позначки, знаки та шари, профілі читання і розширена навігація. Переносьте позначки з перевіркою.', pro: true },
      { title: 'Репетиція і виступ', text: 'Створюйте програми, використовуйте режим виконання та завдання для репетицій. Налаштовуйте команди клавіатури, педалей і MIDI.', pro: true },
      { title: 'Інструменти для занять', text: 'Метроном, локальні аудіозаписи й фрагменти A–B, розумні колекції та автоматичні локальні копії.', pro: true },
    ],
  },
  fr: {
    formatsTitle: 'Quels fichiers puis-je ouvrir ?', formatsIntro: 'Importez des PDF et des numérisations ou ouvrez un fichier de notation compatible. Partitoria met la partition en pages pour la lecture et conserve le fichier d’origine.', formatsNote: 'L’importation et la lecture de ces formats sont gratuites.',
    formats: [{ name: 'PDF', detail: 'partitions et recueils' }, { name: 'Numérisations et photos', detail: 'JPEG, PNG, WebP, HEIC/HEIF, TIFF multipage' }, { name: 'MusicXML', detail: '.musicxml, .xml et .mxl compressé' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'mélodies en notation ABC' }, { name: 'ChordPro', detail: 'recueils avec accords, fragments ABC et LilyPond' }, { name: 'Texte', detail: '.txt en UTF-8' }],
    nav: 'Fonctionnalités', title: 'Tout pour vivre la musique', intro: 'De la première page à la scène, vos partitions et outils restent à portée de main.', note: 'La bibliothèque et la lecture de base sont gratuites. Les outils supplémentaires portent la mention Pro.', guide: 'Découvrir le guide', playTitle: 'Partitoria sur Google Play', playText: 'Consultez la page de l’application pour vérifier sa disponibilité selon votre appareil et votre région.', items: [
      { title: 'Votre bibliothèque de partitions', text: 'Ajoutez PDF, numérisations et photos, MusicXML, MuseScore, ABC, ChordPro et texte. Rassemblez des pages et cherchez par titre, compositeur ou partie. Collections, étiquettes, favoris et historique organisent le tout.' },
      { title: 'Lire hors ligne', text: 'Ouvrez les partitions en plein écran, tournez les pages au toucher, par glissement, au clavier ou mains libres avec une pédale Bluetooth (flèches ou Page préc./suiv.), rognez les marges et retrouvez votre page.' },
      { title: 'Vos données avec vous', text: 'Exportez les originaux, créez une sauvegarde complète et restaurez la bibliothèque. Choisissez thèmes et couvertures ; neuf langues sont proposées.' },
      { title: 'Annotations et lecture', text: 'Notes manuscrites et texte, signes et calques, profils de lecture et navigation étendue. Transférez les annotations avec vérification.', pro: true },
      { title: 'Répéter et jouer', text: 'Créez des programmes, utilisez le mode concert et les tâches de répétition, et personnalisez les commandes clavier, pédales et MIDI.', pro: true },
      { title: 'Outils de travail', text: 'Métronome, enregistrements audio locaux et passages A–B, collections intelligentes et copies locales automatiques.', pro: true },
    ],
  },
  pl: {
    formatsTitle: 'Jakie pliki mogę otworzyć?', formatsIntro: 'Zaimportuj pliki PDF i skany lub otwórz plik w obsługiwanym formacie zapisu nutowego. Partitoria przygotuje strony do czytania i zachowa oryginał.', formatsNote: 'Import i czytanie wymienionych formatów są bezpłatne.',
    formats: [{ name: 'PDF', detail: 'nuty i zbiory' }, { name: 'Skany i zdjęcia', detail: 'JPEG, PNG, WebP, HEIC/HEIF, wielostronicowy TIFF' }, { name: 'MusicXML', detail: '.musicxml, .xml i skompresowany .mxl' }, { name: 'MuseScore', detail: '.mscz, .mscx' }, { name: 'ABC', detail: 'melodie w notacji ABC' }, { name: 'ChordPro', detail: 'śpiewniki z akordami oraz fragmentami ABC i LilyPond' }, { name: 'Tekst', detail: '.txt w UTF-8' }],
    nav: 'Możliwości', title: 'Wszystko do życia z muzyką', intro: 'Od pierwszej strony po scenę — nuty i narzędzia zawsze pod ręką.', note: 'Podstawowa biblioteka i czytanie są bezpłatne. Dodatkowe narzędzia oznaczono Pro.', guide: 'Poznaj przewodnik', playTitle: 'Partitoria w Google Play', playText: 'Otwórz stronę aplikacji, aby sprawdzić dostępność dla urządzenia i regionu.', items: [
      { title: 'Twoja biblioteka nut', text: 'Dodawaj PDF, skany i zdjęcia, MusicXML, MuseScore, ABC, ChordPro i tekst. Łącz strony i szukaj według tytułu, kompozytora lub partii. Kolekcje, tagi, ulubione i historia pomagają zachować porządek.' },
      { title: 'Czytanie offline', text: 'Otwieraj nuty na pełnym ekranie, przewracaj strony dotykiem, przesunięciem, klawiaturą lub bez rąk pedałem Bluetooth (strzałki albo Page Up/Down), przycinaj marginesy i wracaj do zapisanej strony.' },
      { title: 'Twoje dane są z Tobą', text: 'Eksportuj oryginały, twórz pełną kopię i przywracaj bibliotekę. Wybierz motyw i okładki; dostępnych jest dziewięć języków.' },
      { title: 'Adnotacje i czytanie', text: 'Odręczne i tekstowe notatki, znaki i warstwy, profile czytania i rozszerzona nawigacja. Przenoś adnotacje z kontrolą.', pro: true },
      { title: 'Próby i występy', text: 'Twórz programy, korzystaj z trybu występu i zadań do ćwiczeń, dostosuj polecenia klawiatury, pedałów i MIDI.', pro: true },
      { title: 'Narzędzia do ćwiczeń', text: 'Metronom, lokalne nagrania i fragmenty A–B, inteligentne kolekcje oraz automatyczne kopie lokalne.', pro: true },
    ],
  },
};
