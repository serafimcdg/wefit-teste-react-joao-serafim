import type { CSSProperties, PropsWithChildren } from 'react';
import type { WebTarget } from 'styled-components';

export type PaginaCardProps = Readonly<
  PropsWithChildren<{
    padded?: boolean;
    elevation?: 'none' | 'sm' | 'md' | 'lg';
    maxWidth?: number | string;
    as?: WebTarget;
    center?: boolean;
    className?: string;
    style?: CSSProperties;
  }>
>;
