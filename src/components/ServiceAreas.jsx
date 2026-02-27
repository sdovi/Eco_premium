import { MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

export default function ServiceAreas() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="areas"
      ref={ref}
      className={`scroll-mt-20 py-16 md:py-24 px-4 bg-white transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {t.serviceAreas.heading}
        </h2>

        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-brand-green-dark/10 border border-gray-200 shadow-card">
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-24 h-24 text-brand-green opacity-50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 font-medium">{t.serviceAreas.mapPlaceholder}</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-green-dark btn-cta focus-ring"
          >
            {t.serviceAreas.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
