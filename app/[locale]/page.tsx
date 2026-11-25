import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home-page';
import { locales, type Locale } from '@/lib/site-content';
import { homeMetadata } from '@/lib/home-metadata';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  return homeMetadata(locale as Locale);
}
export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <HomePage locale={locale as Locale} />;
}
