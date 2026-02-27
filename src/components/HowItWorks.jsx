import { Smartphone, MapPin, CreditCard, Package, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

const stepIcons = [Smartphone, MapPin, CreditCard, Package, Sparkles];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`scroll-mt-20 py-16 md:py-24 px-4 bg-white transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <a href="#about" className="text-sm text-brand-green font-medium mb-4 block hover:underline focus-ring rounded transition-colors duration-200">
          {t.howItWorks.learnMore}
        </a>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16">
          {t.howItWorks.heading}
        </h2>

        <div className="space-y-8 md:space-y-12">
          {t.howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start transition-colors duration-200 rounded-xl p-4 hover:bg-gray-50/50"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <Icon className="w-8 h-8 text-brand-green flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  {step.subtitle && (
                    <p className="text-gray-500 ml-12 md:ml-12">{step.subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
