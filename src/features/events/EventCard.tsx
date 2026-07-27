'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventItem } from '@/types';
import { useI18n } from '@/i18n/i18n-context';
import { NeonBadge } from '@/components/ui/NeonBadge';
import { TicketButton } from '@/components/ui/TicketButton';
import { Calendar, Clock, Music, Users, ArrowRight } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onBuyTicket: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onBuyTicket }) => {
  const { t } = useI18n();

  return (
    <article className="group bg-dark-surface border border-neon-pink/20 rounded-3xl overflow-hidden hover:border-neon-pink/70 hover:shadow-neon transition-all duration-300 flex flex-col justify-between relative">
      {/* Top Poster Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark">
        <Image
          src={event.posterUrl}
          alt={event.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-black/60" />

        {/* Status Badge & Age limit */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <NeonBadge status={event.status} size="sm" />
          <span className="px-2.5 py-0.5 text-xs font-display font-semibold text-white bg-dark/80 backdrop-blur-md border border-white/20 rounded-full">
            {event.ageLimit}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          {/* Music Genre Pill */}
          <div className="flex items-center gap-1.5 text-xs text-neon-pink font-display font-medium mb-2">
            <Music className="w-3.5 h-3.5" />
            <span className="truncate">{event.musicGenre}</span>
          </div>

          {/* Event Title */}
          <h3 className="font-display text-xl font-bold text-white group-hover:text-neon-pink transition-colors mb-3">
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </h3>

          {/* Date & Time info */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-club-subtext mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neon-purple shrink-0" />
              <span>{event.displayDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neon-blue shrink-0" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* Artists list */}
          <div className="flex items-start gap-1.5 text-xs text-club-muted line-clamp-2">
            <Users className="w-4 h-4 text-neon-yellow shrink-0 mt-0.5" />
            <span>{event.artists.join(' • ')}</span>
          </div>
        </div>

        {/* Price & Action CTA Row */}
        <div className="pt-4 border-t border-dark-border flex items-center justify-between gap-2 mt-2">
          <div>
            <span className="text-[10px] uppercase font-display text-club-muted block">
              {t('events.priceFrom')}
            </span>
            <span className="font-display text-lg font-bold text-white">
              {event.priceFrom} {event.currency}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/events/${event.id}`}
              className="p-2.5 rounded-full bg-dark border border-dark-border text-club-subtext hover:text-white hover:border-neon-pink transition-colors"
              title={t('events.details')}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>

            <TicketButton
              size="sm"
              disabled={event.status === 'sold_out'}
              onClick={() => onBuyTicket(event)}
            >
              {t('events.buyTicket')}
            </TicketButton>
          </div>
        </div>
      </div>
    </article>
  );
};
