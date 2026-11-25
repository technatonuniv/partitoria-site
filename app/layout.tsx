import type { Metadata, Viewport } from 'next';
import './globals.css';
import './guide.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://partitoria.app'),
  title: 'Partitoria — личная библиотека нот',
  description:
    'Partitoria помогает импортировать, читать и сохранять ноты в личной библиотеке на Android.',
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
