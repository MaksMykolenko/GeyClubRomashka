'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from './ModalContext';
import { Menu, Shield } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TicketButton } from '../ui/TicketButton';
import { DaisyIcon } from '../ui/DaisyIcon';
import { MobileNav } from './MobileNav';
import { clubConfig } from '@/config/club.config';

export const Header: React.FC = () => {
  const { t } = useI18n();
  const { openTicketModal } = useModals();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/events', label: t('nav.events') },
    { href: '/about', label: t('nav.about') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/visit', label: t('nav.visit') },
    { href: '/safety', label: t('nav.safety') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark/95 backdrop-blur-md py-3.5 border-b border-neon-pink/20 shadow-xl'
            : 'bg-gradient-to-b from-dark/95 via-dark/50 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-8">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0 mr-4 lg:mr-10">
            <div className="relative flex items-center justify-center">
              <DaisyIcon className="w-8 h-8 sm:w-9 sm:h-9 text-neon-pink group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-neon-pink/30 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-2xl font-black tracking-widest text-white group-hover:text-neon-pink transition-colors text-glow-pink">
                РОМАШКА
              </span>
              <span className="text-[10px] font-display uppercase tracking-[0.25em] text-neon-pink/90 font-semibold">
                {clubConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Spacious Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-xs lg:text-sm font-medium tracking-widest uppercase transition-colors relative py-1.5 whitespace-nowrap ${
                    isActive ? 'text-neon-pink font-bold' : 'text-club-subtext hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Compact navigation fallback for medium screens (md to xl) */}
          <nav className="hidden md:flex xl:hidden items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-xs font-medium tracking-wider uppercase transition-colors relative py-1 whitespace-nowrap ${
                    isActive ? 'text-neon-pink font-semibold' : 'text-club-subtext hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons (18+ badge, Language Switcher, Ticket CTA) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6 shrink-0 ml-auto lg:ml-6">
            <span className="text-[10px] font-display uppercase px-2.5 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple flex items-center gap-1.5 shrink-0">
              <Shield className="w-3.5 h-3.5 text-neon-pink" /> 18+
            </span>
            <LanguageSwitcher />
            <TicketButton size="sm" onClick={() => openTicketModal()} className="shadow-neon">
              {t('nav.buyTicket')}
            </TicketButton>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3.5 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-club-subtext hover:text-white cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-neon-pink" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenTicketModal={() => openTicketModal()}
      />
    </>
  );
};
