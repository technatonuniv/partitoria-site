import type { Locale } from './site-content';

export type GuideNavigationCopy = {
  sections: string;
  previous: string;
  next: string;
  clear: string;
  lead: string;
  enlarge: string;
  back: string;
  imageLanguage: string;
  close: string;
  zoomIn: string;
  zoomOut: string;
};
const rows: Record<Locale, string[]> = {
  ru: [
    'Разделы руководства',
    'Предыдущая статья',
    'Следующая статья',
    'Сбросить поиск',
    'Как добавить ноты, подготовиться к репетиции и сохранить свою библиотеку.',
    'Увеличить скриншот',
    'Все разделы',
    'Интерфейс на английском языке.',
    'Закрыть',
    'Увеличить',
    'Уменьшить',
  ],
  en: [
    'Guide sections',
    'Previous article',
    'Next article',
    'Clear search',
    'Add scores, prepare for rehearsal and keep your library safe.',
    'Enlarge screenshot',
    'All sections',
    'Interface shown in English.',
    'Close',
    'Zoom in',
    'Zoom out',
  ],
  de: [
    'Themen im Handbuch',
    'Vorheriger Artikel',
    'Nächster Artikel',
    'Suche zurücksetzen',
    'Noten hinzufügen, Proben vorbereiten und die eigene Bibliothek sichern.',
    'Bildschirmaufnahme vergrößern',
    'Alle Themen',
    'Die Oberfläche ist auf Englisch abgebildet.',
    'Schließen',
    'Vergrößern',
    'Verkleinern',
  ],
  it: [
    'Sezioni della guida',
    'Articolo precedente',
    'Articolo successivo',
    'Cancella ricerca',
    'Aggiungi spartiti, prepara le prove e conserva la tua biblioteca.',
    'Ingrandisci la schermata',
    'Tutte le sezioni',
    'Interfaccia mostrata in inglese.',
    'Chiudi',
    'Ingrandisci',
    'Riduci',
  ],
  es: [
    'Secciones de la guía',
    'Artículo anterior',
    'Artículo siguiente',
    'Borrar búsqueda',
    'Añade partituras, prepara los ensayos y protege tu biblioteca.',
    'Ampliar la captura',
    'Todas las secciones',
    'La interfaz se muestra en inglés.',
    'Cerrar',
    'Ampliar',
    'Reducir',
  ],
  pt: [
    'Secções do guia',
    'Artigo anterior',
    'Artigo seguinte',
    'Limpar pesquisa',
    'Adicione partituras, prepare os ensaios e proteja a sua biblioteca.',
    'Ampliar a captura',
    'Todas as secções',
    'A interface é apresentada em inglês.',
    'Fechar',
    'Ampliar',
    'Reduzir',
  ],
  uk: [
    'Розділи посібника',
    'Попередня стаття',
    'Наступна стаття',
    'Скинути пошук',
    'Як додати ноти, підготуватися до репетиції та зберегти свою бібліотеку.',
    'Збільшити знімок екрана',
    'Усі розділи',
    'Інтерфейс показано англійською.',
    'Закрити',
    'Збільшити',
    'Зменшити',
  ],
  fr: [
    'Rubriques du guide',
    'Article précédent',
    'Article suivant',
    'Effacer la recherche',
    'Ajouter des partitions, préparer une répétition et conserver sa bibliothèque.',
    'Agrandir la capture',
    'Toutes les rubriques',
    'L’interface est présentée en anglais.',
    'Fermer',
    'Agrandir',
    'Réduire',
  ],
  pl: [
    'Działy przewodnika',
    'Poprzedni artykuł',
    'Następny artykuł',
    'Wyczyść wyszukiwanie',
    'Dodawaj nuty, przygotuj się do próby i zadbaj o swoją bibliotekę.',
    'Powiększ zrzut ekranu',
    'Wszystkie działy',
    'Interfejs pokazano w języku angielskim.',
    'Zamknij',
    'Powiększ',
    'Pomniejsz',
  ],
};
export const guideNavigationCopy = Object.fromEntries(
  Object.entries(rows).map(([locale, r]) => [
    locale,
    {
      sections: r[0],
      previous: r[1],
      next: r[2],
      clear: r[3],
      lead: r[4],
      enlarge: r[5],
      back: r[6],
      imageLanguage: r[7],
      close: r[8],
      zoomIn: r[9],
      zoomOut: r[10],
    },
  ]),
) as Record<Locale, GuideNavigationCopy>;
export function normalizeGuideSearch(text: string, locale: Locale) {
  return text
    .toLocaleLowerCase(locale)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ё/g, 'е')
    .trim();
}
