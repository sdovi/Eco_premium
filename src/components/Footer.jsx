import { Phone, MapPin } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const socialLinks = [
  { href: 'https://www.instagram.com/mercury_retail_group/', label: 'Instagram', icon: '/images/inst.svg' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contacts" className="scroll-mt-20 bg-gray-900 text-gray-300 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.contacts}</h3>
            <a
              href="tel:+998885935859"
              className="flex items-center gap-2 mb-2 hover:text-white transition-colors duration-200 focus-ring rounded"
            >
              <Phone size={18} />
              {t.footer.phone}
            </a>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.requisites}</h3>
            <p className="mb-2">{t.footer.companyName}</p>
            <p>ИНН {t.footer.inn}</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.address}</h3>
            <p className="flex items-start gap-2">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              {t.footer.addressText}
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.socials}</h3>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition-colors duration-200 focus-ring"
                  aria-label={s.label}
                >
                  <img src={s.icon} alt="" className="w-5 h-5 opacity-90" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t.footer.companyName}
        </div>
      </div>
    </footer>
  );
}
