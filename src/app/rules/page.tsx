'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RulesPage() {
  const clubRules = [
    'Вхід виключно для осіб віком від 18 років (наявність оригінального документа обов’язкова).',
    'Нульова толерантність до будь-якої форми дискримінації, булінгу чи домагань.',
    'Фото- та відеозйомка інших гостей дозволена виключно за їхньою попередньою згодою.',
    'Повага до особистих меж кожного гостя та дотримання принципу згоди.',
    'Адміністрація залишає за собою право відмовити у відвідуванні при порушенні правил безпеки.',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8">
      <div className="border-b border-border pb-6">
        <h1 className="font-sans text-4xl font-light text-text-primary mb-2">
          Правила клубу
        </h1>
        <p className="text-sm text-text-secondary font-sans">
          Стандарти та етика безпечного перебування в клубі «Ромашка».
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {clubRules.map((rule, idx) => (
          <div
            key={idx}
            className="p-5 bg-surface border border-border rounded-lg flex items-start gap-4"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-text-primary leading-relaxed font-sans">
              {rule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
