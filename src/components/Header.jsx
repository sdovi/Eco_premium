import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#contacts', label: t.nav.contacts },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'bg-white/98 backdrop-blur-md shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            {!logoError ? (
              <img
                src="/images/logo.svg"
                alt="MERCURY"
                className="h-8 md:h-10 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-gray-900">MERC</span>
                <span className="text-brand-green">URY</span>
              </span>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-green transition-colors duration-200 focus-ring rounded"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-ring transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm font-medium text-gray-700 hover:text-brand-green transition-colors duration-200 focus-ring py-2 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
