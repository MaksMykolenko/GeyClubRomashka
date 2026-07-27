'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { Language } from '@/types';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uk', label: 'UA', flag: '🇺🇦' },
    { code: 'pl', label: 'PL', flag: '🇵🇱' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-medium text-club-subtext hover:text-white bg-dark-surface/80 border border-dark-border rounded-full transition-colors cursor-pointer"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-neon-pink" />
        <span>{currentLangObj.flag} {currentLangObj.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-dark-surface border border-neon-pink/30 rounded-xl shadow-neon p-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                language === lang.code
                  ? 'bg-neon-pink/20 text-neon-pink font-semibold'
                  : 'text-club-subtext hover:text-white hover:bg-dark-card'
              }`}
            >
              <span>{lang.flag} {lang.label}</span>
              {language === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
