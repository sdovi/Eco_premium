import { useAppState } from '../context/AppContext.jsx';

export default function LocationStep() {
  const { state, dispatch } = useAppState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.address.trim()) return;
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Добавление локации
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Укажите адрес, откуда нужно забирать мусор. Можно написать подъезд, этаж, ориентир.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Адрес / локация
            </label>
            <textarea
              rows={3}
              value={state.address}
              onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none resize-none"
              placeholder="г. Ташкент, Мирзо-Улугбекский район, дом 10, подъезд 3, этаж 4..."
            />
          </div>

          <button
            type="submit"
            disabled={!state.address.trim()}
            className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Подтвердить локацию
          </button>
        </form>
      </div>
    </div>
  );
}

