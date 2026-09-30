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
  access?: 'pro' | 'pilot';
  text: Record<Locale, GuideText>;
};

export const accessLabels: Record<Locale, Record<'pro' | 'pilot', string>> = {
  ru: {
    pro: 'Для создания и редактирования нужен Partitoria Pro. Уже сохранённые материалы доступны и после окончания подписки.',
    pilot: 'Аккаунты доступны приглашённым участникам только в отдельной приватной OWNER-сборке. В публичной бесплатной сборке аккаунтов и входа нет.',
  },
  en: {
    pro: 'Creating and editing requires Partitoria Pro. Material you have already saved remains available after your subscription ends.',
    pilot: 'Accounts are available to invited testers only in the separate private OWNER build. The public Free build has no accounts or sign-in.',
  },
  de: {
    pro: 'Zum Erstellen und Bearbeiten benötigen Sie Partitoria Pro. Bereits gespeicherte Inhalte bleiben nach Ablauf des Abonnements verfügbar.',
    pilot:
      'Konten gibt es für eingeladene Tester nur in der separaten privaten OWNER-Version. Die öffentliche kostenlose Version hat keine Konten oder Anmeldung.',
  },
  it: {
    pro: 'Per creare e modificare serve Partitoria Pro. I materiali già salvati restano disponibili alla scadenza dell’abbonamento.',
    pilot: 'Gli account sono disponibili agli invitati solo nella versione privata OWNER separata. La versione pubblica gratuita non ha account né accesso.',
  },
  es: {
    pro: 'Para crear y editar necesitas Partitoria Pro. El material guardado sigue disponible cuando termina la suscripción.',
    pilot:
      'Las cuentas para invitados solo existen en la versión privada OWNER independiente. La versión pública gratuita no tiene cuentas ni inicio de sesión.',
  },
  pt: {
    pro: 'Para criar e editar precisa de Partitoria Pro. Os materiais guardados continuam disponíveis quando a subscrição termina.',
    pilot: 'As contas para convidados existem apenas na versão privada OWNER separada. A versão pública gratuita não tem contas nem início de sessão.',
  },
  uk: {
    pro: 'Для створення та редагування потрібна Partitoria Pro. Збережені матеріали доступні й після завершення підписки.',
    pilot: 'Акаунти для запрошених доступні лише в окремій приватній OWNER-збірці. У публічній безкоштовній збірці немає акаунтів і входу.',
  },
  fr: {
    pro: 'La création et la modification nécessitent Partitoria Pro. Les éléments déjà enregistrés restent accessibles à la fin de l’abonnement.',
    pilot: 'Les comptes des invités existent uniquement dans la version privée OWNER distincte. La version publique gratuite n’a ni comptes ni connexion.',
  },
  pl: {
    pro: 'Tworzenie i edycja wymagają Partitoria Pro. Zapisane materiały pozostają dostępne po zakończeniu subskrypcji.',
    pilot:
      'Konta dla zaproszonych istnieją tylko w osobnej prywatnej wersji OWNER. Publiczna bezpłatna wersja nie ma kont ani logowania.',
  },
};

export const guideArticles = articles as GuideArticle[];

export function articleSteps(article: GuideArticle, locale: Locale): string[] {
  return article.text[locale].slice(2);
}
