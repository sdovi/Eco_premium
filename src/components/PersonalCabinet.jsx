import { useAppState } from '../context/AppContext.jsx';

const PAYMENT_LABELS = { payme: 'Payme', click: 'Click', cash: 'Наличные' };

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

export default function PersonalCabinet() {
  const { state, dispatch } = useAppState();
  const order = state.savedOrder;

  const handleNewOrder = () => {
    dispatch({ type: 'RESET' });
  };

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-card p-6 text-center">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Личный кабинет</h1>
          <p className="text-sm text-gray-600 mb-6">
            У вас пока нет оформленных заявок. Оформите заявку на вывоз мусора.
          </p>
          <button
            type="button"
            onClick={handleNewOrder}
            className="w-full rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark focus-ring"
          >
            Оформить заявку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--tg-theme-bg-color,#f9fafb)] pb-8">
      <div className="w-full max-w-md mx-auto px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Личный кабинет</h1>
          <button
            type="button"
            onClick={handleNewOrder}
            className="text-sm font-medium text-brand-green hover:underline"
          >
            Новая заявка
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="px-4 py-3 bg-brand-green/10 border-b border-brand-green/20">
            <p className="text-xs font-medium text-brand-green uppercase tracking-wide">
              Статус заявки
            </p>
            <p className="text-sm font-semibold text-gray-900 mt-0.5">
              Заявка отправлена
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Дата: {formatDate(order.date)}
            </p>
          </div>

          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-3">
              <dt className="text-xs font-medium text-gray-500 uppercase">Имя</dt>
              <dd className="mt-1 text-sm text-gray-900">{order.name || '—'}</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-xs font-medium text-gray-500 uppercase">Телефон</dt>
              <dd className="mt-1 text-sm text-gray-900">{order.phone || '—'}</dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-xs font-medium text-gray-500 uppercase">Тариф</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {order.tariff?.title || '—'}
                {order.tariff?.price && (
                  <span className="block text-brand-green font-medium mt-0.5">
                    {order.tariff.price}
                  </span>
                )}
              </dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-xs font-medium text-gray-500 uppercase">Способ оплаты</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod || '—'}
              </dd>
            </div>
            <div className="px-4 py-3">
              <dt className="text-xs font-medium text-gray-500 uppercase">Адрес вывоза</dt>
              <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                {order.address || '—'}
              </dd>
            </div>
          </dl>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Оператор свяжется с вами в Telegram или по телефону для уточнения деталей.
        </p>

        <button
          type="button"
          onClick={handleNewOrder}
          className="mt-6 w-full rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark focus-ring"
        >
          Оформить новую заявку
        </button>
      </div>
    </div>
  );
}
