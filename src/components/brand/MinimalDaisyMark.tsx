import React from 'react';

interface MinimalDaisyMarkProps {
  className?: string;
  size?: number;
  color?: string;
}

export const MinimalDaisyMark: React.FC<MinimalDaisyMarkProps> = ({
  className = 'w-6 h-6 text-white',
  size = 24,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* 8 Geometric Petals */}
      <circle cx="12" cy="12" r="2.5" strokeWidth="1.2" />
      <path d="M12 2.5V9.5" />
      <path d="M12 14.5V21.5" />
      <path d="M2.5 12H9.5" />
      <path d="M14.5 12H21.5" />
      <path d="M5.28 5.28L10.23 10.23" />
      <path d="M13.77 13.77L18.72 18.72" />
      <path d="M18.72 5.28L13.77 10.23" />
      <path d="M10.23 13.77L5.28 18.72" />
    </svg>
  );
};
