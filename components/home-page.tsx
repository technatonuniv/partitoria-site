import Link from 'next/link';
import { Screenshot } from './screenshot';
import { guideNavigationCopy } from '@/lib/guide-navigation';
import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { localePath, siteCopy, type Locale } from '@/lib/site-content';
import { commercialCopy } from '@/lib/commercial-content';
import { SubscriptionPrices } from './subscription-prices';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteCopy[locale];
  const commercial = commercialCopy[locale];
  return (
    <main lang={locale}>
      <DocumentLanguage locale={locale} />
      <SiteHeader locale={locale} />
      <section className="hero" id="content">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>{t.homeTitle}</h1>
            <p>{t.homeLead}</p>
            <Link className="hero-action" href={localePath(locale, '/guide')}>
              {t.homeAction}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="home-intro"
        id="about"
        aria-labelledby="home-about-title"
      >
        <div className="home-preview">
          <Screenshot
            locale={locale}
            copy={t}
            navigation={guideNavigationCopy[locale]}
            article={{
              id: 'home-library',
              category: 'library',
              title: t.footer,
              introduction: '',
              steps: [],
              image: 'library.png',
            }}
          />
        </div>
        <div className="home-library-copy">
          <h2 id="home-about-title">{t.valueTitle}</h2>
          <div className="value-list">
            {[t.valueOne, t.valueTwo, t.valueThree].map((value, index) => (
              <div className="value-item" key={value}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="guide-invite" aria-labelledby="invite-title">
        <div>
          <h2 id="invite-title">{t.guideTitle}</h2>
          <p>{t.guideLead}</p>
        </div>
        <Link className="text-action" href={localePath(locale, '/guide')}>
          {t.homeAction}
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section className="release-note" aria-labelledby="status-title">
        <div className="rule-symbol" aria-hidden="true">
          I
        </div>
        <div>
          <h2 id="status-title">{t.statusTitle}</h2>
          <p>{t.statusText}</p>
        </div>
      </section>
      <section className="commercial-note" aria-labelledby="commercial-title">
        <h2 id="commercial-title">{commercial.title}</h2>
        <p>{commercial.free}</p>
        <p>{commercial.pro}</p>
        <SubscriptionPrices locale={locale} />
        <p>{commercial.trial}</p>
        <p>{commercial.availability}</p>
        <Link className="text-action" href={localePath(locale, '/terms')}>
          {commercial.termsLabel}<span aria-hidden="true">↗</span>
        </Link>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
