import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  display: grid;
  place-items: start center;
  @media (max-width: 900px) {
  min-width: 100% !important;
   padding: 0 ;
  }
  
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  color: #0f172a; 
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 8px;
  padding: 24px;
  &[data-padded='false'] { padding: 0; }
  &[data-elevation='none'] { box-shadow: none; }
  &[data-elevation='sm']   { box-shadow: 0 4px 12px rgba(0,0,0,.06); }
  &[data-elevation='md']   { box-shadow: 0 8px 22px rgba(0,0,0,.08); }
  &[data-elevation='lg']   { box-shadow: 0 16px 40px rgba(0,0,0,.12); }


`;
