'use client';

import React from 'react';
import { clubConfig } from '@/config/club.config';
import { InteractiveMap } from '@/features/visit/InteractiveMap';
import { MapPin, Clock, ShieldCheck, Shirt, CreditCard, Mail, Instagram, Send } from 'lucide-react';

export default function VisitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
      {/* SECTION 14: Two-column Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info Items */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h1 className="font-sans text-4xl font-light text-text-primary mb-2">
              Відвідування
            </h1>
            <p className="text-sm text-text-secondary">
              Уся необхідна інформація для вашого візиту в клуб «Ромашка».
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-text-muted block mb-0.5">
                  Адреса
                </span>
                <span className="text-base font-sans font-semibold text-text-primary">
                  {clubConfig.addressPlaceholder}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-text-muted block mb-0.5">
                  Графік роботи
                </span>
                <span className="text-base font-sans font-semibold text-text-primary">
                  Пт — Сб: 22:00 — 06:00
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-text-muted block mb-0.5">
                  Вхід
                </span>
                <span className="text-base font-sans font-semibold text-text-primary">
                  18+ (наявність документа обов’язкова)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shirt className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-text-muted block mb-0.5">
                  Гардероб
                </span>
                <span className="text-base font-sans font-semibold text-text-primary">
                  50 ₴
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CreditCard className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-text-muted block mb-0.5">
                  Оплата
                </span>
                <span className="text-base font-sans font-semibold text-text-primary">
                  Картка, готівка, Apple Pay, Google Pay
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Styled Interactive Map */}
        <div className="lg:col-span-7">
          <InteractiveMap />
        </div>
      </div>

      {/* SECTION 14: Contact Block Below */}
      <div className="border-t border-border pt-12">
        <div className="bg-surface border border-border rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans text-xl font-semibold text-text-primary mb-1">
              Є питання?
            </h3>
            <p className="text-sm text-text-secondary">
              Напиши нам у соцмережах або на пошту.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={clubConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border-strong hover:border-accent text-xs font-sans font-medium text-text-primary rounded-md transition-colors"
            >
              <Instagram className="w-4 h-4 text-accent" />
              <span>Instagram</span>
            </a>

            <a
              href={clubConfig.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border-strong hover:border-accent text-xs font-sans font-medium text-text-primary rounded-md transition-colors"
            >
              <Send className="w-4 h-4 text-accent" />
              <span>Telegram</span>
            </a>

            <a
              href={`mailto:${clubConfig.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-xs font-sans font-semibold text-white rounded-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{clubConfig.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
