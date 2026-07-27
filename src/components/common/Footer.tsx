'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from './ModalContext';
import { clubConfig } from '@/config/club.config';
import { DaisyIcon } from '../ui/DaisyIcon';
import { ShieldCheck, Instagram, Send, Facebook, CheckCircle2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const { openReportModal } = useModals();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-dark-surface border-t border-neon-pink/20 pt-16 pb-12 text-club-subtext relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-dark-border">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <DaisyIcon className="w-9 h-9 text-neon-pink group-hover:rotate-45 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold tracking-widest text-white text-glow-pink">
                  {clubConfig.name}
                </span>
                <span className="text-xs font-display uppercase tracking-widest text-neon-pink">
                  {clubConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-club-muted max-w-sm leading-relaxed">
              {clubConfig.slogan} — {t('hero.subtext')}
            </p>

            <div className="flex items-center gap-2 text-xs font-display text-neon-pink bg-neon-pink/10 border border-neon-pink/30 px-3 py-1.5 rounded-full w-fit mt-2">
              <ShieldCheck className="w-4 h-4" /> 18+ Safe Space Environment
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={clubConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark border border-neon-pink/30 text-club-subtext hover:text-neon-pink hover:border-neon-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={clubConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark border border-neon-pink/30 text-club-subtext hover:text-neon-pink hover:border-neon-pink transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={clubConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark border border-neon-pink/30 text-club-subtext hover:text-neon-pink hover:border-neon-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Навігація
            </h3>
            <Link href="/events" className="text-sm hover:text-neon-pink transition-colors">
              {t('nav.events')}
            </Link>
            <Link href="/about" className="text-sm hover:text-neon-pink transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/gallery" className="text-sm hover:text-neon-pink transition-colors">
              {t('nav.gallery')}
            </Link>
            <Link href="/visit" className="text-sm hover:text-neon-pink transition-colors">
              {t('nav.visit')}
            </Link>
            <Link href="/contacts" className="text-sm hover:text-neon-pink transition-colors">
              {t('nav.contacts')}
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Безпека
            </h3>
            <Link href="/safety" className="text-sm hover:text-neon-pink transition-colors">
              {t('footer.safeSpace')}
            </Link>
            <button
              onClick={openReportModal}
              className="text-left text-sm text-neon-yellow hover:underline transition-all cursor-pointer font-medium"
            >
              {t('safety.reportBtn')}
            </button>
            <Link href="/privacy" className="text-sm hover:text-neon-pink transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Афіша на email
            </h3>
            <p className="text-xs text-club-muted">
              Отримуйте анонси вечірок та ексклюзивні релізи квитків першими.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-neon-pink/15 border border-neon-pink/40 rounded-xl text-neon-pink text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Ви успішно підписалися!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
                <input
                  type="email"
                  required
                  placeholder="ваш.email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-neon-purple hover:bg-neon-pink text-white font-display text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Підписатися
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-club-muted gap-4">
          <p>© {new Date().getFullYear()} «{clubConfig.name}». {t('footer.rights')}</p>
          <div className="flex items-center gap-1">
            <span>Музика. Свобода. Любов.</span>
            <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" />
          </div>
        </div>
      </div>
    </footer>
  );
};
