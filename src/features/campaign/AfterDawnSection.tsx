'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { campaignPhotos, CampaignPhoto } from '@/content/campaign.data';
import { LightboxModal } from '@/features/gallery/LightboxModal';
import { getAssetPath } from '@/lib/utils';
import { Sparkles, ArrowRight, Maximize2, Sun } from 'lucide-react';
import { GalleryItem } from '@/types';

export const AfterDawnSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<CampaignPhoto | null>(null);

  const galleryEquivalent: GalleryItem[] = campaignPhotos.map((photo) => ({
    id: photo.id,
    title: photo.title,
    category: 'campaign' as any,
    imageUrl: photo.src,
    date: 'Промокампанія 2026',
    alt: photo.alt,
    eventName: 'Промокампанія «Ромашки»',
  }));

  const currentGalleryItem: GalleryItem | null = selectedPhoto
    ? {
        id: selectedPhoto.id,
        title: selectedPhoto.title,
        category: 'campaign' as any,
        imageUrl: selectedPhoto.src,
        date: 'Промокампанія 2026',
        alt: selectedPhoto.alt,
        eventName: 'Промокампанія «Ромашки»',
      }
    : null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 bg-neon-pink/15 border border-neon-pink/30 rounded-full text-neon-pink text-xs font-display font-semibold mx-auto">
          <Sun className="w-4 h-4" /> <span>Промокампанія закладу</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white text-glow-pink">
          «Після світанку»
        </h2>
        <p className="font-display text-base sm:text-xl font-bold text-neon-purple tracking-wide">
          «Ніч закінчується. Історії залишаються.»
        </p>
        <p className="text-xs sm:text-sm text-club-subtext leading-relaxed max-w-xl mx-auto font-sans">
          Візуальна серія фотографій про щирі емоції, затишок і тепло після яскравих клубних ночей.
        </p>
      </div>

      {/* Asymmetric Layout with Focal Point Centered on Faces */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Hero Photo (Photo 1) */}
        <div
          onClick={() => setSelectedPhoto(campaignPhotos[0])}
          className="lg:col-span-7 group relative min-h-[480px] sm:min-h-[620px] rounded-3xl overflow-hidden border border-neon-pink/30 shadow-neon bg-dark-surface cursor-pointer hover:border-neon-pink/80 transition-all duration-500"
        >
          <Image
            src={getAssetPath(campaignPhotos[0].src)}
            alt={campaignPhotos[0].alt}
            fill
            loading="lazy"
            className="object-cover object-[center_68%] group-hover:scale-105 transition-transform duration-700 filter saturate-[1.1] contrast-[1.05]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Soft Glow Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 bg-pink-purple-glow opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none" />

          {/* Bottom Card Metadata */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-neon-pink block mb-1">
                Промокампанія «Ромашки»
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {campaignPhotos[0].title}
              </h3>
              <p className="text-xs text-club-subtext mt-1">{campaignPhotos[0].subtitle}</p>
            </div>

            <div className="p-3 rounded-full bg-dark/80 border border-neon-pink/40 text-neon-pink group-hover:bg-neon-pink group-hover:text-white transition-all shadow-neon">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Stacked Secondary Photos (Photo 2 & Photo 3) */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6">
          {/* Photo 2 */}
          <div
            onClick={() => setSelectedPhoto(campaignPhotos[1])}
            className="flex-1 group relative min-h-[290px] rounded-3xl overflow-hidden border border-neon-purple/30 shadow-neon-purple bg-dark-surface cursor-pointer hover:border-neon-purple/80 transition-all duration-500"
          >
            <Image
              src={getAssetPath(campaignPhotos[1].src)}
              alt={campaignPhotos[1].alt}
              fill
              loading="lazy"
              className="object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-700 filter saturate-[1.1]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
              <div>
                <h4 className="font-display text-base font-bold text-white">
                  {campaignPhotos[1].title}
                </h4>
                <p className="text-[11px] text-club-subtext">{campaignPhotos[1].subtitle}</p>
              </div>
              <div className="p-2.5 rounded-full bg-dark/80 border border-neon-purple/40 text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Photo 3 */}
          <div
            onClick={() => setSelectedPhoto(campaignPhotos[2])}
            className="flex-1 group relative min-h-[290px] rounded-3xl overflow-hidden border border-neon-blue/30 shadow-neon-blue bg-dark-surface cursor-pointer hover:border-neon-blue/80 transition-all duration-500"
          >
            <Image
              src={getAssetPath(campaignPhotos[2].src)}
              alt={campaignPhotos[2].alt}
              fill
              loading="lazy"
              className="object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-700 filter saturate-[1.1]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
              <div>
                <h4 className="font-display text-base font-bold text-white">
                  {campaignPhotos[2].title}
                </h4>
                <p className="text-[11px] text-club-subtext">{campaignPhotos[2].subtitle}</p>
              </div>
              <div className="p-2.5 rounded-full bg-dark/80 border border-neon-blue/40 text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Promo Card: «Ромашковий ранок» */}
      <div className="bg-gradient-to-r from-neon-pink/15 via-dark-surface to-neon-purple/15 border border-neon-pink/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-neon">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-neon-pink/50 shrink-0">
            <Image
              src={getAssetPath(campaignPhotos[0].thumbnail)}
              alt="Ромашковий ранок"
              fill
              className="object-cover object-[center_65%]"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-neon-pink mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Промо-формат</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              «Ромашковий ранок»
            </h3>
            <p className="text-xs text-club-subtext max-w-md mt-1 leading-relaxed">
              Танцюємо до світанку, а потім згадуємо найкращі моменти ночі.
            </p>
          </div>
        </div>

        <Link
          href="/events"
          className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-xs font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>Переглянути події</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Campaign Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        currentItem={currentGalleryItem}
        items={galleryEquivalent}
        onNavigate={(newItem) => {
          const found = campaignPhotos.find((p) => p.id === newItem.id);
          if (found) setSelectedPhoto(found);
        }}
      />
    </section>
  );
};
