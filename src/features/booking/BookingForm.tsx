'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { sampleEvents } from '@/content/events.data';
import { BookingFormData } from '@/types';
import { CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    eventId: sampleEvents[0].id,
    guestCount: 2,
    bookingType: 'table',
    comment: '',
    ageConfirmed: false,
    termsAgreed: false,
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Anti-spam check
    if (formData.honeypot) return;

    if (!formData.ageConfirmed) {
      setErrorMessage('Будь ласка, підтвердіть, що вам виповнилося 18 років.');
      return;
    }
    if (!formData.termsAgreed) {
      setErrorMessage('Будь ласка, погодьтеся з правилами клубу та політикою конфіденційності.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="bg-dark-surface border border-neon-pink/40 rounded-3xl p-8 shadow-neon text-center max-w-xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center text-neon-pink mb-4 shadow-neon">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          Бронювання підтверджено!
        </h3>
        <p className="text-xs text-club-subtext leading-relaxed mb-6">
          {t('booking.successMsg')}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventId: sampleEvents[0].id,
              guestCount: 2,
              bookingType: 'table',
              comment: '',
              ageConfirmed: false,
              termsAgreed: false,
              honeypot: '',
            });
          }}
          className="px-6 py-3 bg-neon-purple hover:bg-neon-pink text-white font-display text-xs font-semibold rounded-2xl transition-all cursor-pointer"
        >
          Зробити ще одне бронювання
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-surface border border-neon-pink/20 rounded-3xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto flex flex-col gap-6 relative"
    >
      <div className="flex flex-col gap-1 border-b border-dark-border pb-4">
        <h3 className="font-display text-xl font-bold text-white">
          {t('booking.title')}
        </h3>
        <p className="text-xs text-club-muted">{t('booking.subtitle')}</p>
      </div>

      {errorMessage && (
        <div className="p-4 bg-neon-red/15 border border-neon-red/40 rounded-2xl text-neon-red text-xs font-medium">
          {errorMessage}
        </div>
      )}

      {/* Anti-spam honeypot */}
      <input
        type="text"
        name="company_hp_field"
        className="hidden"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-display font-medium text-club-subtext">
            {t('booking.nameLabel')} *
          </label>
          <input
            type="text"
            required
            placeholder="Олексій"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-display font-medium text-club-subtext">
            {t('booking.emailLabel')} *
          </label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-display font-medium text-club-subtext">
            {t('booking.phoneLabel')} *
          </label>
          <input
            type="tel"
            required
            placeholder="+380 67 000 00 00"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink"
          />
        </div>

        {/* Guest Count */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-display font-medium text-club-subtext">
            {t('booking.guestsLabel')}
          </label>
          <select
            value={formData.guestCount}
            onChange={(e) =>
              setFormData({ ...formData, guestCount: Number(e.target.value) })
            }
            className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:outline-none focus:border-neon-pink cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'гість' : num < 5 ? 'гості' : 'гостей'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Select Event */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-display font-medium text-club-subtext">
          {t('booking.eventLabel')} *
        </label>
        <select
          value={formData.eventId}
          onChange={(e) => setFormData({ ...formData, eventId: e.target.value })}
          className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:outline-none focus:border-neon-pink cursor-pointer"
        >
          {sampleEvents.map((evt) => (
            <option key={evt.id} value={evt.id}>
              {evt.displayDate} — {evt.title} ({evt.time})
            </option>
          ))}
        </select>
      </div>

      {/* Reservation Type selector */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-display font-medium text-club-subtext">
          {t('booking.typeLabel')}
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(['table', 'guestlist', 'vip'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, bookingType: type })}
              className={`p-3 rounded-xl border text-center font-display text-xs font-semibold transition-all cursor-pointer ${
                formData.bookingType === type
                  ? 'bg-neon-pink/20 border-neon-pink text-white shadow-neon'
                  : 'bg-dark border-dark-border text-club-subtext hover:border-neon-pink/40'
              }`}
            >
              {type === 'table'
                ? t('booking.typeTable')
                : type === 'guestlist'
                ? t('booking.typeGuestlist')
                : t('booking.typeVip')}
            </button>
          ))}
        </div>
      </div>

      {/* Comment / Special Requests */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-display font-medium text-club-subtext">
          {t('booking.commentLabel')}
        </label>
        <textarea
          rows={3}
          placeholder="Особливі побажання щодо посадки або привітання..."
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink resize-none"
        />
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3 pt-2 border-t border-dark-border text-xs text-club-subtext">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.ageConfirmed}
            onChange={(e) =>
              setFormData({ ...formData, ageConfirmed: e.target.checked })
            }
            className="w-4 h-4 rounded border-dark-border bg-dark text-neon-pink focus:ring-neon-pink cursor-pointer"
          />
          <span className="flex items-center gap-1.5 text-white">
            <ShieldCheck className="w-4 h-4 text-neon-pink" />
            {t('booking.ageConfirm')}
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termsAgreed}
            onChange={(e) =>
              setFormData({ ...formData, termsAgreed: e.target.checked })
            }
            className="w-4 h-4 rounded border-dark-border bg-dark text-neon-pink focus:ring-neon-pink cursor-pointer"
          />
          <span>{t('booking.termsConfirm')}</span>
        </label>
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-sm font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        <UserCheck className="w-4 h-4" />
        <span>{isSubmitting ? 'Надсилання...' : t('booking.submitBtn')}</span>
      </button>
    </form>
  );
};
