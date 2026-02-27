/**
 * Vercel Serverless Function: принимает заявку с фронта и пересылает в Telegram-группу.
 * Токен хранится здесь (функция выполняется только на сервере Vercel, в браузер не попадает).
 */

const CHAT_ID = '-5126175356';
const TELEGRAM_BOT_TOKEN = '8555802331:AAFAEoimDZpY4z7yBl1zaGRSrtaunCfMH-g';

function escapeHtml(text) {
  if (text == null) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'Server configuration error' });
    return;
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'Invalid JSON' });
    return;
  }

  const { name, phone, tariff, paymentMethod, address } = body;
  const tariffStr = tariff
    ? `${escapeHtml(tariff.title || tariff.id)} — ${escapeHtml(tariff.price || '')}`
    : '—';
  const paymentLabels = { payme: 'Payme', click: 'Click', cash: 'Наличные' };
  const paymentStr = paymentLabels[paymentMethod] || paymentMethod || '—';

  const date = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });
  const text = [
    '📩 <b>Новая заявка eco_premium</b>',
    '',
    `👤 <b>Имя:</b> ${escapeHtml(name || '—')}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone || '—')}`,
    `📋 <b>Тариф:</b> ${tariffStr}`,
    `💳 <b>Оплата:</b> ${paymentStr}`,
    `📍 <b>Адрес:</b> ${escapeHtml(address || '—')}`,
    '',
    `🕐 <b>Время:</b> ${escapeHtml(date)}`,
  ].join('\n');

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!tgRes.ok) {
      const errData = await tgRes.text();
      console.error('Telegram API error:', tgRes.status, errData);
      res.status(502).json({ error: 'Failed to send to Telegram' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-order error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
