import React from 'react';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';

interface EmptyStateProps {
  title?: string;
  description?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Нічого не знайдено',
  description = 'За вашим запитом поки що немає результатів.',
  message,
  actionLabel,
  onAction,
}) => {
  const displayDesc = message || description;

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-border rounded-lg bg-surface gap-4 my-6">
      <MinimalDaisyMark size={32} className="text-text-muted opacity-60" />
      <div>
        <h3 className="font-sans text-base font-semibold text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-xs text-text-secondary max-w-sm">
          {displayDesc}
        </p>
      </div>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-2 px-5 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-sans font-semibold rounded-md transition-colors cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
