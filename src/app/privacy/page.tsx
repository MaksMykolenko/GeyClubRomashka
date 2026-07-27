'use client';

import React from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { clubConfig } from '@/config/club.config';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8 text-club-subtext leading-relaxed font-sans">
      {/* Header */}
      <div className="text-center flex flex-col items-center gap-3">
        <div className="p-3 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink mb-2">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-white">
          Політика конфіденційності
        </h1>
        <p className="text-xs text-club-muted">
          Останнє оновлення: Липень 2026 • Клуб «{clubConfig.name}»
        </p>
      </div>

      <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 sm:p-10 flex flex-col gap-6 text-xs sm:text-sm">
        {/* Highlighted Confidentiality Box */}
        <div className="p-4 bg-neon-pink/10 border border-neon-pink/40 rounded-2xl flex items-start gap-3 text-white">
          <Lock className="w-5 h-5 text-neon-pink shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">
            <strong>Головне правило:</strong> Клуб «Ромашка» поважає право кожного гостя на приватність.
            Ми <u>ніколи</u> не запитуємо, не зберігаємо і не передаємо третім особам інформацію про
            вашу сексуальну орієнтацію чи гендерну ідентичність.
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="font-display text-base font-bold text-white">
            1. Яку інформацію ми збираємо
          </h2>
          <p>
            При користуванні сайтом та оформленні бронювання ми збираємо лише ті дані, які необхідні
            для надання послуг:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-club-muted">
            <li>Ім’я або псевдонім (за вашим вибором);</li>
            <li>Контактний email або номер телефону для підтвердження бронювання;</li>
            <li>Дату та назву обраної вечірки;</li>
            <li>Анонімні технічні дані cookies для аналітики роботи сайту.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-display text-base font-bold text-white">
            2. Мета використання даних
          </h2>
          <p>Ваші дані використовуються виключно для:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-club-muted">
            <li>Запису у список гостей чи бронювання столика;</li>
            <li>Надсилання новин афіші (якщо ви добровільно підписалися на розсилку);</li>
            <li>Опрацювання звернень служби підтримки та повідомлень про безпеку.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-display text-base font-bold text-white">
            3. Захист та анонімність
          </h2>
          <p>
            Усі дані передаються через захищене шифроване з’єднання (SSL/TLS). Форма повідомлення про
            проблему (&quot;Safe Space Report&quot;) може використовуватися повністю анонімно без збору IP-адрес.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-display text-base font-bold text-white">
            4. Видалення даних
          </h2>
          <p>
            Ви маєте право у будь-який момент закликати видалити ваші персональні дані з нашої бази.
            Для цього зверніться на email:{' '}
            <a href={`mailto:${clubConfig.email}`} className="text-neon-pink underline">
              {clubConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
