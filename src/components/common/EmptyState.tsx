import React from 'react';
import { CalendarX } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Нічого не знайдено',
  description = 'За вашим запитом не знайдено інформації. Спробуйте обрати інші параметри.',
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-dark-surface/50 border border-dark-border rounded-3xl text-center max-w-md mx-auto my-8">
      <div className="w-14 h-14 rounded-2xl bg-dark border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-4">
        <CalendarX className="w-7 h-7" />
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-club-muted leading-relaxed">{description}</p>
    </div>
  );
};
