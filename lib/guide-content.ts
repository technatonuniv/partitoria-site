import articles from './guide-articles.json';
import type { Locale } from './site-content';

export type GuideCategory =
  | 'start'
  | 'library'
  | 'reading'
  | 'rehearsal'
  | 'data'
  | 'settings';
export const categoryOrder: GuideCategory[] = [
  'start',
  'library',
  'reading',
  'rehearsal',
  'data',
  'settings',
];
export const categoryNames: Record<Locale, Record<GuideCategory, string>> = {
  ru: {
    start: 'Начало работы',
    library: 'Библиотека',
    reading: 'Чтение',
    rehearsal: 'Репетиция',
    data: 'Файлы и сохранность',
    settings: 'Настройки и доступ',
  },
  en: {
    start: 'Getting started',
    library: 'Library',
    reading: 'Reading',
    rehearsal: 'Rehearsal',
    data: 'Files and safety',
    settings: 'Settings and access',
  },
  de: {
    start: 'Erste Schritte',
    library: 'Bibliothek',
    reading: 'Lesen',
    rehearsal: 'Probe',
    data: 'Dateien und Sicherung',
    settings: 'Einstellungen und Zugang',
  },
  it: {
    start: 'Primi passi',
    library: 'Biblioteca',
    reading: 'Lettura',
    rehearsal: 'Prove',
    data: 'File e sicurezza',
    settings: 'Impostazioni e accesso',
  },
  es: {
    start: 'Primeros pasos',
    library: 'Biblioteca',
    reading: 'Lectura',
    rehearsal: 'Ensayo',
    data: 'Archivos y copias',
    settings: 'Ajustes y acceso',
  },
  pt: {
    start: 'Primeiros passos',
    library: 'Biblioteca',
    reading: 'Leitura',
    rehearsal: 'Ensaio',
    data: 'Ficheiros e cópias',
    settings: 'Definições e acesso',
  },
  uk: {
    start: 'Початок роботи',
    library: 'Бібліотека',
    reading: 'Читання',
    rehearsal: 'Репетиція',
    data: 'Файли та збереження',
    settings: 'Налаштування й доступ',
  },
  fr: {
    start: 'Premiers pas',
    library: 'Bibliothèque',
    reading: 'Lecture',
    rehearsal: 'Répétition',
    data: 'Fichiers et sauvegarde',
    settings: 'Réglages et accès',
  },
  pl: {
    start: 'Pierwsze kroki',
    library: 'Biblioteka',
    reading: 'Czytanie',
    rehearsal: 'Próba',
    data: 'Pliki i kopie',
    settings: 'Ustawienia i dostęp',
  },
};

type GuideText = [title: string, introduction: string, ...steps: string[]];
export type GuideArticle = {
  id: string;
  category: GuideCategory;
  image?: string;
  access?: 'pro';
  text: Record<Locale, GuideText>;
};

export const accessLabels: Record<Locale, Record<'pro', string>> = {
  ru: {
    pro: 'Для создания и редактирования нужен Partitoria Pro. Уже сохранённые материалы доступны и после окончания доступа Pro.',
  },
  en: {
    pro: 'Creating and editing requires Partitoria Pro. Material you have already saved remains available after Pro access ends.',
  },
  de: {
    pro: 'Zum Erstellen und Bearbeiten benötigen Sie Partitoria Pro. Bereits gespeicherte Inhalte bleiben nach Ende des Pro-Zugangs verfügbar.',
  },
  it: {
    pro: 'Per creare e modificare serve Partitoria Pro. I materiali già salvati restano disponibili al termine dell’accesso Pro.',
  },
  es: {
    pro: 'Para crear y editar necesitas Partitoria Pro. El material guardado sigue disponible cuando termina el acceso Pro.',
  },
  pt: {
    pro: 'Para criar e editar precisa de Partitoria Pro. Os materiais guardados continuam disponíveis quando o acesso Pro termina.',
  },
  uk: {
    pro: 'Для створення та редагування потрібна Partitoria Pro. Збережені матеріали доступні й після завершення доступу Pro.',
  },
  fr: {
    pro: 'La création et la modification nécessitent Partitoria Pro. Les éléments déjà enregistrés restent accessibles à la fin de l’accès Pro.',
  },
  pl: {
    pro: 'Tworzenie i edycja wymagają Partitoria Pro. Zapisane materiały pozostają dostępne po zakończeniu dostępu Pro.',
  },
};

export const guideArticles = articles as GuideArticle[];

export function articleSteps(article: GuideArticle, locale: Locale): string[] {
  return article.text[locale].slice(2);
}
