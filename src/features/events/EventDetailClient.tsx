'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { sampleEvents } from '@/content/events.data';
import { TicketButton } from '@/components/ui/TicketButton';
import { NeonBadge } from '@/components/ui/NeonBadge';
import { EventCard } from '@/features/events/EventCard';
import { getAssetPath } from '@/lib/utils';
import {
  Calendar,
  Clock,
  Music,
  Users,
  MapPin,
  ShieldCheck,
  RotateCcw,
  Share2,
  Check,
  ArrowLeft,
} from 'lucide-react';

interface EventDetailClientProps {
  eventId: string;
}

export const EventDetailClient: React.FC<EventDetailClientProps> = ({ eventId }) => {
  const { t } = useI18n();
  const { openTicketModal } = useModals();
  const [copied, setCopied] = useState(false);

  const event = sampleEvents.find((e) => e.id === eventId) || sampleEvents[0];

  const recommended = sampleEvents
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-12">
      <Link
        href="/events"
        className="inline-flex items-center gap-2 text-xs font-display font-semibold text-club-subtext hover:text-neon-pink transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4 text-neon-pink" />
        <span>{t('eventDetail.backToEvents')}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-neon-pink/30 shadow-neon bg-dark-surface">
          <Image
            src={getAssetPath(event.posterUrl)}
            alt={event.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <NeonBadge status={event.status} size="md" />
            <span className="px-3 py-1 text-xs font-display font-bold text-white bg-dark/80 backdrop-blur-md border border-white/20 rounded-full">
              {event.ageLimit}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-display font-semibold text-neon-pink">
              <Music className="w-4 h-4" />
              <span>{event.musicGenre}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
              {event.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-dark-surface border border-dark-border rounded-2xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-neon-pink shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-display text-club-muted block">
                    Дата
                  </span>
                  <span className="font-display text-xs font-bold text-white">
                    {event.displayDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-neon-purple shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-display text-club-muted block">
                    Час
                  </span>
                  <span className="font-display text-xs font-bold text-white">
                    {event.time}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-neon-blue shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-display text-club-muted block">
                    Локація
                  </span>
                  <span className="font-display text-xs font-bold text-white truncate max-w-[120px]">
                    {event.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-club-subtext leading-relaxed font-sans">
              {event.description}
            </p>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-yellow" />
                <span>{t('eventDetail.lineup')}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.artists.map((artist) => (
                  <span
                    key={artist}
                    className="px-3.5 py-1.5 bg-dark border border-neon-pink/30 rounded-xl text-xs font-display text-white"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-neon-pink/15 to-neon-purple/15 border border-neon-pink/40 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div>
              <span className="text-[10px] uppercase font-display text-club-muted block">
                Вартість входу
              </span>
              <span className="font-display text-3xl font-black text-white">
                {event.priceFrom} {event.currency}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleShare}
                className="p-3 bg-dark border border-dark-border text-club-subtext hover:text-white rounded-2xl cursor-pointer transition-colors"
                title={t('eventDetail.shareEvent')}
              >
                {copied ? <Check className="w-5 h-5 text-neon-pink" /> : <Share2 className="w-5 h-5" />}
              </button>

              <TicketButton
                size="lg"
                disabled={event.status === 'sold_out'}
                onClick={() => openTicketModal(event)}
                className="flex-1 sm:flex-none"
              >
                {t('eventDetail.buyTicketBtn')}
              </TicketButton>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-neon-pink" />
            <span>{t('eventDetail.schedule')}</span>
          </h3>

          <div className="flex flex-col gap-3 pt-2">
            {event.timetable.map((slot, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-dark border border-dark-border rounded-2xl flex items-center justify-between gap-4"
              >
                <span className="font-display text-xs font-bold text-neon-pink shrink-0">
                  {slot.time}
                </span>
                <div className="text-right">
                  <span className="font-display text-xs font-semibold text-white block">
                    {slot.activity}
                  </span>
                  {slot.artist && (
                    <span className="text-[11px] text-club-muted">{slot.artist}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neon-purple" />
              <span>{t('eventDetail.entryRules')}</span>
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-club-subtext">
              {event.entryRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neon-pink font-bold">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-dark-border flex flex-col gap-2">
            <h4 className="font-display text-xs font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-neon-blue" />
              <span>{t('eventDetail.refundPolicy')}</span>
            </h4>
            <p className="text-xs text-club-muted leading-relaxed">
              {event.refundPolicy}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-6 border-t border-dark-border">
        <h3 className="font-display text-2xl font-bold text-white">
          {t('eventDetail.recommendedTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommended.map((rec) => (
            <EventCard
              key={rec.id}
              event={rec}
              onBuyTicket={(e) => openTicketModal(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
