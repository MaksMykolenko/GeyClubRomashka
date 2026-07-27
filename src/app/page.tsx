'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { sampleEvents } from '@/content/events.data';
import { AfterDawnSection } from '@/features/campaign/AfterDawnSection';
import { getAssetPath } from '@/lib/utils';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const { t } = useI18n();
  const { openTicketModal } = useModals();

  const nextEvent = sampleEvents[0];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-8">
      {/* SECTION 9: HERO SECTION - Asymmetric 2-column layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Minimal Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-text-primary leading-[1.05]">
                Музика.
              </h1>
              <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-text-primary leading-[1.05]">
                Свобода.
              </h1>
              <h1 className="font-sans text-5xl sm:text-7xl font-extralight tracking-tight text-text-primary leading-[1.05]">
                Любов.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed font-sans mt-2">
              Ромашка — твій простір для танців, людей і моментів, що залишаються з тобою.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button
                onClick={() => openTicketModal(nextEvent)}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-semibold rounded-md transition-colors cursor-pointer text-center"
              >
                Купити квиток
              </button>

              <Link
                href="/events"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-border-strong hover:border-text-primary text-text-primary font-sans text-sm font-semibold rounded-md transition-colors text-center"
              >
                Найближчі події
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Club Dancefloor Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] rounded-lg overflow-hidden border border-border bg-surface">
            <Image
              src={getAssetPath('/images/hero-poster.png')}
              alt="Афіша та сценічна атмосфера клубу Ромашка"
              fill
              priority
              className="object-cover object-center filter contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: НАЙБЛИЖЧА ПОДІЯ (Compact Horizontal Row Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="border border-border rounded-lg p-6 bg-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 flex-1 min-w-0">
            <span className="text-xs font-sans uppercase tracking-widest text-accent font-bold shrink-0">
              НАЙБЛИЖЧА ПОДІЯ
            </span>

            <div className="flex items-center gap-4">
              <div className="text-center shrink-0 border-r border-border pr-4">
                <span className="font-display text-2xl font-bold text-text-primary block leading-none">
                  24
                </span>
                <span className="text-[11px] font-sans uppercase text-text-muted">
                  ТРАВНЯ
                </span>
                <span className="text-[10px] font-sans text-accent block">
                  ПТ 23:00
                </span>
              </div>

              <div className="relative w-14 h-14 rounded overflow-hidden bg-background shrink-0 border border-border">
                <Image
                  src={getAssetPath(nextEvent.posterUrl)}
                  alt={nextEvent.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="font-display text-lg font-bold text-text-primary truncate">
                  <Link href={`/events/${nextEvent.id}`}>{nextEvent.title}</Link>
                </h3>
                <p className="text-xs text-text-muted truncate">
                  {nextEvent.artists.join(', ')}
                </p>
                <span className="text-[11px] text-text-secondary">
                  {nextEvent.musicGenre}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto shrink-0 border-t md:border-t-0 border-border pt-4 md:pt-0">
            <span className="font-sans text-sm font-bold text-text-primary">
              від {nextEvent.priceFrom} {nextEvent.currency}
            </span>

            <button
              onClick={() => openTicketModal(nextEvent)}
              className="p-3 rounded-full border border-border-strong hover:border-accent text-text-primary hover:text-accent transition-colors cursor-pointer"
              aria-label="Переглянути деталі"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* EDITORIAL CAMPAIGN SECTION «Після світанку» */}
      <AfterDawnSection />

      {/* SECTION 12: ABOUT SUMMARY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-border pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-text-primary">
              Ромашка — це не просто клуб.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed font-sans max-w-xl">
              Це простір свободи, музики та людей, які живуть моментом. Ми об’єднуємо людей через музику, мистецтво та танець. Тут немає місця для упереджень — тільки ти, твої люди та відчуття, що тебе розуміють.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-accent hover:underline"
              >
                <span>Більше про клуб</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-surface">
            <Image
              src={getAssetPath('/images/campaign/romashka-after-dawn-01.png')}
              alt="Клубна культура та атмосфера"
              fill
              className="object-cover object-[center_65%] filter grayscale contrast-125"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
