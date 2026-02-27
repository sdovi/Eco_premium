import { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const BOT_TOKEN = '8082859652:AAGyi78faKNY4EGd2hSDRQ18ys7KqSdqZmc';
const CHAT_ID = '-5144130694';

async function sendToTelegram(name, phone, message, lang) {
  const date = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });
  const text = [
    `📩 <b>Новая заявка с сайта</b>`,
    ``,
    `👤 <b>Имя:</b> ${name}`,
    `📞 <b>Телефон:</b> ${phone}`,
    message ? `💬 <b>Сообщение:</b> ${message}` : '',
    ``,
    `🌐 <b>Язык сайта:</b> ${lang === 'uz' ? '🇺🇿 Узбекский' : '🇷🇺 Русский'}`,
    `🕐 <b>Время:</b> ${date}`,
  ]
    .filter(Boolean)
    .join('\n');

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
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

  if (!res.ok) throw new Error('Telegram API error');
  return res.json();
}

export default function ContactModal({ isOpen, onClose }) {
  const { t, lang } = useLang();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const nameRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const resetForm = () => {
    setName('');
    setPhone('');
    setMessage('');
    setStatus('idle');
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendToTelegram(name.trim(), phone.trim(), message.trim(), lang);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const f = t.contactForm;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />

      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={f.title}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <h2 className="text-xl font-bold text-gray-900">{f.title}</h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus-ring"
            aria-label={f.close}
          >
            <X size={20} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-6 pb-8 pt-4 text-center">
            <CheckCircle className="mx-auto mb-4 text-brand-green" size={56} />
            <p className="text-gray-700 font-medium text-lg">{f.success}</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark btn-cta focus-ring"
            >
              {f.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2 space-y-4">
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3 text-sm">
                <AlertCircle size={18} className="flex-shrink-0" />
                {f.error}
              </div>
            )}

            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                {f.name} *
              </label>
              <input
                ref={nameRef}
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                {f.phone} *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 ..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                {f.message}
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none text-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-green-dark btn-cta focus-ring disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {f.sending}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {f.submit}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
