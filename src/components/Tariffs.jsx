import { Check, Crown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

export default function Tariffs() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="tariffs"
      ref={ref}
      className={`scroll-mt-20 py-16 md:py-24 px-4 bg-gray-50 transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          {t.tariffs.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {t.tariffs.items.map((tariff) => (
            <div
              key={tariff.title}
              className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-md card-hover flex flex-col ${
                tariff.vip
                  ? 'border-2 border-yellow-400 ring-2 ring-yellow-400/20 pt-10'
                  : tariff.recommended
                    ? 'border-2 border-brand-green ring-2 ring-brand-green/20 pt-10'
                    : 'border border-gray-100'
              }`}
            >
              {tariff.vip && (
                <span className="absolute -top-3 left-4 inline-flex items-center gap-1 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                  <Crown size={14} />
                  {t.tariffs.vipBadge}
                </span>
              )}
              {tariff.recommended && !tariff.vip && (
                <span className="absolute -top-3 left-4 px-3 py-1 bg-brand-green text-white text-xs font-semibold rounded-full">
                  {t.tariffs.recommended}
                </span>
              )}

              <p className="text-sm text-gray-500 mb-1">{tariff.subtitle}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tariff.title}</h3>
              <p className={`text-2xl md:text-3xl font-bold mb-5 ${
                tariff.vip ? 'text-yellow-600' : 'text-brand-green'
              }`}>
                {tariff.price}
              </p>

              <ul className="space-y-2.5 flex-1">
                {tariff.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${
                      tariff.vip ? 'text-yellow-500' : 'text-brand-green'
                    }`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
