import { useAppState } from '../context/AppContext.jsx';

export default function VerifyStep() {
  const { state, dispatch } = useAppState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name.trim() || !state.phone.trim()) return;
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Проверьте ваши данные
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Эти контакты будут использоваться для связи с вами по вопросам сервиса eco_premium.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Имя
            </label>
            <input
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Номер телефона
            </label>
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => dispatch({ type: 'SET_PHONE', payload: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!state.name.trim() || !state.phone.trim()}
            className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Сохранить и продолжить
          </button>
        </form>
      </div>
    </div>
  );
}

