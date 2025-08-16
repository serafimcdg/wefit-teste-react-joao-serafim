import styled, { keyframes } from 'styled-components';

const spin = keyframes`to { transform: rotate(360deg); }`;

export const Spin = styled.div<{ $size?: number; $speed?: number }>`
  display: inline-block;
  inline-size: ${({ $size = 44 }) => $size}px;
  block-size: ${({ $size = 44 }) => $size}px;
  animation: ${spin} ${({ $speed = 0.9 }) => $speed}s linear infinite;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,.35));
  & > span, & img { width:100% !important; height:100% !important; display:block; }
  @media (prefers-reduced-motion: reduce) {
    animation-duration: ${({ $speed = 0.9 }) => $speed * 2}s;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: clamp(56px, 10.84vh, 88px);
  padding-top: 24px;

  background: transparent;     
  display: flex;
  justify-content: center;    
  align-items: flex-start;     
  pointer-events: none;       
  z-index: 1000;
`;
