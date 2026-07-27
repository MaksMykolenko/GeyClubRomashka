'use client';

import React from 'react';
import Image from 'next/image';
import { useModals } from '@/components/common/ModalContext';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';
import { getAssetPath } from '@/lib/utils';
import { Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  const { openTicketModal } = useModals();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
      {/* SECTION 12: Hero Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h1 className="font-sans text-4xl sm:text-5xl font-light text-text-primary leading-tight">
            Ромашка — це не просто клуб.
          </h1>

          <div className="flex flex-col gap-4 text-base text-text-secondary leading-relaxed font-sans max-w-xl">
            <p>
              Це простір свободи, музики та людей, які живуть моментом.
            </p>
            <p>
              Ми об’єднуємо людей через музику, мистецтво та танець. Тут немає місця для упереджень — тільки ти, твої люди та відчуття, що тебе розуміють.
            </p>
          </div>
        </div>

        {/* Black & White Club Photograph Right */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-surface">
          <Image
            src={getAssetPath('/images/campaign/romashka-after-dawn-01.png')}
            alt="Атмосфера клубу Ромашка"
            fill
            priority
            className="object-cover object-[center_65%] filter grayscale contrast-125"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full h-[1px] bg-border" />

      {/* SECTION 12: Three Values in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Value 1 */}
        <div className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg">
          <div className="flex items-center gap-2.5 text-accent">
            <MinimalDaisyMark size={20} className="text-accent" />
            <h3 className="font-sans text-lg font-semibold text-text-primary">
              Музика
            </h3>
          </div>
          <p className="text-sm text-text-secondary font-sans leading-relaxed">
            Актуальні DJ-сети та якісний звук кожного вечора.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg">
          <div className="flex items-center gap-2.5 text-accent">
            <Heart className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-semibold text-text-primary">
              Свобода
            </h3>
          </div>
          <p className="text-sm text-text-secondary font-sans leading-relaxed">
            Будь собою. Ми цінуємо тебе таким, яким ти є.
          </p>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg">
          <div className="flex items-center gap-2.5 text-accent">
            <Shield className="w-5 h-5 text-accent" />
            <h3 className="font-sans text-lg font-semibold text-text-primary">
              Безпека
            </h3>
          </div>
          <p className="text-sm text-text-secondary font-sans leading-relaxed">
            Комфорт та повага — наш пріоритет.
          </p>
        </div>
      </div>

      {/* SECTION 12: Compact CTA Block */}
      <div className="bg-surface border border-border rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-sans text-lg font-semibold text-text-primary mb-1">
            Приходь сам або з друзями.
          </h4>
          <p className="text-sm text-text-secondary">
            Тут завжди чекають на тебе.
          </p>
        </div>

        <button
          onClick={() => openTicketModal()}
          className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-semibold rounded-md transition-colors cursor-pointer shrink-0"
        >
          Купити квиток
        </button>
      </div>
    </div>
  );
}
