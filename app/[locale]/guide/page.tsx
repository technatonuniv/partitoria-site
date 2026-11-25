import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/guide-page';
import { locales, type Locale } from '@/lib/site-content';
import { guideMetadata } from '@/lib/guide-metadata';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  return guideMetadata(locale as Locale);
}
export default async function LocalizedGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <GuidePage locale={locale as Locale} />;
}
