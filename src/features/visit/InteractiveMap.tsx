'use client';

import React from 'react';
import { MapPin, Navigation, TrainFront, ExternalLink } from 'lucide-react';
import { clubConfig } from '@/config/club.config';

export const InteractiveMap: React.FC = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-neon-pink/30 shadow-neon bg-dark-surface flex flex-col justify-between p-6">
      {/* Decorative dark grid map graphic background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f152e_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />

      {/* Top Address Card */}
      <div className="relative z-10 bg-dark/90 backdrop-blur-md border border-neon-pink/30 p-4 rounded-2xl max-w-sm flex items-start gap-3">
        <MapPin className="w-6 h-6 text-neon-pink shrink-0 mt-0.5 animate-bounce" />
        <div>
          <h4 className="font-display text-sm font-bold text-white">
            Клуб «{clubConfig.name}»
          </h4>
          <p className="text-xs text-neon-pink font-semibold mt-0.5">
            {clubConfig.addressPlaceholder}
          </p>
          <a
            href={clubConfig.addressMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-neon-blue hover:underline mt-1"
          >
            <span>Відкрити в Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Map Interactive Marker Icon Center */}
      <div className="relative z-10 self-center flex flex-col items-center gap-2">
        <a
          href={clubConfig.addressMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-neon-pink/20 border-2 border-neon-pink flex items-center justify-center text-white shadow-neon group-hover:scale-110 transition-transform">
            <Navigation className="w-7 h-7 text-neon-pink" />
          </div>
          <span className="text-[10px] font-display uppercase tracking-widest text-white bg-dark/90 px-3 py-1 rounded-full border border-dark-border group-hover:border-neon-pink transition-colors">
            {clubConfig.addressPlaceholder}
          </span>
        </a>
      </div>

      {/* External Map Directions Link */}
      <div className="relative z-10 self-end">
        <a
          href={clubConfig.addressMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-pink to-neon-purple hover:scale-105 text-white font-display text-xs font-semibold rounded-xl transition-all shadow-neon cursor-pointer"
        >
          <Navigation className="w-4 h-4" />
          <span>Прокласти маршрут в Google Maps</span>
        </a>
      </div>
    </div>
  );
};
