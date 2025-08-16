import styled from 'styled-components';

export const HeaderBar = styled.header`
  background: #2F2E41;
  color: #fff;
  height: clamp(56px, 10.84vh, 88px);
  width: 100%;
  --header-h: clamp(56px, 10.84vh, 88px);
`;

export const Inner = styled.div`
  max-width: 75%;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 75% 25%;
  align-items: center;
  height: 100%;
  padding-inline: 1.39%;

  @media (max-width: 1023px) {
    max-width: 95%;
    grid-template-columns: 1fr 1fr;  
    column-gap: 12px;
    padding-inline: 12px;
  }
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  cursor: pointer;
`;

export const Right = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 1023px) {
    gap: 8px;
  }
`;

export const CartTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 100%;
  cursor: pointer;

  @media (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }
`;

export const CartLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;

  @media (max-width: 1023px) {
    display: none; 
  }
`;

export const ItemCount = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  opacity: 0.75;
  margin: 5px 5px 0 0;

  @media (max-width: 1023px) {
    margin: 0;
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: 2px solid rgba(255,255,255,0.6);
    outline-offset: 2px;
    border-radius: 6px;
  }
`;
