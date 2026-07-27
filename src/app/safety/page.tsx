'use client';

import React from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { ShieldCheck, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

export default function SafetyPage() {
  const { t } = useI18n();
  const { openReportModal } = useModals();

  const rules = [
    { text: t('safety.rule1'), highlight: true },
    { text: t('safety.rule2'), highlight: false },
    { text: t('safety.rule3'), highlight: true },
    { text: t('safety.rule4'), highlight: true },
    { text: t('safety.rule5'), highlight: false },
    { text: t('safety.rule6'), highlight: false },
    { text: t('safety.rule7'), highlight: false },
    { text: t('safety.rule8'), highlight: true },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-display font-semibold mx-auto">
          <ShieldCheck className="w-4 h-4" /> <span>Safe Space Policy</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          {t('safety.title')}
        </h1>
        <p className="text-sm text-club-subtext leading-relaxed">
          {t('safety.subtitle')}
        </p>
      </div>

      <div className="bg-dark-surface border border-neon-pink/30 rounded-3xl p-8 sm:p-10 shadow-neon flex flex-col gap-6">
        <div className="flex items-center gap-3 pb-4 border-b border-dark-border">
          <Lock className="w-6 h-6 text-neon-pink" />
          <h2 className="font-display text-lg font-bold text-white">
            Правила безпечного простору клубу «Ромашка»
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex items-start gap-3 transition-colors ${
                rule.highlight
                  ? 'bg-neon-pink/10 border-neon-pink/40 text-white'
                  : 'bg-dark border-dark-border text-club-subtext'
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 shrink-0 mt-0.5 ${
                  rule.highlight ? 'text-neon-pink' : 'text-neon-purple'
                }`}
              />
              <span className="text-xs leading-relaxed font-sans">{rule.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/40 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-neon-pink/20 border border-neon-pink flex items-center justify-center text-neon-pink shadow-neon">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white">
          Потрібна допомога чи хочете повідомити про інцидент?
        </h3>
        <p className="text-xs text-club-subtext max-w-lg leading-relaxed">
          Ви можете звернутися до будь-якого працівника барної стійки чи охорони, або надіслати
          анонімне повідомлення через наш безпечний онлайн-сервіс.
        </p>

        <button
          onClick={openReportModal}
          className="mt-2 px-8 py-4 bg-neon-pink hover:bg-neon-purple text-white font-display text-xs font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all cursor-pointer flex items-center gap-2"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{t('safety.reportBtn')}</span>
        </button>
      </div>
    </div>
  );
}
