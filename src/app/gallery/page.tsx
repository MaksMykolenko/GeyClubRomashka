'use client';

import React from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { galleryItems } from '@/content/gallery.data';
import { GalleryGrid } from '@/features/gallery/GalleryGrid';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-display font-semibold mx-auto">
          <Camera className="w-4 h-4" /> <span>{t('gallery.title')}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          Нічне життя у знімках
        </h1>
        <p className="text-sm text-club-subtext leading-relaxed">
          {t('gallery.subtitle')}
        </p>
      </div>

      {/* Gallery Editorial Component */}
      <GalleryGrid items={galleryItems} />
    </div>
  );
}
