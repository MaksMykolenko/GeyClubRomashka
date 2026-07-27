import React from 'react';
import { MinimalDaisyMark } from '@/components/brand/MinimalDaisyMark';

interface DaisyIconProps {
  className?: string;
  size?: number;
}

export const DaisyIcon: React.FC<DaisyIconProps> = ({ className, size }) => {
  return <MinimalDaisyMark className={className} size={size} />;
};
