'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryItem, GalleryCategory } from '@/types';
import { useI18n } from '@/i18n/i18n-context';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: t('gallery.filterAll') },
    { id: 'campaign', label: 'Промокампанія “Ромашки”' },
    { id: 'parties', label: t('gallery.filterParties') },
    { id: 'shows', label: t('gallery.filterShows') },
    { id: 'atmosphere', label: t('gallery.filterAtmosphere') },
    { id: 'interior', label: t('gallery.filterInterior') },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Category filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-neon'
                : 'bg-dark-surface border border-dark-border text-club-subtext hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isCampaign = item.category === ('campaign' as any);
          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative ${
                isCampaign ? 'aspect-[3/4]' : 'aspect-[4/3]'
              } rounded-3xl overflow-hidden bg-dark-surface border border-neon-pink/20 cursor-pointer hover:border-neon-pink/70 hover:shadow-neon transition-all duration-300`}
            >
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                loading="lazy"
                className={`object-cover ${
                  isCampaign ? 'object-[center_65%]' : 'object-center'
                } group-hover:scale-105 transition-transform duration-500`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-display uppercase tracking-widest text-neon-pink">
                  {item.category === ('campaign' as any) ? 'Промокампанія' : item.category}
                </span>
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-club-muted mt-2 pt-2 border-t border-white/10">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1 text-neon-pink font-display font-medium">
                    <Maximize2 className="w-3.5 h-3.5" /> Перегляд
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeItem}
        onClose={() => setActiveItem(null)}
        currentItem={activeItem}
        items={filteredItems}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </div>
  );
};
