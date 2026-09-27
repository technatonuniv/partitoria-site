import type { Locale } from './site-content';
export const automaticLanguage: Record<Locale, string> = {
  ru: 'Забыть выбор: язык браузера', en: 'Forget choice: browser language',
  de: 'Auswahl vergessen: Browsersprache', it: 'Dimentica la scelta: lingua del browser',
  es: 'Olvidar elección: idioma del navegador', pt: 'Esquecer escolha: idioma do navegador',
  uk: 'Забути вибір: мова браузера', fr: 'Oublier le choix : langue du navigateur',
  pl: 'Zapomnij wybór: język przeglądarki',
};

export const languageNotice: Record<Locale, string> = {
  ru: 'Выбирая язык, вы разрешаете сохранить его в этом браузере на 180 дней.',
  en: 'Choosing a language lets us remember it in this browser for 180 days.',
  de: 'Mit der Sprachwahl erlauben Sie uns, sie 180 Tage in diesem Browser zu speichern.',
  it: 'Scegliendo una lingua, ci consenti di ricordarla in questo browser per 180 giorni.',
  es: 'Al elegir un idioma, permites que lo recordemos en este navegador durante 180 días.',
  pt: 'Ao escolher um idioma, permite que o guardemos neste navegador durante 180 dias.',
  uk: 'Вибираючи мову, ви дозволяєте зберегти її в цьому браузері на 180 днів.',
  fr: 'En choisissant une langue, vous nous autorisez à la mémoriser dans ce navigateur pendant 180 jours.',
  pl: 'Wybierając język, zgadzasz się na zapisanie go w tej przeglądarce na 180 dni.',
};
