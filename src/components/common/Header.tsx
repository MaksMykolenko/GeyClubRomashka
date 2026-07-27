'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { t } = useI18n();
  const { openTicketModal } = useModals();
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
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[72px] transition-colors duration-300 border-b border-border ${
          isScrolled ? 'bg-background-deep/95 backdrop-blur-md' : 'bg-background'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Головна сторінка клубу Ромашка"
          >
            <MinimalDaisyMark className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
            <span className="font-display text-lg font-bold tracking-widest text-text-primary uppercase">
              РОМАШКА
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Основне меню">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans font-medium transition-colors relative py-1 ${
                    isActive ? 'text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />

            <button
              onClick={() => openTicketModal()}
              className="px-5 py-2 border border-border-strong hover:border-accent text-text-primary hover:text-white text-xs font-sans font-semibold rounded-md transition-all cursor-pointer"
            >
              {t('nav.tickets')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
              aria-label="Відкрити меню"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onBuyTicket={() => {
          setMobileMenuOpen(false);
          openTicketModal();
        }}
      />
    </>
  );
};
