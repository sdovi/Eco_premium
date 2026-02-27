// На продакшене (Vercel) запрос идёт на свой же домен — в serverless-функцию api/send-order
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function submitOrder({ name, phone, tariff, paymentMethod, address }) {
  const url = API_BASE_URL
    ? `${API_BASE_URL}/api/send-order`
    : `${window.location.origin}/api/send-order`;

  const payload = {
    name,
    phone,
    tariff,
    paymentMethod,
    address,
    initData: window.Telegram?.WebApp?.initData,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to submit order');
  }

  return { ok: true };
}

