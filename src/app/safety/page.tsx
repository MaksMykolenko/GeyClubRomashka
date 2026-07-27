'use client';

import React from 'react';
import { useModals } from '@/components/common/ModalContext';
import { ShieldCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SafetyPage() {
  const { openReportModal } = useModals();

  const rules = [
    'Поважай особисті межі інших гостей;',
    'Запитуй згоду перед дотиком або фото;',
    'Не використовуй дискримінаційні висловлювання;',
    'У незручній ситуації звертайся до персоналу;',
    'Ми не толеруємо будь-які форми насильства;',
    'Відповідально стався до алкоголю;',
    'Не фотографуй гостей без дозволу.',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
      {/* SECTION 15: Two-column Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Rules */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-sans text-4xl font-light text-text-primary mb-3">
              Безпека
            </h1>
            <p className="text-base text-text-secondary leading-relaxed font-sans max-w-xl">
              Твоя безпека та комфорт — наш пріоритет. Просимо дотримуватися простих правил.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 pt-2">
            {rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-primary font-sans">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Large Minimal Circle with Shield Icon */}
        <div className="lg:col-span-5 flex items-center justify-center p-8">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-border flex items-center justify-center bg-surface relative">
            <div className="w-48 h-48 rounded-full border border-border-strong flex items-center justify-center bg-background">
              <ShieldCheck className="w-20 h-20 text-accent stroke-[1.25]" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 15: Bottom Incident Report Block */}
      <div className="border-t border-border pt-12">
        <div className="bg-surface border border-border rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-sans text-lg font-semibold text-text-primary mb-1">
                Потрібна допомога?
              </h3>
              <p className="text-sm text-text-secondary">
                Звернися до бару або охорони. Анонімно повідомити про проблему:
              </p>
            </div>
          </div>

          <button
            onClick={openReportModal}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-sans text-xs font-semibold rounded-md transition-colors cursor-pointer shrink-0"
          >
            Повідомити
          </button>
        </div>
      </div>
    </div>
  );
}
