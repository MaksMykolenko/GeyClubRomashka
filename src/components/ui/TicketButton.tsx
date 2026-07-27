'use client';

import React from 'react';
import { Ticket } from 'lucide-react';

interface TicketButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const TicketButton: React.FC<TicketButtonProps> = ({
  children = 'Купити квиток',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyle =
    'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-offset-2 focus:ring-offset-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider gap-1.5',
    md: 'px-6 py-3 text-sm tracking-wider gap-2',
    lg: 'px-8 py-4 text-base tracking-widest gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-neon hover:shadow-neon-purple hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-neon-purple/20 text-club-text border border-neon-purple/50 hover:bg-neon-purple/40 hover:border-neon-purple hover:scale-[1.02]',
    outline:
      'bg-transparent text-neon-pink border border-neon-pink/60 hover:bg-neon-pink/10 hover:border-neon-pink hover:scale-[1.02]',
  };

  return (
    <button
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <Ticket className="w-4 h-4 shrink-0" />
      <span>{children}</span>
    </button>
  );
};
