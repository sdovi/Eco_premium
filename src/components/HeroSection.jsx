import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function HeroSection({ onContact }) {
  const { t } = useLang();
  const [bgError, setBgError] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-white px-4 py-20 overflow-hidden">
      {!bgError ? (
        <>
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setBgError(true)}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <img
            src="/images/vector-deco.svg"
            alt=""
            className="absolute right-0 top-1/4 w-48 md:w-64 opacity-20 pointer-events-none"
            aria-hidden
          />
          <img
            src="/images/polygon.svg"
            alt=""
            className="absolute left-4 bottom-1/4 w-12 md:w-16 opacity-25 pointer-events-none"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-dark to-gray-900"
          aria-hidden
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%)]">
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto [text-shadow:_0_1px_4px_rgb(0_0_0_/_50%)]">
          {t.hero.subtitle}
        </p>
        <button
          type="button"
          onClick={onContact}
          className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 btn-cta focus-ring shadow-lg"
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}
