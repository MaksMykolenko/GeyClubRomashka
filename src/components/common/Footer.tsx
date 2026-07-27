'use client';

import React from 'react';
import Link from 'next/link';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';
import { clubConfig } from '@/config/club.config';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background-deep border-t border-border py-8 text-xs font-sans text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand mark & Copyright */}
        <div className="flex items-center gap-3">
          <MinimalDaisyMark className="w-5 h-5 text-text-secondary" />
          <span>© 2026 Ромашка</span>
        </div>

        {/* Center: Legal & Rules links */}
        <div className="flex items-center gap-6">
          <Link href="/rules" className="hover:text-text-primary transition-colors">
            Правила клубу
          </Link>
          <Link href="/privacy" className="hover:text-text-primary transition-colors">
            Політика конфіденційності
          </Link>
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-5">
          <a
            href={clubConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href={clubConfig.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Telegram
          </a>
          <a
            href={clubConfig.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};
