import React from 'react';

interface DaisyIconProps {
  className?: string;
  size?: number;
}

export const DaisyIcon: React.FC<DaisyIconProps> = ({ className = 'w-6 h-6', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`inline-block text-neon-pink ${className}`}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* 12 Petals around center */}
      <g opacity="0.95">
        {[...Array(12)].map((_, i) => {
          const angle = i * 30;
          return (
            <ellipse
              key={i}
              cx="50"
              cy="22"
              rx="6"
              ry="18"
              fill="#FFF8FC"
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </g>
      {/* Daisy Center Accent */}
      <circle cx="50" cy="50" r="14" fill="#FFC84A" />
      <circle cx="50" cy="50" r="11" fill="#E6A800" opacity="0.6" />
    </svg>
  );
};
