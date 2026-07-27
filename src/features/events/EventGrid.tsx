'use client';

import React from 'react';
import { EventItem } from '@/types';
import { EventCard } from './EventCard';
import { EmptyState } from '@/components/common/EmptyState';

interface EventGridProps {
  events: EventItem[];
  onBuyTicket: (event: EventItem) => void;
}

export const EventGrid: React.FC<EventGridProps> = ({ events, onBuyTicket }) => {
  if (events.length === 0) {
    return <EmptyState title="Подій не знайдено" description="Спробуйте обрати іншу категорію у фільтрах." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onBuyTicket={onBuyTicket} />
      ))}
    </div>
  );
};
