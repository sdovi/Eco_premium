import { useState } from 'react';

export default function ServiceRulesModal({ isOpen, onClose, onConfirm }) {
  const [accepted, setAccepted] = useState(false);

  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setAccepted(false);
    }
  };

  const handleClose = () => {
    onClose();
    setAccepted(false);
  };

  const handleAcceptChange = (checked) => {
    setAccepted(checked);
  };

  const handleConfirm = () => {
    if (!accepted) return;
    onConfirm();
    setAccepted(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={handleBackdrop}
    >
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Правила сервиса eco_premium
        </h2>

        <div className="max-h-56 overflow-y-auto space-y-2 text-xs text-gray-700">
          <p>
            1. Сервис eco_premium осуществляет регулярный вывоз бытового мусора от вашего подъезда
            или частного дома по выбранному тарифу.
          </p>
          <p>
            2. Вывоз мусора производится только в указанные при оформлении адрес и локацию. При
            изменении адреса вы обязуетесь заранее уведомить оператора.
          </p>
          <p>
            3. Клиент обязан выставлять мусор в плотно завязанных пакетах, без протечек и острых
            предметов, в согласованное место и время.
          </p>
          <p>
            4. Запрещается передавать опасные отходы (химикаты, строительный мусор, стекло в
            открытом виде и т.п.). Такие отходы не принимаются к вывозу.
          </p>
          <p>
            5. Оплата за сервис производится выбранным способом (Payme, Click или наличными) в
            соответствии с действующим тарифом. Непоступление оплаты может привести к приостановке
            обслуживания.
          </p>
          <p>
            6. В случае временного отсутствия клиента (отъезд и т.п.) необходимо уведомить сервис
            заранее для корректировки графика вывоза.
          </p>
          <p>
            7. eco_premium оставляет за собой право изменять тарифы и условия обслуживания с
            предварительным уведомлением клиента через оператора или Telegram.
          </p>
          <p>
            8. Отправляя заявку, вы подтверждаете корректность указанных данных и даёте согласие на
            обработку персональной информации для целей оказания сервиса по вывозу мусора.
          </p>
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
          <input
            id="rules-accept"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
            onChange={(e) => handleAcceptChange(e.target.checked)}
          />
          <label htmlFor="rules-accept" className="text-xs text-gray-700">
            Я внимательно ознакомился(лась) с правилами сервиса eco_premium и соглашаюсь с ними.
          </label>
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 rounded-xl bg-brand-green px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-green-dark disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!accepted}
            id="rules-accept-button"
          >
            Соглашаюсь
          </button>
        </div>
      </div>
    </div>
  );
}

