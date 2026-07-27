'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { getAssetPath } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentItem: GalleryItem | null;
  items: GalleryItem[];
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  currentItem,
  items,
  onNavigate,
}) => {
  const currentIndex = currentItem
    ? items.findIndex((i) => i.id === currentItem.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex === -1 || items.length === 0) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === -1 || items.length === 0) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !currentItem) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentItem, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8">
      {/* Top Header Control bar */}
      <div className="flex items-center justify-between z-10 border-b border-neon-pink/20 pb-4">
        <div>
          <h3 className="font-display text-base font-bold text-white">
            {currentItem.title}
          </h3>
          {currentItem.eventName && (
            <span className="text-xs text-neon-pink font-display">
              {currentItem.eventName}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-dark-surface border border-neon-pink/40 text-club-subtext hover:text-white cursor-pointer"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image Container */}
      <div className="relative flex-1 my-4 flex items-center justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-dark/80 border border-neon-pink/40 text-white hover:bg-neon-pink hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={getAssetPath(currentItem.imageUrl)}
            alt={currentItem.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-dark/80 border border-neon-pink/40 text-white hover:bg-neon-pink hover:scale-110 transition-all cursor-pointer"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="flex items-center justify-between text-xs text-club-muted border-t border-neon-pink/20 pt-4 z-10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-neon-purple" /> {currentItem.date}
          </span>
          <span className="flex items-center gap-1.5 uppercase font-display text-neon-pink">
            <Tag className="w-4 h-4" /> {currentItem.category}
          </span>
        </div>
        <span>
          {currentIndex + 1} / {items.length}
        </span>
      </div>
    </div>
  );
};
