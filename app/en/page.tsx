import { BookOpen, FileCheck2, LibraryBig, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export const dynamic = 'force-static';

const principles = [
  {
    icon: LibraryBig,
    title: 'Your library comes first',
    text: 'Import your PDFs, search locally, and continue reading from the page you left.',
  },
  {
    icon: FileCheck2,
    title: 'Your files remain yours',
    text: 'Original files are not modified. Export, backup, and recovery remain under your control.',
  },
  {
    icon: ShieldCheck,
    title: 'Calm offline use',
    text: 'Reading and organising your personal library do not require an account or a permanent connection.',
  },
];

export default function EnglishHome() {
  return (
    <main lang="en">
      <SiteHeader english />
      <section className="hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow">Sheet-music library for Android</p>
          <h1>Your scores.<br />Always at hand.</h1>
          <p className="hero-lead">
            Partitoria helps musicians keep a personal PDF library, find works quickly,
            and read scores without unnecessary distractions.
          </p>
          <output className="status-pill">
            <span aria-hidden="true" />
            Preparing for open testing
          </output>
        </div>
        <figure className="hero-visual">
          <Image
            src="/partitoria-tablet-concept.png"
            alt="Partitoria tablet interface concept showing a personal library and score reader"
            width="1586"
            height="992"
            priority
          />
          <figcaption>Tablet interface: personal library and full-screen reading</figcaption>
        </figure>
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title-en">
        <div className="section-heading">
          <p className="eyebrow">Made for musicians</p>
          <h2 id="principles-title-en">A dependable library, not another catalogue</h2>
        </div>
        <div className="principle-grid">
          {principles.map(({ icon: Icon, title, text }) => (
            <article className="principle-card" key={title}>
              <Icon aria-hidden="true" strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="release-note" id="status" aria-labelledby="status-title-en">
        <BookOpen aria-hidden="true" strokeWidth={1.5} />
        <div>
          <p className="eyebrow">Current status</p>
          <h2 id="status-title-en">The public release is not available yet</h2>
          <p>
            We are preparing the application, documentation, and physical-tablet checks.
            The official testing link will appear here when the build is ready.
          </p>
        </div>
      </section>
      <SiteFooter english />
    </main>
  );
}
