import { FactsPage, factsMetadata } from '@/components/discovery-page';

export const metadata = factsMetadata('ru');
export default function Page() {
  return <FactsPage locale="ru" />;
}
