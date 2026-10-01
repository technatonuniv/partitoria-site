import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-legal-page';

export const metadata: Metadata = {
  title: "Условия использования | Partitoria",
  description: "Условия Partitoria и будущих подписок Google Play.",
};

export const dynamic = 'force-static';

export default function TermsPage() {
  return <LocalizedLegalPage locale="ru" section="terms" />;
}
