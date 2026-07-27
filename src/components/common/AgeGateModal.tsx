'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { DaisyIcon } from '../ui/DaisyIcon';
import { ShieldCheck, LogOut } from 'lucide-react';
import { clubConfig } from '@/config/club.config';

export const AgeGateModal: React.FC = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('romashka_age_verified');
    if (!isVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('romashka_age_verified', 'true');
    setIsVisible(false);
  };

  const handleExit = () => {
    window.location.href = 'https://google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-dark-surface border border-neon-pink/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-neon text-center relative overflow-hidden">
        {/* Glow ambient background effect */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-dark border border-neon-pink/50 flex items-center justify-center mb-6 shadow-neon">
            <DaisyIcon className="w-10 h-10 text-neon-pink animate-daisy-spin" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-display font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" /> 18+ AGE VERIFICATION
          </div>

          <h2 className="font-display text-2xl font-black text-white tracking-wide mb-3">
            {t('ageGate.title')}
          </h2>

          <p className="text-sm text-club-subtext leading-relaxed mb-8">
            {t('ageGate.text')}
          </p>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={handleConfirm}
              className="w-full py-4 px-6 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-sm font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple hover:scale-[1.02] transition-all cursor-pointer"
            >
              {t('ageGate.confirmBtn')}
            </button>

            <button
              onClick={handleExit}
              className="w-full py-3 px-6 bg-dark border border-dark-border text-club-muted hover:text-white font-display text-xs font-medium rounded-2xl flex items-center justify-center gap-2 hover:bg-dark-card transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>{t('ageGate.exitBtn')}</span>
            </button>
          </div>

          <p className="text-[10px] text-club-muted mt-6 uppercase tracking-widest font-display">
            {clubConfig.slogan}
          </p>
        </div>
      </div>
    </div>
  );
};
