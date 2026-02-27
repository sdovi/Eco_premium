# План деплоя eco_premium (через npm run build)

## Вариант 1: GitHub + Vercel (рекомендуется)

1. **Локально проверить сборку**
   ```bash
   npm run build
   ```
   Убедись, что папка `dist/` создалась без ошибок. В репозиторий `dist/` не коммить (она в .gitignore).

2. **Залить проект в GitHub**
   - В репозиторий кладёшь **весь проект**: `src/`, `api/`, `public/`, `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js` и т.д.
   - Папку `dist/` в репозиторий **не добавлять**.

3. **Подключить Vercel к репозиторию**
   - Зайди на [vercel.com](https://vercel.com) → New Project → Import из GitHub.
   - Выбери репозиторий, при необходимости укажи:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Deploy.

4. **Итог**
   - Vercel при каждом деплое сам запускает `npm run build`, отдаёт статику из `dist` и поднимает `api/send-order.js`. Сайт и отправка заявок в Telegram работают.

---

## Вариант 2: Сборка локально и загрузка на Vercel вручную

1. **Собрать проект**
   ```bash
   npm install
   npm run build
   ```

2. **Загрузить на Vercel весь проект (не только dist)**
   - Установи Vercel CLI: `npm i -g vercel`.
   - В корне проекта: `vercel` (логин по запросу).
   - Vercel загрузит и папку `api/`, и исходники; при деплое снова выполнит `npm run build` и развернёт функции из `api/`.

   Либо через сайт Vercel: **Add New** → **Project** → **Import Git Repository** (всё равно нужен весь репозиторий, не только `dist`).

3. **Итог**
   - Деплой идёт с полного проекта; `npm run build` при этом используется (на стороне Vercel или ты заранее проверяешь его локально).

---

## Важно

- Чтобы отправка в группу работала, на хостинге должен быть не только статический `dist`, но и серверная часть **`api/`**. Поэтому загружать нужно **проект целиком** (с папкой `api/`), а не только результат `npm run build` (папку `dist`).
