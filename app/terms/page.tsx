import { legalMetadata } from '@/lib/legal-metadata';
import { LocalizedLegalPage } from '@/components/localized-legal-page';

export const metadata = legalMetadata('ru', 'terms');

export const dynamic = 'force-static';

export default function TermsPage() {
  return <LocalizedLegalPage locale="ru" section="terms" />;
}
