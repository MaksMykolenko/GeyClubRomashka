import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Щось пішло не так',
  message = 'Не вдалося завантажити дані. Перевірте з’єднання та спробуйте ще раз.',
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-dark-surface border border-neon-red/40 rounded-3xl text-center max-w-md mx-auto my-8">
      <div className="w-14 h-14 rounded-2xl bg-dark border border-neon-red/50 flex items-center justify-center text-neon-red mb-4">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-club-muted leading-relaxed mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-neon-red/20 text-neon-red border border-neon-red/40 font-display text-xs font-semibold rounded-xl hover:bg-neon-red hover:text-white transition-colors cursor-pointer"
        >
          Спробувати знову
        </button>
      )}
    </div>
  );
};
