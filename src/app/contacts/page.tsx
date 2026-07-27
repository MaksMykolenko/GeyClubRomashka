'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { clubConfig } from '@/config/club.config';
import { InteractiveMap } from '@/features/visit/InteractiveMap';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  Facebook,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

export default function ContactsPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-neon-blue/20 border border-neon-blue/40 rounded-full text-neon-blue text-xs font-display font-semibold mx-auto">
          <Phone className="w-4 h-4" /> <span>{t('nav.contacts')}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white">
          Зв’яжіться з нами
        </h1>
        <p className="text-sm text-club-subtext leading-relaxed">
          Маєте запитання щодо бронювання, виступів або співпраці? Напишіть нам.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Contact Details Box */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-dark-surface border border-neon-pink/20 rounded-3xl p-6 flex flex-col gap-5">
            <h3 className="font-display text-base font-bold text-white">
              Контактна інформація
            </h3>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neon-pink/15 text-neon-pink border border-neon-pink/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-display text-club-muted block">
                  Адреса
                </span>
                <span className="text-xs font-bold text-white">
                  {clubConfig.addressPlaceholder}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neon-purple/15 text-neon-purple border border-neon-purple/30">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-display text-club-muted block">
                  Телефон підтримки
                </span>
                <span className="text-xs font-bold text-white">{clubConfig.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neon-blue/15 text-neon-blue border border-neon-blue/30">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-display text-club-muted block">
                  Email
                </span>
                <span className="text-xs font-bold text-white">{clubConfig.email}</span>
              </div>
            </div>
          </div>

          {/* Social Links Box */}
          <div className="bg-dark-surface border border-dark-border rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Соціальні мережі
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={clubConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-2xl bg-dark border border-neon-pink/30 text-white text-xs font-display font-medium flex items-center justify-center gap-2 hover:bg-neon-pink/20 transition-all"
              >
                <Instagram className="w-4 h-4 text-neon-pink" /> Instagram
              </a>
              <a
                href={clubConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-2xl bg-dark border border-neon-blue/30 text-white text-xs font-display font-medium flex items-center justify-center gap-2 hover:bg-neon-blue/20 transition-all"
              >
                <Send className="w-4 h-4 text-neon-blue" /> Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Right General Inquiry Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-dark-surface border border-neon-pink/40 rounded-3xl p-8 text-center flex flex-col items-center justify-center h-full">
              <CheckCircle2 className="w-12 h-12 text-neon-pink mb-4" />
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Повідомлення надіслано!
              </h3>
              <p className="text-xs text-club-subtext max-w-sm">
                Дякуємо! Ми дамо відповідь на вказаний email протягом 24 годин.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-dark-surface border border-neon-pink/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-4"
            >
              <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neon-pink" />
                <span>Надіслати повідомлення</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display text-club-subtext">Ім’я *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше ім’я"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:border-neon-pink focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display text-club-subtext">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:border-neon-pink focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-display text-club-subtext">Тема</label>
                <input
                  type="text"
                  placeholder="Бронювання / Співпраця / Діджеїнг"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:border-neon-pink focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-display text-club-subtext">
                  Повідомлення *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ваше запитання..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:border-neon-pink focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-xs font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all cursor-pointer mt-2"
              >
                Надіслати
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Interactive Map */}
      <InteractiveMap />
    </div>
  );
}
