import { commercialCopy, launchPrices } from '@/lib/commercial-content';
import type { Locale } from '@/lib/site-content';

export function SubscriptionPrices({ locale }: { locale: Locale }) {
  const t = commercialCopy[locale];
  return (
    <div className="subscription-prices">
      <table>
        <caption>{t.priceNote}</caption>
        <thead>
          <tr>{t.tableLabels.map((label) => <th scope="col" key={label}>{label}</th>)}</tr>
        </thead>
        <tbody>
          {launchPrices.map((price, index) => (
            <tr key={t.periods[index]}>
              <th scope="row">{t.periods[index]}</th>
              <td>{price.usd}</td>
              <td>{price.eur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
