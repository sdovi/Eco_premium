import { useAppState } from '../context/AppContext.jsx';

const TARIFFS = [
  {
    id: 'daily',
    title: 'Ежедневный вынос',
    description: 'Вывоз мусора каждый день в удобное для вас время.',
    price: '159 000 UZS',
  },
  {
    id: 'every3days',
    title: 'Раз в 3 дня',
    description: 'Вывоз мусора каждые 3 дня, экономичный вариант.',
    price: '109 000 UZS',
  },
];

export default function TariffStep() {
  const { state, dispatch } = useAppState();

  const handleSelect = (tariff) => {
    dispatch({ type: 'SET_TARIFF', payload: tariff });
  };

  const handleContinue = () => {
    if (!state.tariff) return;
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Выберите тариф
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Выберите удобный формат вывоза мусора для вашего дома.
        </p>

        <div className="space-y-3 pt-2">
          {TARIFFS.map((tariff) => {
            const isActive = state.tariff?.id === tariff.id;
            return (
              <button
                key={tariff.id}
                type="button"
                onClick={() => handleSelect(tariff)}
                className={`w-full text-left rounded-2xl border px-4 py-3.5 text-sm shadow-sm transition-all ${
                  isActive
                    ? 'border-brand-green bg-brand-green/5'
                    : 'border-gray-200 bg-white hover:border-brand-green/60'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-gray-900">{tariff.title}</div>
                    <div className="mt-1 text-xs text-gray-600">
                      {tariff.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-brand-green">
                      {tariff.price}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!state.tariff}
          className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}

