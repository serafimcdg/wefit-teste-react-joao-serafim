import styled, { keyframes } from 'styled-components';
import type { ButtonSize, ButtonVariant } from './Button.interface';

export const Base = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $full?: boolean;
  $bg?: string;
  $color?: string;
  $hoverBg?: string;
  $width?: string;   
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  box-sizing: border-box;                
  border: 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: filter .15s ease, transform .06s ease;
  text-decoration: none;

  width: ${({ $full, $width }) => ($full ? '100%' : $width ?? 'auto')};
  min-width: ${({ $full, $width }) => ($full ? 'auto' : $width ?? 'auto')};
  flex: ${({ $full, $width }) => ($full ? '1 1 auto' : $width ? `0 0 ${$width}` : '0 0 auto')};

  ${({ $size = 'md' }) =>
    $size === 'sm'
      ? 'padding: 8px 12px; font-size: 14px;'
      : $size === 'lg'
        ? 'padding: 12px 18px; font-size: 16px;'
        : 'padding: 10px 16px; font-size: 15px;'}

  ${({ $variant = 'primary', $bg, $color, $hoverBg }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background: #e6f3fb;
          color: #009EDD;
          &:hover { filter: brightness(1.02); }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: #009EDD;
          border: 1px solid rgba(0,0,0,.12);
          &:hover { background: rgba(0,0,0,.03); }
        `;
      case 'success':
        return `
          background: #039B00;
          color: #fff;
          &:hover { filter: brightness(1.05); }
        `;
      case 'custom':
        return `
          background: ${$bg ?? '#009EDD'};
          color: ${$color ?? '#fff'};
          &:hover { background: ${$hoverBg ?? $bg ?? '#009EDD'}; filter: brightness(1.03); }
        `;
      default:
        return `
          background: #009EDD;
          color: #fff;
          &:hover { filter: brightness(1.05); }
        `;
    }
  }}

  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;

const spin = keyframes`to { transform: rotate(360deg); }`;

export const InlineSpinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,.5);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} .8s linear infinite;
`;
