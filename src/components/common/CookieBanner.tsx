'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('romashka_cookies_accepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('romashka_cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-40 bg-dark-surface/95 border border-neon-pink/30 rounded-2xl p-4 shadow-neon backdrop-blur-md flex items-center gap-4">
      <Cookie className="w-8 h-8 text-neon-pink shrink-0" />
      <div className="flex-1 text-xs text-club-subtext leading-relaxed">
        Ми використовуємо файли cookie для покращення вашого досвіду.{' '}
        <Link href="/privacy" className="text-neon-pink underline hover:text-white">
          {t('footer.privacy')}
        </Link>
      </div>
      <button
        onClick={handleAccept}
        className="px-4 py-2 bg-neon-pink text-white font-display text-xs font-semibold rounded-xl hover:bg-neon-purple transition-colors cursor-pointer shrink-0"
      >
        Прийняти
      </button>
      <button
        onClick={handleAccept}
        className="p-1 text-club-muted hover:text-white shrink-0 cursor-pointer"
        aria-label="Close cookies notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
