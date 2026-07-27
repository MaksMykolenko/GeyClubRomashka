'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { sampleEvents } from '@/content/events.data';
import { EventCategory } from '@/types';
import { EventGrid } from '@/features/events/EventGrid';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  const { t } = useI18n();
  const { openTicketModal } = useModals();
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');

  const filteredEvents =
    activeCategory === 'all'
      ? sampleEvents
      : sampleEvents.filter((e) => e.category === activeCategory);

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'all', label: 'Усі' },
    { id: 'special', label: 'Скоро' },
    { id: 'parties', label: 'Вечірки' },
    { id: 'live', label: 'DJ-сети' },
    { id: 'special', label: 'Спеціальні події' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <h1 className="font-sans text-4xl font-light text-text-primary">
          Події
        </h1>

        <div className="flex items-center gap-2 text-xs font-sans text-text-secondary border border-border-strong px-4 py-2 rounded-md">
          <Calendar className="w-4 h-4 text-accent" />
          <span>Календар ночей</span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id + cat.label}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-md text-xs font-sans font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-accent text-white'
                : 'bg-surface border border-border text-text-secondary hover:text-text-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Events Horizontal List */}
      <EventGrid
        events={filteredEvents}
        onBuyTicket={(event) => openTicketModal(event)}
      />
    </div>
  );
}
