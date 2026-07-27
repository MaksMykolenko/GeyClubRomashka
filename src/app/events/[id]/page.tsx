import React from 'react';
import { sampleEvents } from '@/content/events.data';
import { EventDetailClient } from '@/features/events/EventDetailClient';

export function generateStaticParams() {
  return sampleEvents.map((event) => ({
    id: event.id,
  }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return <EventDetailClient eventId={params.id} />;
}
