'use client';

import React from 'react';
import Link from 'next/link';
import { DaisyIcon } from '@/components/ui/DaisyIcon';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 gap-6">
      <div className="relative">
        <DaisyIcon className="w-20 h-20 text-neon-pink animate-daisy-spin filter drop-shadow-[0_0_25px_rgba(255,42,166,0.7)]" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl font-black text-white">
          404
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
        Сторінку не знайдено
      </h1>

      <p className="text-sm text-club-subtext max-w-md leading-relaxed font-sans">
        Здається, ця стежка заблукала в нічному клубі. Поверніться на головну або перегляньте
        найближчі події.
      </p>

      <div className="flex items-center gap-4 mt-2">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-xs font-semibold rounded-full shadow-neon hover:shadow-neon-purple transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На головну</span>
        </Link>
        <Link
          href="/events"
          className="px-6 py-3 bg-dark-surface border border-dark-border text-club-text hover:text-white font-display text-xs font-semibold rounded-full transition-colors"
        >
          Афіша подій
        </Link>
      </div>
    </div>
  );
}
