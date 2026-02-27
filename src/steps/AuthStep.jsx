import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { useAppState } from '../context/AppContext.jsx';

export default function AuthStep() {
  const { state, dispatch } = useAppState();
  const [loadingContact, setLoadingContact] = useState(false);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    const user = WebApp.initDataUnsafe?.user;
    if (user && !state.name) {
      const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim();
      if (fullName) {
        dispatch({ type: 'SET_NAME', payload: fullName });
      }
    }
  }, [dispatch, state.name]);

  const handleRequestContact = () => {
    setLoadingContact(true);
    WebApp.requestContact((ok, data) => {
      setLoadingContact(false);
      if (!ok || !data?.responseUnsafe?.contact) return;

      const contact = data.responseUnsafe.contact;
      if (contact.phone_number) {
        dispatch({ type: 'SET_PHONE', payload: contact.phone_number });
      }
      if (contact.first_name || contact.last_name) {
        const fullName = `${contact.first_name || ''} ${contact.last_name || ''}`.trim();
        if (fullName) {
          dispatch({ type: 'SET_NAME', payload: fullName });
        }
      }
      dispatch({ type: 'NEXT_STEP' });
    });
  };

  const canContinue = Boolean(state.name && state.phone);

  const handleContinue = () => {
    if (canContinue) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Добро пожаловать в eco_premium
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Чтобы продолжить оформление сервиса по вывозу мусора, поделитесь, пожалуйста, своим
          контактом через Telegram.
        </p>

        <button
          type="button"
          onClick={handleRequestContact}
          disabled={loadingContact}
          className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loadingContact ? 'Ожидание контакта…' : 'Отправить контакт через Telegram'}
        </button>

        <div className="pt-3 border-t border-gray-100 space-y-2">
          <p className="text-xs text-gray-500">
            Мы используем ваш номер телефона только для связи по вопросам сервиса и передачи заказа
            оператору. Данные не передаются третьим лицам.
          </p>
        </div>

        {canContinue && (
          <button
            type="button"
            onClick={handleContinue}
            className="w-full mt-1 inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-ring"
          >
            Продолжить
          </button>
        )}
      </div>
    </div>
  );
}

