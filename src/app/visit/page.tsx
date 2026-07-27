'use client';

import React from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { clubConfig } from '@/config/club.config';
import { InteractiveMap } from '@/features/visit/InteractiveMap';
import { BookingForm } from '@/features/booking/BookingForm';
import {
  MapPin,
  Clock,
  Shirt,
  ShieldCheck,
  CreditCard,
  Accessibility,
  TrainFront,
  HelpCircle,
} from 'lucide-react';

export default function VisitPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-neon-purple/20 border border-neon-purple/40 rounded-full text-neon-purple text-xs font-display font-semibold mx-auto">
          <MapPin className="w-4 h-4" /> <span>{t('visit.title')}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          Як нас знайти та правила відвідування
        </h1>
        <p className="text-sm text-club-subtext leading-relaxed">
          Уся практична інформація для вашого комфортного та безпечного відпочинку.
        </p>
      </div>

      {/* Map & Key Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <InteractiveMap />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-dark-surface border border-neon-pink/20 rounded-3xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neon-pink/15 text-neon-pink border border-neon-pink/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-club-muted uppercase">
                  {t('visit.addressTitle')}
                </h4>
                <p className="font-display text-sm font-bold text-white">
                  {clubConfig.addressPlaceholder}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-club-subtext pt-2 border-t border-dark-border">
              <TrainFront className="w-4 h-4 text-neon-blue" />
              <span>Метро {clubConfig.metroStation}</span>
            </div>
          </div>

          <div className="bg-dark-surface border border-neon-purple/20 rounded-3xl p-6 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neon-purple/15 text-neon-purple border border-neon-purple/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-club-muted uppercase">
                {t('visit.hoursTitle')}
              </h4>
              <p className="font-display text-sm font-bold text-white">
                {clubConfig.workingHours}
              </p>
            </div>
          </div>

          <div className="bg-dark-surface border border-neon-yellow/20 rounded-3xl p-6 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neon-yellow/15 text-neon-yellow border border-neon-yellow/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-club-muted uppercase">
                {t('visit.ageTitle')}
              </h4>
              <p className="font-display text-xs text-club-subtext">
                {t('visit.ageDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards Grid: Dresscode, Accessibility, Cloakroom */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dark flex items-center justify-center text-neon-pink border border-neon-pink/30">
            <Shirt className="w-5 h-5" />
          </div>
          <h3 className="font-display text-sm font-bold text-white">
            {t('visit.dressCodeTitle')}
          </h3>
          <p className="text-xs text-club-subtext leading-relaxed">
            {t('visit.dressCodeDesc')}
          </p>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dark flex items-center justify-center text-neon-purple border border-neon-purple/30">
            <Accessibility className="w-5 h-5" />
          </div>
          <h3 className="font-display text-sm font-bold text-white">
            {t('visit.accessibilityTitle')}
          </h3>
          <p className="text-xs text-club-subtext leading-relaxed">
            {t('visit.accessibilityDesc')}
          </p>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dark flex items-center justify-center text-neon-blue border border-neon-blue/30">
            <CreditCard className="w-5 h-5" />
          </div>
          <h3 className="font-display text-sm font-bold text-white">
            {t('visit.cloakroomTitle')}
          </h3>
          <p className="text-xs text-club-subtext leading-relaxed">
            {t('visit.cloakroomDesc')}
          </p>
        </div>
      </div>

      {/* Embedded Table Booking Form */}
      <div className="pt-8 border-t border-dark-border">
        <BookingForm />
      </div>
    </div>
  );
}
