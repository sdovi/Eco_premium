import { useState } from 'react';
import { useAppState } from '../context/AppContext.jsx';
import ServiceRulesModal from '../components/ServiceRulesModal.jsx';

const METHODS = [
  { id: 'payme', label: 'Payme' },
  { id: 'click', label: 'Click' },
  { id: 'cash', label: 'Наличные' },
];

export default function PaymentStep() {
  const { state, dispatch } = useAppState();
  const [selectedMethod, setSelectedMethod] = useState(state.paymentMethod);
  const [rulesOpen, setRulesOpen] = useState(false);

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId);
    setRulesOpen(true);
  };

  const handleRulesConfirm = () => {
    dispatch({ type: 'SET_PAYMENT_METHOD', payload: selectedMethod });
    dispatch({ type: 'SET_RULES_ACCEPTED', payload: true });
    setRulesOpen(false);
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--tg-theme-bg-color,#f9fafb)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-card p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Способ оплаты
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Выберите удобный способ оплаты за сервис вывоза мусора.
        </p>

        <div className="space-y-3 pt-2">
          {METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => handleSelectMethod(m.id)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 text-left shadow-sm hover:border-brand-green/60"
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <ServiceRulesModal
        isOpen={rulesOpen}
        onClose={() => setRulesOpen(false)}
        onConfirm={handleRulesConfirm}
      />
    </div>
  );
}

