import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  padding: 0 24px;
  margin: 0 auto;
  display: grid;
  place-items: start center;

  @media (max-width: 900px) {
    width: 90%;
    padding: 0 5px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr); 

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const CardItem = styled.article`
  background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,.06);
  padding: 16px;
  height: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 12px;
    height: auto;
  }
`;

export const Poster = styled.div`
  position: relative;
  width: 180px;
  height: 240px;
  margin: 8px 0 12px;

  > span { width: 100% !important; height: 100% !important; }
  img { object-fit: contain !important; }

  @media (max-width: 900px) {
    width: 160px;
    height: 212px;
    margin: 6px 0 10px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  color: #333333;

  @media (max-width: 900px) {
    margin-bottom: 6px;
  }
`;

export const Preco = styled.div`
  font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  color: #2F2E41;
  margin: 10px auto;

  @media (max-width: 900px) {
    margin: 8px auto;
  }
`;
