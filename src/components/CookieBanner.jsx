import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

const COOKIE_KEY = 'mercury-cookie-accepted';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.cookie.ariaLabel}
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-sm text-gray-300 p-4 md:p-6 shadow-[0_-4px_24px_rgba(0,0,0,0.2)] animate-slide-up"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
        <p className="flex-1 text-sm leading-relaxed">
          {t.cookie.text}{' '}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green hover:underline focus-ring rounded"
          >
            {t.cookie.link}
          </a>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-shrink-0 bg-brand-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green-dark focus-ring transition-colors duration-200"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
