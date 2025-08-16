import type { ReactNode } from 'react';

export interface ISemFilmes {
  title?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  actionText?: string;
  onAction?: () => void;
  divider?: boolean;
  minHeight?: number | string;
  disabled?: boolean;
  loading?: boolean;       
  className?: string;
}
