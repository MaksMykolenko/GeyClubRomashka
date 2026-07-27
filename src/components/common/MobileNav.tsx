'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';
import { X, ShieldCheck } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { clubConfig } from '@/config/club.config';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks?: { href: string; label: string }[];
  onBuyTicket: () => void;
  onOpenTicketModal?: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks = [
    { href: '/events', label: 'Події' },
    { href: '/about', label: 'Про клуб' },
    { href: '/gallery', label: 'Галерея' },
    { href: '/visit', label: 'Відвідування' },
    { href: '/safety', label: 'Безпека' },
  ],
  onBuyTicket,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background-deep flex flex-col justify-between p-6 md:hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
          <MinimalDaisyMark className="w-6 h-6 text-white" />
          <span className="font-display text-lg font-bold tracking-widest text-text-primary uppercase">
            РОМАШКА
          </span>
        </Link>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full text-text-secondary hover:text-text-primary bg-surface border border-border cursor-pointer"
          aria-label="Закрити меню (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 py-8 overflow-y-auto" aria-label="Мобільне меню">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-sans text-2xl font-light text-text-primary hover:text-accent transition-colors flex items-center justify-between"
          >
            <span>{link.label}</span>
            <span className="text-text-muted text-lg">→</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Action Area */}
      <div className="flex flex-col gap-5 border-t border-border pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans text-text-muted flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent" /> 18+ Safe Space
          </span>
          <LanguageSwitcher />
        </div>

        <button
          onClick={() => {
            onClose();
            onBuyTicket();
          }}
          className="w-full py-4 bg-accent hover:bg-accent-hover text-white text-sm font-sans font-semibold rounded-md transition-colors cursor-pointer text-center"
        >
          Купити квиток
        </button>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-2 text-xs font-sans text-text-muted">
          <a
            href={clubConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href={clubConfig.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Telegram
          </a>
          <a
            href={clubConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
};
