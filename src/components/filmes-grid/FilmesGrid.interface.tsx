import { IFilme } from '@/interfaces/Filme.interface';
import type { CSSProperties, ReactNode } from 'react';
import type { WebTarget } from 'styled-components';

export interface IGridFilmes {
  filmes: IFilme[];
  renderAction?: (filme: IFilme) => ReactNode;

  onAdd?: (filme: IFilme) => void;
  getQuantidade?: (id: IFilme['id']) => number;

  padded?: boolean;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  maxWidth?: number | string;
  as?: WebTarget;
  center?: boolean;
  className?: string;
  style?: CSSProperties;
}
