import { Wrench, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../i18n/LanguageContext';

function ServiceCard({ icon: Icon, title, items, note, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
          >
            <span className="text-sm md:text-base text-gray-700">{item.name}</span>
            <span className="text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap ml-4">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-4 text-sm text-brand-green font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          {note}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLang();

  return (
    <section
      id="services"
      ref={ref}
      className={`scroll-mt-20 py-16 md:py-24 px-4 bg-white transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          {t.services.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            icon={Zap}
            title={t.services.electrician.title}
            items={t.services.electrician.items}
            note={t.services.materialsNote}
            color="bg-yellow-500"
          />
          <ServiceCard
            icon={Wrench}
            title={t.services.plumber.title}
            items={t.services.plumber.items}
            note={t.services.materialsNote}
            color="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
