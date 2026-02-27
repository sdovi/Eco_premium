import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

export default function PricingPreview() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="pricing-preview"
      ref={ref}
      className={`scroll-mt-20 py-12 md:py-20 px-4 bg-white transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          {t.pricing.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl p-6 md:p-8 text-white shadow-card card-hover">
            <p className="text-sm md:text-base text-white/90 mb-2">{t.pricing.monthlyLabel}</p>
            <p className="text-4xl md:text-5xl font-bold">{t.pricing.monthlyPrice}</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 card-hover">
            <p className="text-sm md:text-base text-gray-600 mb-2">{t.pricing.yearlyLabel}</p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{t.pricing.yearlyPrice}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full">
              {t.pricing.yearlyBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
