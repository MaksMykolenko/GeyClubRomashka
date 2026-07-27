import React from 'react';
import { TicketStatus } from '@/types';
import { useI18n } from '@/i18n/i18n-context';

interface NeonBadgeProps {
  status?: TicketStatus;
  text?: string;
  variant?: 'pink' | 'purple' | 'blue' | 'yellow' | 'red';
  size?: 'sm' | 'md';
}

export const NeonBadge: React.FC<NeonBadgeProps> = ({
  status,
  text,
  variant = 'pink',
  size = 'sm',
}) => {
  const { t } = useI18n();

  let badgeText = text;
  let computedVariant = variant;

  if (status) {
    switch (status) {
      case 'available':
        badgeText = t('events.statusAvailable');
        computedVariant = 'pink';
        break;
      case 'few':
        badgeText = t('events.statusFew');
        computedVariant = 'yellow';
        break;
      case 'sold_out':
        badgeText = t('events.statusSoldOut');
        computedVariant = 'red';
        break;
    }
  }

  const variantStyles = {
    pink: 'bg-neon-pink/15 text-neon-pink border-neon-pink/40 shadow-[0_0_10px_rgba(255,42,166,0.2)]',
    purple: 'bg-neon-purple/15 text-neon-purple border-neon-purple/40 shadow-[0_0_10px_rgba(138,61,255,0.2)]',
    blue: 'bg-neon-blue/15 text-neon-blue border-neon-blue/40 shadow-[0_0_10px_rgba(52,133,255,0.2)]',
    yellow: 'bg-neon-yellow/15 text-neon-yellow border-neon-yellow/40 shadow-[0_0_10px_rgba(255,200,74,0.2)]',
    red: 'bg-neon-red/15 text-neon-red border-neon-red/40',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs tracking-wide',
    md: 'px-3 py-1 text-sm tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center font-display font-medium border rounded-full uppercase ${sizeStyles[size]} ${variantStyles[computedVariant]}`}
    >
      {badgeText}
    </span>
  );
};
