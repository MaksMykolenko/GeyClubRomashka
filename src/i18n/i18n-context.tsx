'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types';
import { uk } from './locales/uk';
import { pl } from './locales/pl';
import { en } from './locales/en';

const dictionaries = { uk, pl, en };

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('uk');

  useEffect(() => {
    const saved = localStorage.getItem('romashka_lang') as Language;
    if (saved && ['uk', 'pl', 'en'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('romashka_lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let obj: any = dictionaries[language];
    for (const k of keys) {
      if (obj && k in obj) {
        obj = obj[k];
      } else {
        // Fallback to UK dictionary if key missing in current language
        let fallback: any = dictionaries['uk'];
        for (const fk of keys) {
          if (fallback && fk in fallback) fallback = fallback[fk];
          else return key;
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    return typeof obj === 'string' ? obj : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
