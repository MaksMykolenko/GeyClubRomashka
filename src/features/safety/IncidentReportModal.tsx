'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { Modal } from '@/components/common/Modal';
import { IncidentReportData } from '@/types';
import { ShieldAlert, CheckCircle2, Lock } from 'lucide-react';

interface IncidentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IncidentReportModal: React.FC<IncidentReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useI18n();
  const [formData, setFormData] = useState<IncidentReportData>({
    category: 'harassment',
    description: '',
    dateOccurred: '',
    contactEmail: '',
    isAnonymous: true,
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent anti-spam block

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      category: 'harassment',
      description: '',
      dateOccurred: '',
      contactEmail: '',
      isAnonymous: true,
      honeypot: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={t('safety.reportModalTitle')}>
      {isSubmitted ? (
        <div className="flex flex-col items-center text-center py-6">
          <div className="w-16 h-16 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center text-neon-pink mb-4 shadow-neon">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Звернення прийнято
          </h3>
          <p className="text-xs text-club-subtext leading-relaxed mb-6 max-w-sm">
            Дякуємо за вашу уважність. Наша команда безпеки опрацює це повідомлення в найкоротший
            термін з дотриманням повної конфіденційності.
          </p>
          <button
            onClick={handleReset}
            className="w-full py-3 bg-neon-pink hover:bg-neon-purple text-white font-display text-xs font-semibold rounded-2xl transition-colors cursor-pointer"
          >
            Закрити
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p className="text-xs text-club-muted leading-relaxed mb-2">
            {t('safety.reportModalDesc')}
          </p>

          {/* Honeypot hidden input */}
          <input
            type="text"
            name="website_url_hp"
            className="hidden"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Category Select */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-display font-medium text-club-subtext">
              Категорія інциденту
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value as any })
              }
              className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:outline-none focus:border-neon-pink"
            >
              <option value="harassment">Небажана увага / Домагання</option>
              <option value="aggression">Агресія / Конфлікт</option>
              <option value="staff_service">Питання до роботи персоналу</option>
              <option value="safety">Порушення правил Safe Space</option>
              <option value="other">Інша ситуація</option>
            </select>
          </div>

          {/* Description textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-display font-medium text-club-subtext">
              Опис ситуації *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Будь ласка, опишіть що сталося, вкажіть дату, приблизний час або місце у клубі..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white placeholder:text-club-muted focus:outline-none focus:border-neon-pink resize-none"
            />
          </div>

          {/* Anonymous toggle checkbox */}
          <div className="flex items-center gap-3 py-2 border-y border-dark-border">
            <input
              type="checkbox"
              id="isAnonymousCheck"
              checked={formData.isAnonymous}
              onChange={(e) =>
                setFormData({ ...formData, isAnonymous: e.target.checked })
              }
              className="w-4 h-4 rounded border-dark-border bg-dark text-neon-pink focus:ring-neon-pink cursor-pointer"
            />
            <label htmlFor="isAnonymousCheck" className="text-xs text-white flex items-center gap-1.5 cursor-pointer">
              <Lock className="w-3.5 h-3.5 text-neon-pink" />
              <span>Залишити звернення анонімно</span>
            </label>
          </div>

          {/* Optional contact email if not anonymous */}
          {!formData.isAnonymous && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-display font-medium text-club-subtext">
                Ваш Email для зворотного зв’язку
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="px-4 py-3 bg-dark border border-dark-border rounded-xl text-xs text-white focus:outline-none focus:border-neon-pink"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 py-3.5 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-display text-xs font-semibold rounded-2xl shadow-neon hover:shadow-neon-purple transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{isSubmitting ? 'Надсилання...' : 'Надіслати звернення'}</span>
          </button>
        </form>
      )}
    </Modal>
  );
};
