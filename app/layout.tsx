import type { Metadata, Viewport } from 'next';
import './globals.css';
import './guide.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://partitoria.app'),
  title: 'Partitoria — личная библиотека нот',
  description:
    'Partitoria — личная библиотека нот для Android: импорт, локальный поиск, чтение и резервное копирование.',
  applicationName: 'Partitoria',
  authors: [{ name: 'Partitoria Studio' }],
  creator: 'Partitoria Studio',
  publisher: 'Partitoria Studio',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ee',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head><script src="/language-preference.js" defer /></head>
      <body>{children}</body>
    </html>
  );
}
