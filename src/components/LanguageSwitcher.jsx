import { useLang } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
      <button
        type="button"
        onClick={() => setLang('uz')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'uz'
            ? 'bg-brand-green text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        UZ
      </button>
      <button
        type="button"
        onClick={() => setLang('ru')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'ru'
            ? 'bg-brand-green text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        RU
      </button>
    </div>
  );
}
