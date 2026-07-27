'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { clubConfig } from '@/config/club.config';
import { DaisyIcon } from '@/components/ui/DaisyIcon';
import { Heart, ShieldCheck, Sparkles, Users, Music, Compass } from 'lucide-react';

export default function AboutPage() {
  const { t } = useI18n();

  const values = [
    {
      icon: Compass,
      title: t('about.val1Title'),
      desc: t('about.val1Desc'),
      color: 'text-neon-pink border-neon-pink/30',
    },
    {
      icon: Users,
      title: t('about.val2Title'),
      desc: t('about.val2Desc'),
      color: 'text-neon-purple border-neon-purple/30',
    },
    {
      icon: Heart,
      title: t('about.val3Title'),
      desc: t('about.val3Desc'),
      color: 'text-neon-blue border-neon-blue/30',
    },
    {
      icon: ShieldCheck,
      title: t('about.val4Title'),
      desc: t('about.val4Desc'),
      color: 'text-neon-yellow border-neon-yellow/30',
    },
    {
      icon: Sparkles,
      title: t('about.val5Title'),
      desc: t('about.val5Desc'),
      color: 'text-neon-pink border-neon-pink/30',
    },
    {
      icon: Music,
      title: t('about.val6Title'),
      desc: t('about.val6Desc'),
      color: 'text-neon-purple border-neon-purple/30',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
        <DaisyIcon className="w-12 h-12 text-neon-pink animate-daisy-spin" />
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          {t('about.title')}
        </h1>
        <p className="font-display text-lg text-neon-pink font-semibold">
          «{t('about.tagline')}»
        </p>
      </div>

      {/* Story Narrative Box */}
      <div className="bg-dark-surface border border-neon-pink/30 rounded-3xl p-8 sm:p-12 shadow-neon relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center sm:text-left">
          <p className="text-base sm:text-lg text-white leading-relaxed font-sans font-medium">
            «Ромашка» — це нічний простір для музики, танців і свободи бути собою. Ми створюємо
            вечірки без осуду, небажаної агресії та дискримінації. Тут важливі взаємна повага,
            згода і безпека кожного гостя.
          </p>

          <p className="text-sm text-club-subtext leading-relaxed font-sans">
            Ми віримо, що нічний клуб повинен бути місцем віддушини та натхнення. Наш простір
            об’єднує передову електронну музику, візуальне світлове арт-оформлення та щиру
            квір-культуру. Тут кожен відвідувач може вільно розкрити свою індивідуальність,
            знайти нових друзів та відчути радість танцю до світанку.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
            {t('about.valuesTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className={`bg-dark-surface border ${val.color} rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform`}
              >
                <div className="w-12 h-12 rounded-2xl bg-dark flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-club-subtext leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/40 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
        <h3 className="font-display text-2xl font-bold text-white">
          Приєднуйтесь до наших наступних вечірок
        </h3>
        <p className="text-xs text-club-subtext max-w-md">
          Перегляньте актуальний розклад або забронюйте столик для себе та друзів.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/events"
            className="px-6 py-3 bg-neon-pink hover:bg-neon-purple text-white font-display text-xs font-semibold rounded-full transition-colors cursor-pointer"
          >
            {t('nav.events')}
          </Link>
          <Link
            href="/visit"
            className="px-6 py-3 bg-dark border border-dark-border text-club-text hover:text-white font-display text-xs font-semibold rounded-full transition-colors"
          >
            {t('nav.visit')}
          </Link>
        </div>
      </div>
    </div>
  );
}
