import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://partitoria.app'),
  title: 'Partitoria — личная библиотека нот',
  description:
    'Partitoria — приложение для хранения, поиска и чтения личной библиотеки нот в PDF на Android.',
  applicationName: 'Partitoria',
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f2e9' },
    { media: '(prefers-color-scheme: dark)', color: '#171312' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
