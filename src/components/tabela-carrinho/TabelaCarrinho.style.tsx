import styled from 'styled-components';

export const Wrap = styled.div`
  width: min(95%);  
  margin: 0 auto;
  
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;     
  border-collapse: separate;
  border-spacing: 0;
  --gutter: 24px;
  user-select: none;
  thead th.right,  tbody td.right,  tfoot td.right { text-align: right; }  

  thead th, tbody td, tfoot td {
    padding: 12px 0 ;
    vertical-align: middle;
    text-align: left;       
    background: #fff;
  }

  thead th.right,  tbody td.right  { text-align: right; }
  thead th:nth-child(2), tbody td:nth-child(2) { text-align: left; }  
  thead th:nth-child(4), tbody td:nth-child(4) { text-align: right; } 

  tfoot td {
    border-top: 1px solid rgba(0,0,0,.12);
    padding-top: 16px;
  }

  thead th {
    color: #94a3b8;
    font: 700 12px/1 var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    letter-spacing: .4px;
    text-transform: uppercase;
  }
    @media (max-width: 900px) {
    display: none;
  }
    
`;

export const Th = styled.th`
  && { 
    font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;      
    font-size: 14px;
    line-height: 1;       
    letter-spacing: 0;
    color: #999999;
    vertical-align: middle;
    text-transform: none;  

  &.right { text-align: right; }
`;

export const Td = styled.td``;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  align-items: center;
  min-width: 0; 
`;

export const Poster = styled.div`
  position: relative;
  width: 80px;
  height: 114px;
  > span { width: 100% !important; height: 100% !important; }
  img { object-fit: contain !important; }
`;

export const TitlePrice = styled.div`
  display: grid;
  gap: 6px;
  min-width: 0;

  strong {
    font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;       
    font-style: normal;
    font-size: 14px;
    line-height: 1;          
    letter-spacing: 0;
    color: #2F2E41;
    display: inline-flex;     
    align-items: center;
    white-space: nowrap;      
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;       
    font-style: normal;
    font-size: 16px;
    line-height: 1;         
    letter-spacing: 0;
    color: #2F2E41;
    margin-top: 10px;
    display: inline-flex;    
    align-items: center;
  }
`;


export const QuantidadeCasse = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start; 
`;

export const Pill = styled.span`
  min-width: 70px; height: 28px; padding: 0 6px;
  border-radius: 6px; border: 1px solid #cbd5e1;
  display: inline-flex; align-items: center; justify-content: center;
  font: 700 14px/1 var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  color: #0f172a; background: #fff;
`;

export const Round = styled.button`
  width: 24px; height: 24px; border-radius: 999px;
  display: grid; place-items: center; cursor: pointer;
  transition: background .15s ease;
  &:hover { background: rgba(25,145,235,.08); }
`;

export const Subtotal = styled.span`
  font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;     
  font-style: normal;
  font-size: 16px;
  line-height: 1;       
  letter-spacing: 0;
  color: #2F2E41;

  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;
export const Remove = styled.button`
  display: inline-flex;      
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  color: #1991eb;
  background: transparent;
  border: 0;
  cursor: pointer;
  &:hover { opacity: .8; }
  @media (max-width: 420px) {width: 20px; height: 20px; }
}
`;
export const FinishBtn = styled.button`
  height: 32px;
  padding: 0 14px;
  width: 180px;
  border-radius: 4px;
  background: #009EDD;
  color: #FFFFFF;
  font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0;
  text-align: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;



export const Total = styled.span`
  display: inline-flex;      
  align-items: center;
  gap: 12px;
  white-space: nowrap;       
  span {
    font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0;
    color: #999999;
  }
  strong {
    font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0;
    color: #2F2E41;
  }
      @media (max-width: 900px) {
    display: flex;              
    justify-content: space-between;
    align-items: center;
    width: 100%;
    white-space: normal;         
    text-align: left;            
  }
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  padding: 0 24px;
  > div:nth-child(2){ justify-self:center; }
  > div:nth-child(3),
  > div:nth-child(4){ justify-self:end; }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  column-gap: 16px;
  align-items: center;
  padding: 12px 24px;
`;

export const Quantidade = styled.div`
  display:inline-flex; gap:8px; align-items:center; justify-content:center;
`;
export const ListMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: grid;
    gap: 12px;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); 
  column-gap: 12px;
  row-gap: 8px;
  padding: 12px;
  background: #fff;
  border-radius: 6px;
`;

export const Left = styled.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr); 
  gap: 12px;
  align-items: start;
  min-width: 0;
`;
export const PosterMobile = styled.div`
  position: relative;
  width: 72px;
  height: 92px;
  > span { width: 100% !important; height: 100% !important; }
  img { object-fit: contain !important; }
`;

export const Info = styled.div`
  display: grid;
  gap: 8px;
  min-width: 0;
`;
export const TitleMobile = styled.strong`
  font: 700 14px/1 var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  color: #2F2E41;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Right = styled.div`
  display: grid;
  gap: 10px;
  min-width: 0;
  width: 100%;

  justify-items: end;
  text-align: right;
`;
export const UnitTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  gap: 12px;
  width: 100%;
  flex-wrap: wrap;           
`;


export const UnitPrice = styled.span`
  font-family: var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;
  color: #2F2E41;
`;

export const SubtotalBlock = styled.div`
  display: grid;
  justify-items: end;  
  text-align: right;

  span {
    font: 700 12px/1 var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    color: #999999;
  }
  strong {
    font: 700 16px/1 var(--font-open-sans), system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    color: #2F2E41;
  }
`;

export const MobileFooter = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    gap: 12px;
    padding: 12px;                        
    border-top: 1px solid rgba(0,0,0,.12);
    background: #fff;                     
  }
`;
