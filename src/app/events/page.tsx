'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { useModals } from '@/components/common/ModalContext';
import { sampleEvents } from '@/content/events.data';
import { EventCategory } from '@/types';
import { EventFilters } from '@/features/events/EventFilters';
import { EventGrid } from '@/features/events/EventGrid';
import { Search, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const { t } = useI18n();
  const { openTicketModal } = useModals();
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = sampleEvents.filter((evt) => {
    const matchesCategory =
      activeCategory === 'all' ? true : evt.category === activeCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.musicGenre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.artists.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-display font-semibold mx-auto">
          <Sparkles className="w-4 h-4" /> <span>{t('events.title')}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          Афіша вечірок та подій
        </h1>
        <p className="text-sm text-club-subtext leading-relaxed">
          {t('events.subtitle')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-dark-surface border border-neon-pink/20 p-4 rounded-3xl">
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-club-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Пошук вечірки або DJ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark border border-dark-border rounded-full text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink"
          />
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
    </div>
  );
}
