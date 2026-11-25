import { legalMetadata } from '@/lib/legal-metadata';
import { LocalizedLegalPage } from '@/components/localized-legal-page';

export const metadata = legalMetadata('ru', 'support');

export const dynamic = 'force-static';

export default function SupportPage() {
  return <LocalizedLegalPage locale="ru" section="support" />;
}
