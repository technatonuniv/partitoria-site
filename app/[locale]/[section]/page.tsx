import { notFound } from 'next/navigation';
import { LocalizedLegalPage } from '@/components/localized-legal-page';
import { legalPages, type LegalPage } from '@/lib/legal-content';
import { locales, type Locale } from '@/lib/site-content';
import { siteCopy } from '@/lib/site-content';
import { legalContent } from '@/lib/legal-content';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export function generateStaticParams() { return locales.flatMap((locale) => legalPages.map((section) => ({ locale, section }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !legalPages.includes(section as LegalPage)) return {};
  return { title: `${siteCopy[locale as Locale][section as LegalPage]} | Partitoria`, description: legalContent[locale as Locale][section as LegalPage][0] };
}
export default async function LocalizedLegal({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !legalPages.includes(section as LegalPage)) notFound();
  return <LocalizedLegalPage locale={locale as Locale} section={section as LegalPage} />;
}
