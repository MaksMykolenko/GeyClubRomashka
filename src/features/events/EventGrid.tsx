'use client';

import React from 'react';
import { EventItem } from '@/types';
import { EventRow } from './EventRow';
import { EmptyState } from '@/components/common/EmptyState';

interface EventGridProps {
  events: EventItem[];
  onBuyTicket: (event: EventItem) => void;
}

export const EventGrid: React.FC<EventGridProps> = ({ events, onBuyTicket }) => {
  if (events.length === 0) {
    return <EmptyState message="За вашим запитом подій не знайдено." />;
  }

  return (
    <div className="flex flex-col border-t border-border mt-4">
      {events.map((event) => (
        <EventRow key={event.id} event={event} onBuyTicket={onBuyTicket} />
      ))}
    </div>
  );
};
