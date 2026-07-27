'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { clubConfig } from '@/config/club.config';

export const InteractiveMap: React.FC = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=50.3249304,31.4725508&hl=uk&z=16&output=embed`;

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-neon-pink/40 shadow-neon bg-dark-surface">
      {/* Real Interactive Google Maps iframe with dark club filter */}
      <iframe
        title="Карта гей-клубу Ромашка"
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180%) contrast(1.15) brightness(0.95)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />

      {/* Floating Card Overlay - Top Left */}
      <div className="absolute top-4 left-4 z-10 bg-dark/95 backdrop-blur-md border border-neon-pink/40 p-4 rounded-2xl max-w-xs shadow-neon">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-neon-pink shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display text-sm font-bold text-white">
              Гей-клуб «{clubConfig.name}»
            </h4>
            <p className="text-xs text-neon-pink font-semibold mt-0.5">
              {clubConfig.addressPlaceholder}
            </p>
            <a
              href={clubConfig.addressMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-neon-blue hover:underline mt-1.5 font-medium"
            >
              <span>Відкрити в Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={clubConfig.addressMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-neon-pink to-neon-purple hover:scale-105 text-white font-display text-xs font-semibold rounded-2xl transition-all shadow-neon cursor-pointer"
        >
          <Navigation className="w-4 h-4" />
          <span>Прокласти маршрут</span>
        </a>
      </div>
    </div>
  );
};
