'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { X, ShieldCheck } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TicketButton } from '../ui/TicketButton';
import { DaisyIcon } from '../ui/DaisyIcon';
import { clubConfig } from '@/config/club.config';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTicketModal: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  onOpenTicketModal,
}) => {
  const { t } = useI18n();

  if (!isOpen) return null;

  const navLinks = [
    { href: '/events', label: t('nav.events') },
    { href: '/about', label: t('nav.about') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/visit', label: t('nav.visit') },
    { href: '/safety', label: t('nav.safety') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-neon-pink/20 pb-4">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <DaisyIcon className="w-8 h-8 text-neon-pink animate-daisy-spin" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-widest text-white text-glow-pink">
              РОМАШКА
            </span>
            <span className="text-[10px] font-display uppercase tracking-wider text-neon-pink">
              {clubConfig.tagline}
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-full text-club-subtext hover:text-white bg-dark-surface border border-dark-border cursor-pointer"
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-5 py-8 overflow-y-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-display text-xl font-semibold text-club-text hover:text-neon-pink transition-colors tracking-wide flex items-center justify-between"
          >
            <span>{link.label}</span>
            <span className="text-neon-pink text-sm opacity-50">→</span>
          </Link>
        ))}
      </div>

      {/* Bottom Action Area */}
      <div className="flex flex-col gap-4 border-t border-neon-pink/20 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-display text-club-muted flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-neon-pink" /> 18+ Safe Space
          </span>
          <LanguageSwitcher />
        </div>

        <TicketButton
          fullWidth
          size="lg"
          onClick={() => {
            onClose();
            onOpenTicketModal();
          }}
        >
          {t('nav.buyTicket')}
        </TicketButton>
      </div>
    </div>
  );
};
