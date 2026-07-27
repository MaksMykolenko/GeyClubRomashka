'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { clubConfig } from '@/config/club.config';
import { sampleEvents } from '@/content/events.data';
import { EventCategory } from '@/types';
import { TicketButton } from '@/components/ui/TicketButton';
import { DaisyIcon } from '@/components/ui/DaisyIcon';
import { EventFilters } from '@/features/events/EventFilters';
import { EventGrid } from '@/features/events/EventGrid';
import { AfterDawnSection } from '@/features/campaign/AfterDawnSection';
import { BookingForm } from '@/features/booking/BookingForm';
import { getAssetPath } from '@/lib/utils';
import {
  Sparkles,
  ShieldCheck,
  Calendar,
  Clock,
  Heart,
  ChevronRight,
  ShieldAlert,
  ArrowDown,
} from 'lucide-react';

export default function HomePage() {
  const { t } = useI18n();
  const { openTicketModal, openReportModal } = useModals();
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');

  const featuredEvent = sampleEvents[0];

  const filteredEvents =
    activeCategory === 'all'
      ? sampleEvents
      : sampleEvents.filter((e) => e.category === activeCategory);

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath('/images/hero-poster.png')}
            alt="Афіша гей-клубу Ромашка"
            fill
            priority
            className="object-cover object-center opacity-40 scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-pink/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1 bg-neon-pink/20 border border-neon-pink/50 rounded-full text-neon-pink font-display text-xs font-bold uppercase tracking-widest shadow-neon">
              {t('hero.nextEventBadge')}: {featuredEvent.displayDate}
            </span>
            <span className="px-3.5 py-1 bg-dark/80 border border-white/20 rounded-full text-white font-display text-xs font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neon-pink" /> {clubConfig.ageLimit}
            </span>
          </div>

          <div className="relative">
            <DaisyIcon className="w-16 h-16 text-neon-pink animate-daisy-spin filter drop-shadow-[0_0_20px_rgba(255,42,166,0.8)]" />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-widest text-glow-pink">
              РОМАШКА
            </h1>
            <span className="font-display text-sm sm:text-lg uppercase tracking-[0.3em] text-neon-pink font-semibold mt-1">
              {t('hero.tagline')}
            </span>
          </div>

          <p className="font-display text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-pink to-neon-purple tracking-wide">
            «{t('hero.slogan')}»
          </p>

          <p className="text-sm sm:text-base text-club-subtext max-w-xl leading-relaxed font-sans">
            {t('hero.subtext')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <TicketButton
              size="lg"
              onClick={() => openTicketModal(featuredEvent)}
              className="w-full sm:w-auto"
            >
              {t('hero.buyTicket')}
            </TicketButton>

            <Link
              href="#events"
              className="w-full sm:w-auto px-8 py-4 bg-dark-surface/90 border border-dark-border hover:border-neon-pink text-club-text hover:text-white font-display text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero.viewEvents')}</span>
              <ArrowDown className="w-4 h-4 text-neon-pink" />
            </Link>
          </div>

          <div className="mt-8 p-4 sm:p-5 bg-dark-surface/90 border border-neon-pink/30 rounded-3xl max-w-md w-full shadow-neon backdrop-blur-md flex items-center justify-between text-left">
            <div className="flex flex-col">
              <span className="text-[10px] font-display uppercase tracking-widest text-neon-pink">
                Головна вечірка п’ятниці
              </span>
              <span className="font-display text-base font-bold text-white">
                {featuredEvent.title}
              </span>
              <div className="flex items-center gap-3 text-xs text-club-subtext mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neon-purple" /> {featuredEvent.displayDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neon-blue" /> {featuredEvent.time}
                </span>
              </div>
            </div>

            <button
              onClick={() => openTicketModal(featuredEvent)}
              className="px-4 py-2 bg-neon-pink hover:bg-neon-purple text-white text-xs font-display font-semibold rounded-xl transition-colors shrink-0 cursor-pointer"
            >
              {featuredEvent.priceFrom} {featuredEvent.currency}
            </button>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-neon-pink mb-1">
              <Sparkles className="w-4 h-4" /> <span>{t('events.title')}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              Нічна програма клубу
            </h2>
          </div>

          <EventFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <EventGrid
          events={filteredEvents}
          onBuyTicket={(evt) => openTicketModal(evt)}
        />

        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-dark-surface border border-neon-pink/30 hover:border-neon-pink text-white font-display text-xs font-semibold rounded-full transition-all cursor-pointer"
          >
            <span>Переглянути всі події</span>
            <ChevronRight className="w-4 h-4 text-neon-pink" />
          </Link>
        </div>
      </section>

      {/* CAMPAIGN SECTION «Після світанку» */}
      <AfterDawnSection />

      {/* ABOUT & VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-br from-dark-surface via-dark-card to-dark border border-neon-pink/30 rounded-3xl p-8 sm:p-12 shadow-neon relative overflow-hidden">
          <div className="max-w-3xl flex flex-col gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/20 border border-neon-purple/40 rounded-full text-neon-purple text-xs font-display font-semibold w-fit">
              <Heart className="w-3.5 h-3.5" /> <span>{t('about.title')}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
              {t('about.tagline')}
            </h2>

            <p className="text-sm sm:text-base text-club-subtext leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-dark-border">
              <div className="p-4 bg-dark/60 rounded-2xl border border-neon-pink/20">
                <h4 className="font-display text-xs font-bold text-neon-pink mb-1">
                  {t('about.val1Title')}
                </h4>
                <p className="text-xs text-club-muted">{t('about.val1Desc')}</p>
              </div>

              <div className="p-4 bg-dark/60 rounded-2xl border border-neon-purple/20">
                <h4 className="font-display text-xs font-bold text-neon-purple mb-1">
                  {t('about.val2Title')}
                </h4>
                <p className="text-xs text-club-muted">{t('about.val2Desc')}</p>
              </div>

              <div className="p-4 bg-dark/60 rounded-2xl border border-neon-blue/20">
                <h4 className="font-display text-xs font-bold text-neon-blue mb-1">
                  {t('about.val3Title')}
                </h4>
                <p className="text-xs text-club-muted">{t('about.val3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFE SPACE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-neon-pink/10 border border-neon-pink/40 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neon-pink/20 border border-neon-pink rounded-2xl text-neon-pink shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {t('safety.title')}
              </h3>
              <p className="text-xs text-club-subtext max-w-xl leading-relaxed">
                У клубі діє суворе правило згоди, поваги до особистих меж та нульова толерантність
                до дискримінації. Фотозйомка без згоди заборонена.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link
              href="/safety"
              className="flex-1 md:flex-none px-6 py-3 bg-dark border border-dark-border text-white text-xs font-display font-semibold rounded-2xl text-center hover:border-neon-pink transition-colors"
            >
              Правила Safe Space
            </Link>

            <button
              onClick={openReportModal}
              className="flex-1 md:flex-none px-6 py-3 bg-neon-pink hover:bg-neon-purple text-white text-xs font-display font-semibold rounded-2xl transition-colors cursor-pointer text-center"
            >
              {t('safety.reportBtn')}
            </button>
          </div>
        </div>
      </section>

      {/* GUEST LIST & TABLE BOOKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <BookingForm />
      </section>
    </div>
  );
}
