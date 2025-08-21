# Clerk Authentication Setup

## 🔑 Настройка Clerk

### 1. Получите ключи от Clerk
1. Перейдите на [clerk.com](https://clerk.com)
2. Войдите в свой аккаунт
3. Создайте новое приложение или выберите существующее
4. Перейдите в раздел "API Keys"
5. Скопируйте:
   - **Publishable Key** (начинается с `pk_test_` или `pk_live_`)
   - **Secret Key** (начинается с `sk_test_` или `sk_live_`)

### 2. Настройте переменные окружения
Создайте файл `.env.local` в корне проекта:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Настройте домены в Clerk Dashboard
1. В Clerk Dashboard перейдите в "Domains"
2. Добавьте ваш домен (например: `portfolio-site-demo.vercel.app`)
3. Для локальной разработки добавьте: `localhost:3000`

### 4. Настройте провайдеры аутентификации (опционально)
В Clerk Dashboard в разделе "User & Authentication" > "Email, Phone, Username" настройте:
- Email/Password
- Google OAuth
- GitHub OAuth
- И другие провайдеры по желанию

## 🚀 Функциональность

### Доступные страницы:
- `/` - Главная страница (публичная)
- `/sign-in` - Страница входа
- `/sign-up` - Страница регистрации
- `/dashboard` - Защищенная панель управления

### Компоненты:
- **Header** - Показывает статус авторизации и кнопки входа/выхода
- **SignIn/SignUp** - Готовые формы от Clerk с кастомным дизайном
- **Dashboard** - Защищенная страница с статистикой

## 🔒 Безопасность

- Middleware автоматически защищает маршруты
- Публичные маршруты: `/`, `/sign-in`, `/sign-up`
- Защищенные маршруты: `/dashboard` и другие
- Автоматическое перенаправление неавторизованных пользователей

## 🎨 Кастомизация

Все компоненты Clerk используют кастомные стили, соответствующие дизайну сайта:
- Цветовая схема: оранжевый (#FF6B35)
- Шрифт: Inter
- Стили: Tailwind CSS классы
