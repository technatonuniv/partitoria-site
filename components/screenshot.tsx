'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import type { GuideNavigationCopy } from '@/lib/guide-navigation';
import type { Locale, siteCopy } from '@/lib/site-content';
import type { LocalizedArticle } from './guide-browser';
import { guideImage } from '@/lib/guide-image';
import historicalImageCopy from '@/lib/guide-image-history.json';

export function Screenshot({
  article,
  locale,
  copy: t,
  navigation: n,
}: {
  article: LocalizedArticle;
  locale: Locale;
  copy: (typeof siteCopy)[Locale];
  navigation: GuideNavigationCopy;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState(1);
  const [failed, setFailed] = useState(false);
  const { src: source, translated, versionCode } = guideImage(locale, article.image!);
  const caption = [
    versionCode === 10814 ? historicalImageCopy[locale] : '',
    locale !== 'en' && !translated ? n.imageLanguage : '',
  ].filter(Boolean).join(' ');
  function close() {
    dialog.current?.close();
  }
  function open() {
    setZoom(1);
    dialog.current?.showModal();
    document.documentElement.classList.add('screenshot-open');
  }
  useEffect(() => {
    const element = dialog.current;
    const dismissBackdrop = (event: MouseEvent) => {
      if (event.target !== element || !element?.open) return;
      const box = element.getBoundingClientRect();
      if (
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom
      )
        element.close();
    };
    element?.addEventListener('click', dismissBackdrop);
    return () => {
      element?.removeEventListener('click', dismissBackdrop);
      document.documentElement.classList.remove('screenshot-open');
    };
  }, []);
  if (failed) return null;
  return (
    <figure className="guide-figure">
      <button
        type="button"
        ref={trigger}
        className="screenshot-trigger"
        onClick={open}
        aria-haspopup="dialog"
        aria-label={`${n.enlarge}: ${article.title}`}
      >
        <Image
          src={source}
          alt={`${t.screenshot}: ${article.title}`}
          width={1200}
          height={1920}
          sizes="(max-width:700px) 85vw, 300px"
          unoptimized
          onError={() => setFailed(true)}
        />
        <span>
          <ZoomIn size={16} aria-hidden="true" />
          {n.enlarge}
        </span>
      </button>
      {caption ? <figcaption data-capture-version={versionCode}>{caption}</figcaption> : null}
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-labelledby="screenshot-title"
        onClose={() => {
          document.documentElement.classList.remove('screenshot-open');
          trigger.current?.focus();
        }}
      >
        <div className="screenshot-viewer">
          <header>
            <p id="screenshot-title">{article.title}</p>
            <div className="screenshot-controls">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
                disabled={zoom === 1}
                aria-label={n.zoomOut}
              >
                <ZoomOut size={20} />
              </button>
              <output aria-live="polite">{Math.round(zoom * 100)}%</output>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(3, z + 0.5))}
                disabled={zoom === 3}
                aria-label={n.zoomIn}
              >
                <ZoomIn size={20} />
              </button>
              <button
                type="button"
                className="screenshot-close"
                onClick={close}
                aria-label={n.close}
              >
                <X size={23} />
              </button>
            </div>
          </header>
          <div className={`screenshot-canvas ${zoom > 1 ? 'is-zoomed' : ''}`}>
            <Image
              src={source}
              alt={`${t.screenshot}: ${article.title}`}
              width={1200}
              height={1920}
              unoptimized
              style={
                zoom > 1
                  ? {
                      height: `${zoom * 100}%`,
                      width: 'auto',
                      maxWidth: 'none',
                      maxHeight: 'none',
                    }
                  : {}
              }
            />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
