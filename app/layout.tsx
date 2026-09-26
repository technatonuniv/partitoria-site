import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://partitoria.app'),
  title: 'Partitoria — личная библиотека нот',
  description:
    'Partitoria — личная библиотека нот для Android: импорт, локальный поиск, чтение и резервное копирование.',
  applicationName: 'Partitoria',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ee',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
