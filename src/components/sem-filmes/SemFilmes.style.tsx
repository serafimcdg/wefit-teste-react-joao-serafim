import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 16px;
  padding: 16px 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  color: #2b2d42;
  font-size: clamp(18px, 2.2vw, 22px);
`;

export const ImgHolder = styled.div<{ $maxWidth?: number | string }>`
  width: 100%;
  max-width: ${({ $maxWidth }) =>
    typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth || '600px'};
  display: grid;
  place-items: center;

  img { width: 100% !important; height: auto !important; }
`;
