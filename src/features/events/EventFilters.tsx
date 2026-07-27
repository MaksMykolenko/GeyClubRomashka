'use client';

import React from 'react';
import { EventCategory } from '@/types';
import { useI18n } from '@/i18n/i18n-context';

interface EventFiltersProps {
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
}

export const EventFilters: React.FC<EventFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const { t } = useI18n();

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'all', label: t('events.filterAll') },
    { id: 'parties', label: t('events.filterParties') },
    { id: 'live', label: t('events.filterLive') },
    { id: 'drag', label: t('events.filterDrag') },
    { id: 'special', label: t('events.filterSpecial') },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeCategory === cat.id
              ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-neon scale-[1.02]'
              : 'bg-dark-surface/80 border border-dark-border text-club-subtext hover:text-white hover:border-neon-pink/40'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};
