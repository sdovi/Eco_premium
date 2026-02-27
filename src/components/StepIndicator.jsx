import { useAppState } from '../context/AppContext.jsx';

const STEPS = [
  'Контакт',
  'Данные',
  'Тариф',
  'Оплата',
  'Локация',
  'Отправка',
];

export default function StepIndicator() {
  const { state } = useAppState();

  return (
    <div className="w-full max-w-md mx-auto px-4 pt-3">
      <div className="flex items-center justify-between text-[11px] text-gray-500">
        {STEPS.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = state.step === stepNumber;
          const isDone = state.step > stepNumber;

          return (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${
                  isDone
                    ? 'bg-brand-green text-white'
                    : isActive
                      ? 'border-2 border-brand-green text-brand-green'
                      : 'border border-gray-300 text-gray-400'
                }`}
              >
                {stepNumber}
              </div>
              <span className="mt-1 text-center truncate max-w-[56px]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-2 h-1 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-brand-green transition-all"
          style={{ width: `${(state.step / STEPS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

