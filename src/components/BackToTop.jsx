import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-brand-green text-white shadow-card flex items-center justify-center hover:bg-brand-green-dark focus-ring transition-all duration-200 hover:scale-110"
      aria-label={t.backToTop}
    >
      <ChevronUp size={24} />
    </button>
  );
}
