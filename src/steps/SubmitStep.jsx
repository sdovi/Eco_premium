import { useEffect, useRef } from 'react';
import { useAppState } from '../context/AppContext.jsx';
import { submitOrder } from '../utils/api.js';

export default function SubmitStep() {
  const { state, dispatch } = useAppState();
  const sentRef = useRef(false);

  useEffect(() => {
    if (state.submitStatus !== 'idle' || sentRef.current) return;
    sentRef.current = true;

    let cancelled = false;
    dispatch({ type: 'SET_SUBMIT_STATUS', payload: 'loading' });

    submitOrder({
      name: state.name,
      phone: state.phone,
      tariff: state.tariff,
      paymentMethod: state.paymentMethod,
      address: state.address,
    })
      .then(() => {
        if (!cancelled) dispatch({ type: 'GO_TO_CABINET' });
      })
      .catch(() => {
        if (!cancelled) {
          dispatch({ type: 'SET_SUBMIT_STATUS', payload: 'error' });
          sentRef.current = false;
        }
      });

    return () => { cancelled = true; };
  }, [state.name, state.phone, state.tariff, state.paymentMethod, state.address, state.submitStatus, dispatch]);

  const loading = state.submitStatus === 'loading';
  const error = state.submitStatus === 'error';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4 text-center">
        <h1 className="text-xl font-semibold text-gray-900">
          Завершение оформления
        </h1>

        {loading && (
          <>
            <p className="text-sm text-gray-600">
              Отправляем ваши данные оператору eco_premium…
            </p>
            <div className="mt-4 flex justify-center">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-green border-t-transparent" />
            </div>
          </>
        )}

        {error && (
          <>
            <p className="text-sm text-red-600">
              Не удалось отправить данные. Проверьте подключение к интернету и попробуйте ещё раз.
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'SET_SUBMIT_STATUS', payload: 'idle' });
                sentRef.current = false;
              }}
              className="mt-4 w-full inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-ring"
            >
              Повторить отправку
            </button>
          </>
        )}
      </div>
    </div>
  );
}

