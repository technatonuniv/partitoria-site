import type { Locale } from './site-content';

export const factsSupportEmail = 'support@partitoria.app';
export const factsVideoUrl = 'https://www.youtube.com/@PartitoriaStudio';

export interface FactsCopy {
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
  guide: string;
  videos: string;
  install: string;
  support: string;
  checked: string;
}

export const factsCopy: Record<Locale, FactsCopy> = {
  en: {
    title: 'About Partitoria',
    intro: 'Partitoria is a sheet music reader from Partitoria Studio, available only on Android tablets and phones. Musicians can keep their own scores in a local library, find a piece and read it full screen offline.',
    sections: [
      { title: 'Scores you can bring', text: 'Import PDFs, photos and scans (JPEG, PNG, WebP, HEIC/HEIF or TIFF), ABC tunes, ChordPro songbooks and UTF-8 text. A photographed page stays an image you can read.' },
      { title: 'MusicXML and MuseScore', text: 'Partitoria lays out supported MusicXML (.musicxml, .xml, .mxl) and MuseScore (.mscx, .mscz) files as pages on your device. Page breaks and spacing can differ from the original layout. Use a PDF from your notation app when you need the exact printed edition.' },
      { title: 'What is free?', text: 'The app is free to install from Google Play. Import, search, collections, offline reading, simple page bookmarks, exporting originals and making or restoring a complete manual backup are free. Partitoria keeps a copy of each imported file and leaves the original untouched.' },
      { title: 'What does Pro add?', text: 'The optional in-app subscription lets you write on scores, create display profiles and build setlists for performance. Google Play shows the terms before you subscribe. If Pro ends, you can still read, export and recover the work you saved.' },
      { title: 'Where your data goes', text: 'Your library stays on your device. You can read without a Partitoria account. There are no ads or behavioural analytics. If you search an online catalogue, it receives your query and network information. Checking a Pro purchase uses purchase and installation details.' },
      { title: 'Interface languages', text: 'English, French, German, Italian, Polish, Portuguese, Russian, Spanish and Ukrainian.' },
    ],
    guide: 'Read the user guide', videos: 'Watch tutorials on YouTube', install: 'Get Partitoria on Google Play', support: 'Email support',
    checked: 'Checked against Partitoria 1.11.1 on 25 November 2026.',
  },
  ru: {
    title: 'О приложении Partitoria',
    intro: 'Partitoria — приложение студии Partitoria Studio для чтения нот. Оно доступно только на планшетах и телефонах с Android. Музыкант может собрать свои ноты в локальной библиотеке, найти нужное произведение и открыть его на весь экран без интернета.',
    sections: [
      { title: 'Какие ноты можно добавить', text: 'Импортируйте PDF, фотографии и сканы (JPEG, PNG, WebP, HEIC/HEIF, TIFF), мелодии ABC, песенники ChordPro и текст в кодировке UTF-8. Сфотографированная страница сохраняется как изображение, с которого можно играть.' },
      { title: 'MusicXML и MuseScore', text: 'Приложение формирует страницы на устройстве из поддерживаемых файлов MusicXML (.musicxml, .xml, .mxl) и MuseScore (.mscx, .mscz). Разбивка по страницам и расстояния между нотами могут отличаться от исходной вёрстки. Если нужно сохранить печатный вид, экспортируйте PDF из нотного редактора.' },
      { title: 'Что доступно бесплатно', text: 'Partitoria можно бесплатно установить из Google Play. Доступны импорт, поиск, коллекции, чтение без интернета, простые закладки страниц, экспорт оригиналов, полная ручная резервная копия и восстановление. При импорте приложение создаёт собственную копию файла. Исходник остаётся без изменений.' },
      { title: 'Что добавляет Pro', text: 'По желанию можно оформить подписку в приложении и делать пометки на нотах, сохранять профили отображения и составлять концертные программы. Перед оформлением Google Play покажет условия. После окончания подписки сохранённые материалы по-прежнему можно читать, экспортировать и восстанавливать.' },
      { title: 'Где находятся ваши данные', text: 'Нотная библиотека хранится на устройстве. Для чтения не нужен аккаунт Partitoria. В приложении нет рекламы и поведенческой аналитики. При поиске в сетевом каталоге он получает запрос и сетевые данные. Для проверки покупки Pro используются сведения о покупке и об установке приложения.' },
      { title: 'Языки интерфейса', text: 'Русский, английский, немецкий, французский, испанский, итальянский, польский, португальский и украинский.' },
    ],
    guide: 'Руководство пользователя', videos: 'Видеоуроки на YouTube', install: 'Скачать из Google Play', support: 'Написать в поддержку',
    checked: 'Проверено на Partitoria 1.11.1, 25 ноября 2026 года.',
  },
  de: {
    title: 'Über Partitoria',
    intro: 'Partitoria ist ein Notenleser von Partitoria Studio und ausschließlich für Tablets und Smartphones mit Android erhältlich. Musikerinnen und Musiker können eigene Noten in einer lokalen Bibliothek sammeln, Stücke suchen und sie offline im Vollbild lesen.',
    sections: [
      { title: 'Welche Noten lassen sich importieren?', text: 'Sie können PDFs, Fotos und Scans (JPEG, PNG, WebP, HEIC/HEIF oder TIFF), Stücke im ABC-Format, ChordPro-Liederbücher und UTF-8-Textdateien hinzufügen. Ein fotografiertes Notenblatt bleibt als Bild lesbar.' },
      { title: 'MusicXML und MuseScore', text: 'Partitoria setzt unterstützte MusicXML-Dateien (.musicxml, .xml, .mxl) und MuseScore-Dateien (.mscx, .mscz) auf Ihrem Gerät neu. Seitenumbrüche und Abstände können vom Original abweichen. Für das genaue Druckbild exportieren Sie eine PDF-Datei aus Ihrem Notensatzprogramm.' },
      { title: 'Was ist kostenlos?', text: 'Die Installation über Google Play ist kostenlos. Auch Import, Suche, Sammlungen, Offline-Lesen, einfache Lesezeichen, Export der Originaldateien sowie die manuelle Komplettsicherung und Wiederherstellung sind kostenlos. Beim Import legt die App eine Kopie an. Das Original bleibt unverändert.' },
      { title: 'Was bietet Pro?', text: 'Mit dem optionalen In-App-Abo können Sie Notizen in die Noten schreiben, Anzeigeprofile anlegen und Setlisten für Auftritte zusammenstellen. Google Play zeigt die Konditionen vor Abschluss an. Nach Ablauf des Abos lassen sich gespeicherte Inhalte weiterhin lesen, exportieren und wiederherstellen.' },
      { title: 'Datenschutz', text: 'Ihre Notenbibliothek bleibt auf dem Gerät. Zum Lesen brauchen Sie kein Partitoria-Konto. Die App enthält weder Werbung noch Verhaltensanalyse. Bei einer Suche in einem Onlinekatalog erhält dieser Ihre Suchanfrage und Netzwerkdaten. Zur Prüfung eines Pro-Kaufs werden Kauf- und Installationsdaten verarbeitet.' },
      { title: 'Sprachen der App', text: 'Deutsch, Englisch, Französisch, Italienisch, Polnisch, Portugiesisch, Russisch, Spanisch und Ukrainisch.' },
    ],
    guide: 'Zum Handbuch', videos: 'Videoanleitungen auf YouTube', install: 'Partitoria bei Google Play herunterladen', support: 'E-Mail an den Support',
    checked: 'Geprüft mit Partitoria 1.11.1 am 25. November 2026.',
  },
  fr: {
    title: 'À propos de Partitoria',
    intro: 'Partitoria est un lecteur de partitions de Partitoria Studio, disponible uniquement sur les tablettes et téléphones Android. Les musiciens peuvent y classer leurs propres partitions, retrouver un morceau et le lire en plein écran sans connexion.',
    sections: [
      { title: 'Quelles partitions peut-on importer ?', text: 'Ajoutez des PDF, des photos et des scans (JPEG, PNG, WebP, HEIC/HEIF ou TIFF), des morceaux en notation ABC, des recueils ChordPro et du texte en UTF-8. Une page photographiée reste une image que vous pouvez lire sur le pupitre.' },
      { title: 'MusicXML et MuseScore', text: 'Partitoria met en pages sur votre appareil les fichiers MusicXML (.musicxml, .xml, .mxl) et MuseScore (.mscx, .mscz) pris en charge. Les sauts de page et les espacements peuvent différer de la partition originale. Pour en conserver la mise en pages exacte, exportez un PDF depuis votre logiciel de notation.' },
      { title: 'Que comprend la version gratuite ?', text: 'L’installation depuis Google Play est gratuite, tout comme l’importation, la recherche, les collections, la lecture hors ligne, les signets de page simples, l’exportation des originaux, la sauvegarde manuelle complète et sa restauration. Lors de l’importation, l’application crée sa propre copie du fichier et conserve l’original intact.' },
      { title: 'Que propose Pro ?', text: 'L’abonnement facultatif proposé dans l’application permet d’annoter les partitions, d’enregistrer des profils d’affichage et de préparer des programmes de concert. Google Play présente les conditions avant la souscription. À la fin de l’abonnement, vous pouvez toujours lire, exporter et restaurer vos contenus enregistrés.' },
      { title: 'Confidentialité', text: 'La bibliothèque reste sur votre appareil. Aucun compte Partitoria n’est nécessaire pour lire vos partitions. L’application ne contient ni publicité ni outil d’analyse comportementale. Si vous interrogez un catalogue en ligne, celui-ci reçoit votre requête et des informations de connexion. La vérification d’un achat Pro utilise des informations sur l’achat et sur l’installation.' },
      { title: 'Langues de l’interface', text: 'Français, allemand, anglais, espagnol, italien, polonais, portugais, russe et ukrainien.' },
    ],
    guide: 'Consulter le guide', videos: 'Voir les tutoriels sur YouTube', install: 'Télécharger sur Google Play', support: 'Écrire à l’assistance',
    checked: 'Vérifié avec Partitoria 1.11.1 le 25 novembre 2026.',
  },
  es: {
    title: 'Acerca de Partitoria',
    intro: 'Partitoria es un lector de partituras de Partitoria Studio disponible solo para tabletas y teléfonos Android. Permite a los músicos organizar sus propias partituras en una biblioteca local, buscar una obra y leerla a pantalla completa sin conexión.',
    sections: [
      { title: 'Partituras que puedes importar', text: 'Añade PDF, fotos y escaneos (JPEG, PNG, WebP, HEIC/HEIF o TIFF), piezas en notación ABC, cancioneros ChordPro y archivos de texto UTF-8. Una página fotografiada se conserva como imagen para leerla en el atril.' },
      { title: 'MusicXML y MuseScore', text: 'Partitoria compone las páginas en tu dispositivo a partir de los archivos compatibles de MusicXML (.musicxml, .xml, .mxl) y MuseScore (.mscx, .mscz). Los saltos de página y el espaciado pueden variar. Si necesitas mantener la maquetación impresa, exporta un PDF desde tu programa de notación.' },
      { title: '¿Qué incluye la versión gratuita?', text: 'Puedes instalar Partitoria gratis desde Google Play. También son gratuitos la importación, la búsqueda, las colecciones, la lectura sin conexión, los marcadores de página sencillos, la exportación de originales y la creación y restauración de una copia de seguridad manual completa. La aplicación importa una copia del archivo y conserva intacto el original.' },
      { title: '¿Qué añade Pro?', text: 'La suscripción opcional dentro de la aplicación permite anotar partituras, guardar perfiles de visualización y preparar repertorios para conciertos. Google Play muestra las condiciones antes de suscribirte. Si la suscripción termina, puedes seguir leyendo, exportando y restaurando lo que hayas guardado.' },
      { title: 'Privacidad', text: 'La biblioteca se guarda en tu dispositivo. Puedes leer sin una cuenta de Partitoria. La aplicación no tiene publicidad ni análisis de comportamiento. Si buscas en un catálogo en línea, este recibe la consulta y datos de conexión. La verificación de una compra Pro utiliza datos de la compra y de la instalación.' },
      { title: 'Idiomas de la interfaz', text: 'Español, alemán, francés, inglés, italiano, polaco, portugués, ruso y ucraniano.' },
    ],
    guide: 'Consultar la guía', videos: 'Ver los tutoriales en YouTube', install: 'Descargar en Google Play', support: 'Escribir al equipo de soporte',
    checked: 'Comprobado con Partitoria 1.11.1 el 25 de noviembre de 2026.',
  },
  it: {
    title: 'Informazioni su Partitoria',
    intro: 'Partitoria è un lettore di spartiti di Partitoria Studio disponibile solo per tablet e telefoni Android. I musicisti possono raccogliere i propri spartiti in una biblioteca locale, cercare un brano e leggerlo a schermo intero anche senza connessione.',
    sections: [
      { title: 'Quali spartiti si possono importare?', text: 'Puoi aggiungere PDF, foto e scansioni (JPEG, PNG, WebP, HEIC/HEIF o TIFF), brani in notazione ABC, canzonieri ChordPro e file di testo UTF-8. Una pagina fotografata rimane un’immagine da leggere sul leggio.' },
      { title: 'MusicXML e MuseScore', text: 'Partitoria impagina sul dispositivo i file MusicXML (.musicxml, .xml, .mxl) e MuseScore (.mscx, .mscz) supportati. Le interruzioni di pagina e le spaziature possono differire dall’originale. Per conservare l’esatta impaginazione di stampa, esporta un PDF dal tuo programma di notazione.' },
      { title: 'Che cosa è gratuito?', text: 'L’installazione da Google Play è gratuita. Sono gratuiti anche importazione, ricerca, raccolte, lettura offline, segnalibri di pagina semplici, esportazione degli originali, backup manuale completo e ripristino. Quando importi un file, l’app ne crea una copia e lascia intatto l’originale.' },
      { title: 'Che cosa offre Pro?', text: 'L’abbonamento facoltativo nell’app permette di annotare gli spartiti, salvare profili di visualizzazione e preparare scalette per i concerti. Google Play mostra le condizioni prima dell’abbonamento. Alla scadenza puoi continuare a leggere, esportare e ripristinare il materiale salvato.' },
      { title: 'Privacy', text: 'La biblioteca rimane sul dispositivo. Per leggere non serve un account Partitoria. L’app non contiene pubblicità e non analizza il comportamento degli utenti. Se cerchi in un catalogo online, questo riceve la ricerca e i dati di connessione. La verifica di un acquisto Pro utilizza dati sull’acquisto e sull’installazione.' },
      { title: 'Lingue dell’interfaccia', text: 'Italiano, francese, inglese, polacco, portoghese, russo, spagnolo, tedesco e ucraino.' },
    ],
    guide: 'Leggi la guida', videos: 'Guarda i tutorial su YouTube', install: 'Scarica da Google Play', support: 'Scrivi all’assistenza',
    checked: 'Verificato con Partitoria 1.11.1 il 25 novembre 2026.',
  },
  pt: {
    title: 'Sobre a Partitoria',
    intro: 'A Partitoria é uma aplicação de leitura de partituras do Partitoria Studio, disponível apenas para tablets e telemóveis Android. Permite aos músicos organizar as suas partituras numa biblioteca local, procurar uma peça e lê-la em ecrã inteiro sem ligação à Internet.',
    sections: [
      { title: 'Que partituras posso importar?', text: 'Pode adicionar PDF, fotografias e digitalizações (JPEG, PNG, WebP, HEIC/HEIF ou TIFF), peças em notação ABC, cancioneiros ChordPro e ficheiros de texto UTF-8. Uma página fotografada mantém-se como imagem para leitura na estante de música.' },
      { title: 'MusicXML e MuseScore', text: 'A Partitoria pagina no dispositivo os ficheiros compatíveis de MusicXML (.musicxml, .xml, .mxl) e MuseScore (.mscx, .mscz). As quebras de página e os espaçamentos podem diferir do original. Para manter a paginação da edição impressa, exporte um PDF a partir do programa de notação.' },
      { title: 'O que é gratuito?', text: 'Pode instalar a aplicação gratuitamente a partir do Google Play. Pode importar, pesquisar, organizar coleções, ler offline, marcar páginas e exportar os originais. Também pode criar e restaurar uma cópia de segurança manual completa. Ao importar, a aplicação cria uma cópia do ficheiro e mantém o original intacto.' },
      { title: 'O que acrescenta o Pro?', text: 'A subscrição opcional na aplicação permite anotar partituras, guardar perfis de visualização e preparar alinhamentos para concertos. O Google Play apresenta as condições antes da subscrição. Quando esta terminar, continua a poder ler, exportar e recuperar o material guardado.' },
      { title: 'Privacidade', text: 'A biblioteca fica no seu dispositivo. A leitura dispensa uma conta Partitoria. A aplicação não contém publicidade nem analisa o comportamento dos utilizadores. Se pesquisar num catálogo online, este recebe a consulta e dados de ligação. A verificação de uma compra Pro utiliza dados da compra e da instalação.' },
      { title: 'Idiomas da interface', text: 'Português, alemão, espanhol, francês, inglês, italiano, polaco, russo e ucraniano.' },
    ],
    guide: 'Consultar o guia', videos: 'Ver os tutoriais no YouTube', install: 'Instalar a partir do Google Play', support: 'Contactar o apoio por email',
    checked: 'Verificado com a Partitoria 1.11.1 em 25 de novembro de 2026.',
  },
  uk: {
    title: 'Про застосунок Partitoria',
    intro: 'Partitoria — застосунок від Partitoria Studio для читання нот. Він доступний лише на планшетах і телефонах з Android. Музиканти можуть зібрати власні ноти в локальній бібліотеці, знайти твір і читати його на весь екран без інтернету.',
    sections: [
      { title: 'Які ноти можна додати', text: 'Імпортуйте PDF, фотографії та скани (JPEG, PNG, WebP, HEIC/HEIF, TIFF), мелодії в нотації ABC, збірки пісень ChordPro й текст у кодуванні UTF-8. Сфотографована сторінка зберігається як зображення, з якого можна грати.' },
      { title: 'MusicXML і MuseScore', text: 'Partitoria формує сторінки на пристрої з підтримуваних файлів MusicXML (.musicxml, .xml, .mxl) і MuseScore (.mscx, .mscz). Поділ на сторінки та інтервали можуть відрізнятися від оригіналу. Щоб точно зберегти друкований вигляд, експортуйте PDF з нотного редактора.' },
      { title: 'Що доступно безкоштовно', text: 'Застосунок можна безкоштовно встановити з Google Play. Доступні імпорт, пошук, колекції, читання без інтернету, прості закладки сторінок, експорт оригіналів, повне резервне копіювання вручну та відновлення з копії. Під час імпорту застосунок створює власну копію файлу, а оригінал залишається без змін.' },
      { title: 'Що додає Pro', text: 'За бажанням можна оформити передплату в застосунку та робити позначки в нотах, зберігати профілі відображення й складати концертні програми. Google Play покаже умови до оформлення. Після завершення передплати збережені матеріали можна й надалі читати, експортувати та відновлювати.' },
      { title: 'Де зберігаються дані', text: 'Нотна бібліотека залишається на пристрої. Для читання не потрібен обліковий запис Partitoria. У застосунку немає реклами чи аналізу поведінки користувачів. Під час пошуку в онлайн-каталозі він отримує запит і мережеві дані. Для перевірки покупки Pro використовуються відомості про покупку та встановлення застосунку.' },
      { title: 'Мови інтерфейсу', text: 'Українська, англійська, іспанська, італійська, німецька, польська, португальська, російська та французька.' },
    ],
    guide: 'Посібник користувача', videos: 'Відеоуроки на YouTube', install: 'Завантажити з Google Play', support: 'Написати до служби підтримки',
    checked: 'Перевірено на Partitoria 1.11.1, 25 листопада 2026 року.',
  },
  pl: {
    title: 'O aplikacji Partitoria',
    intro: 'Partitoria to czytnik nut od Partitoria Studio, dostępny wyłącznie na tabletach i telefonach z Androidem. Muzycy mogą gromadzić własne nuty w lokalnej bibliotece, wyszukiwać utwory i czytać je na pełnym ekranie bez internetu.',
    sections: [
      { title: 'Jakie nuty można dodać?', text: 'Można importować pliki PDF, zdjęcia i skany (JPEG, PNG, WebP, HEIC/HEIF lub TIFF), utwory w notacji ABC, śpiewniki ChordPro oraz tekst w kodowaniu UTF-8. Sfotografowana strona pozostaje obrazem, z którego można grać.' },
      { title: 'MusicXML i MuseScore', text: 'Partitoria składa nuty na urządzeniu z obsługiwanych plików MusicXML (.musicxml, .xml, .mxl) i MuseScore (.mscx, .mscz). Podział na strony i odstępy mogą się różnić od oryginału. Aby zachować dokładny układ wydruku, wyeksportuj PDF z programu do edycji nut.' },
      { title: 'Co jest bezpłatne?', text: 'Aplikację można pobrać bezpłatnie z Google Play. Bezpłatne są również import, wyszukiwanie, kolekcje, czytanie offline, proste zakładki stron, eksport oryginałów oraz ręczne tworzenie i przywracanie pełnej kopii zapasowej. Przy imporcie aplikacja tworzy własną kopię pliku, a oryginał pozostaje bez zmian.' },
      { title: 'Co daje Pro?', text: 'Opcjonalna subskrypcja w aplikacji pozwala nanosić adnotacje na nuty, zapisywać profile wyświetlania i układać programy koncertów. Google Play pokazuje warunki przed zakupem. Po wygaśnięciu subskrypcji nadal można czytać, eksportować i przywracać zapisane materiały.' },
      { title: 'Prywatność', text: 'Biblioteka pozostaje na urządzeniu. Do czytania nut nie potrzeba konta Partitoria. Aplikacja nie wyświetla reklam ani nie analizuje zachowań użytkowników. Gdy korzystasz z katalogu internetowego, otrzymuje on zapytanie i dane połączenia. Przy weryfikacji zakupu Pro wykorzystywane są informacje o zakupie i instalacji aplikacji.' },
      { title: 'Języki interfejsu', text: 'Polski, angielski, francuski, hiszpański, niemiecki, portugalski, rosyjski, ukraiński i włoski.' },
    ],
    guide: 'Otwórz podręcznik', videos: 'Obejrzyj poradniki na YouTube', install: 'Pobierz z Google Play', support: 'Napisz do pomocy technicznej',
    checked: 'Sprawdzono w aplikacji Partitoria 1.11.1 dnia 25 listopada 2026 r.',
  },
};
