'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EventItem } from '@/types';
import { useI18n } from '@/i18n/i18n-context';
import { getAssetPath } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface EventRowProps {
  event: EventItem;
  onBuyTicket: (event: EventItem) => void;
}

export const EventRow: React.FC<EventRowProps> = ({ event, onBuyTicket }) => {
  const { t } = useI18n();

  return (
    <div className="group border-b border-border py-5 px-2 hover:bg-surface-hover transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1">
        {/* Poster Thumbnail */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-surface shrink-0 border border-border">
          <Image
            src={getAssetPath(event.posterUrl)}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="80px"
          />
        </div>

        {/* Date & Time Column */}
        <div className="flex flex-col text-xs font-sans font-semibold text-text-secondary uppercase shrink-0 min-w-[100px]">
          <span className="text-text-primary text-base font-bold tracking-tight">
            {event.displayDate}
          </span>
          <span className="text-text-muted mt-0.5">{event.time}</span>
        </div>

        {/* Title & Lineup Info */}
        <div className="flex flex-col gap-1 min-w-0 pr-2">
          <h3 className="font-display text-base font-bold text-text-primary group-hover:text-accent transition-colors truncate">
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </h3>
          <p className="text-xs text-text-muted truncate">
            {event.artists.join(', ')}
          </p>
          <span className="text-[11px] text-text-secondary uppercase tracking-wider">
            {event.musicGenre}
          </span>
        </div>
      </div>

      {/* Price & Action Button */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
        <div className="flex flex-col sm:items-end text-xs">
          <span className="font-display font-bold text-text-primary text-sm">
            від {event.priceFrom} {event.currency}
          </span>
          <span className="text-[11px] text-success font-medium">
            {event.status === 'sold_out' ? 'Продано' : 'Є квитки'}
          </span>
        </div>

        <button
          onClick={() => onBuyTicket(event)}
          className="p-2.5 rounded-full border border-border-strong hover:border-accent text-text-primary hover:text-accent transition-colors cursor-pointer"
          aria-label={`Придбати квиток на ${event.title}`}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
