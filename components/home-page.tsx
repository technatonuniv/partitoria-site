import Link from 'next/link';
import { Screenshot } from './screenshot';
import { guideNavigationCopy } from '@/lib/guide-navigation';
import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { localePath, siteCopy, type Locale } from '@/lib/site-content';
import { commercialCopy } from '@/lib/commercial-content';
import { SubscriptionPrices } from './subscription-prices';
import { featuresCopy, googlePlayUrl } from '@/lib/features-content';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteCopy[locale];
  const commercial = commercialCopy[locale];
  const features = featuresCopy[locale];
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
      <section className="features" id="features" aria-labelledby="features-title">
        <div className="features-heading">
          <div>
            <p className="eyebrow">Partitoria · Android</p>
            <h2 id="features-title">{features.title}</h2>
          </div>
          <p>{features.intro}</p>
        </div>
        <div className="features-grid">
          {features.items.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-card-top"><span className="feature-number">{String(index + 1).padStart(2, '0')}</span><span className="feature-access">{item.pro ? 'Pro' : 'Free'}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="features-bottom">
          <p>{features.note}</p>
          <Link className="text-action" href={localePath(locale, '/guide')}>{features.guide} <span aria-hidden="true">↗</span></Link>
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
          <h2 id="status-title">{features.playTitle}</h2>
          <p>{features.playText}</p>
          <a className="primary-link" href={googlePlayUrl}>Google Play ↗</a>
        </div>
      </section>
      <section className="commercial-note" aria-labelledby="commercial-title">
        <h2 id="commercial-title">{commercial.title}</h2>
        <p>{commercial.free}</p>
        <p>{commercial.pro}</p>
        <SubscriptionPrices locale={locale} />
        <p>{commercial.trial}</p>
        <Link className="text-action" href={localePath(locale, '/terms')}>
          {commercial.termsLabel}<span aria-hidden="true">↗</span>
        </Link>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
