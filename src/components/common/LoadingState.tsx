import React from 'react';
import { DaisyIcon } from '../ui/DaisyIcon';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Завантаження...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <DaisyIcon className="w-12 h-12 text-neon-pink animate-daisy-spin" />
      <p className="font-display text-sm tracking-wider text-club-subtext animate-pulse">
        {message}
      </p>
    </div>
  );
};
