'use client';

import React, { useState } from 'react';
import { EventItem } from '@/types';
import { useI18n } from '@/i18n/i18n-context';
import { Modal } from '@/components/common/Modal';
import { TicketButton } from '@/components/ui/TicketButton';
import { AlertCircle, ExternalLink, Ticket, CheckCircle2 } from 'lucide-react';
import { clubConfig } from '@/config/club.config';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: EventItem | null;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, event }) => {
  const { t } = useI18n();
  const [ticketType, setTicketType] = useState<'standard' | 'vip'>('standard');
  const [quantity, setQuantity] = useState(1);
  const [isDemoConfirmed, setIsDemoConfirmed] = useState(false);

  const targetEventName = event ? event.title : 'Головна вечірка «Ніч Ромашки»';
  const basePrice = event ? event.priceFrom : 350;
  const finalPrice = (ticketType === 'vip' ? basePrice + 250 : basePrice) * quantity;

  const handleCheckout = () => {
    setIsDemoConfirmed(true);
  };

  const handleReset = () => {
    setIsDemoConfirmed(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={t('demoTicket.title')}>
      {isDemoConfirmed ? (
        <div className="flex flex-col items-center text-center py-4">
          <div className="w-16 h-16 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center text-neon-pink mb-4 shadow-neon">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Демо-бронювання створено!
          </h3>
          <p className="text-xs text-club-subtext leading-relaxed mb-6 max-w-sm">
            Дякуємо! Ви обрали {quantity} квит. ({ticketType.toUpperCase()}) на суму{' '}
            <strong className="text-neon-pink">{finalPrice} UAH</strong>. Оскільки сайт працює у
            демонстраційному режимі, кошти не знімаються.
          </p>

          <div className="w-full bg-dark border border-dark-border rounded-2xl p-4 text-left text-xs mb-6">
            <span className="text-club-muted block mb-1">{t('demoTicket.redirectNotice')}</span>
            <code className="text-neon-blue break-all font-mono">
              {clubConfig.ticketServiceUrl}
            </code>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 bg-neon-purple hover:bg-neon-pink text-white font-display text-xs font-semibold rounded-2xl transition-colors cursor-pointer"
          >
            Зрозуміло, закрити
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Demo Warning Banner */}
          <div className="p-4 bg-neon-yellow/10 border border-neon-yellow/30 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
            <p className="text-xs text-neon-yellow leading-relaxed">
              {t('demoTicket.notice')}
            </p>
          </div>

          {/* Selected Event summary */}
          <div className="bg-dark border border-dark-border p-4 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-display text-neon-pink block">
                Обрана подія
              </span>
              <h4 className="font-display text-sm font-bold text-white">{targetEventName}</h4>
            </div>
            <Ticket className="w-6 h-6 text-neon-purple" />
          </div>

          {/* Ticket Category Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-display font-medium text-club-subtext">
              {t('demoTicket.ticketType')}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTicketType('standard')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col transition-all cursor-pointer ${
                  ticketType === 'standard'
                    ? 'bg-neon-pink/15 border-neon-pink text-white shadow-neon'
                    : 'bg-dark border-dark-border text-club-subtext hover:border-neon-pink/40'
                }`}
              >
                <span className="font-display text-xs font-bold">Standard</span>
                <span className="text-xs text-neon-pink font-semibold mt-1">
                  {basePrice} UAH
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTicketType('vip')}
                className={`p-3.5 rounded-2xl border text-left flex flex-col transition-all cursor-pointer ${
                  ticketType === 'vip'
                    ? 'bg-neon-purple/20 border-neon-purple text-white shadow-neon-purple'
                    : 'bg-dark border-dark-border text-club-subtext hover:border-neon-purple/40'
                }`}
              >
                <span className="font-display text-xs font-bold">VIP Pass</span>
                <span className="text-xs text-neon-purple font-semibold mt-1">
                  {basePrice + 250} UAH
                </span>
              </button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-dark border border-dark-border p-3 rounded-2xl">
            <span className="text-xs font-display text-white">Кількість квитків</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-white font-bold hover:border-neon-pink cursor-pointer"
              >
                -
              </button>
              <span className="font-display text-sm font-bold text-white px-2">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-8 h-8 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-white font-bold hover:border-neon-pink cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Price total & Submit */}
          <div className="pt-4 border-t border-dark-border flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-display text-club-muted block">
                Загальна вартість
              </span>
              <span className="font-display text-2xl font-black text-white">
                {finalPrice} UAH
              </span>
            </div>

            <TicketButton size="md" onClick={handleCheckout}>
              {t('demoTicket.proceedBtn')}
            </TicketButton>
          </div>
        </div>
      )}
    </Modal>
  );
};
