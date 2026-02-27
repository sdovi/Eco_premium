import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

export default function AboutSection({ onContact }) {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-20 py-16 md:py-24 px-4 bg-white transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {t.about.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`text-gray-600 leading-relaxed ${
              idx === t.about.paragraphs.length - 1 ? 'mb-8' : 'mb-6'
            }`}
          >
            {p}
          </p>
        ))}
        <button
          type="button"
          onClick={onContact}
          className="inline-block bg-brand-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-green-dark btn-cta focus-ring"
        >
          {t.about.cta}
        </button>
      </div>
    </section>
  );
}
