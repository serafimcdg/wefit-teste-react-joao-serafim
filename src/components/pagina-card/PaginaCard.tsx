import * as S from './PaginaCard.styles';
import { PaginaCardProps } from './PaginaCard.interface';


export function PaginaCard({
  children,
  padded = true,
  elevation = 'md',
  maxWidth = '100%',
  as,
  center = false,
  className,
  style
}: PaginaCardProps) {
  return (
    <S.Wrapper style={{ maxWidth, margin: '0 auto' }}>
      <S.Card
        as={as}
        className={className}
        style={style}
        data-padded={padded}
        data-elevation={elevation}
        data-center={center}
      >
        {children}
      </S.Card>
    </S.Wrapper>
  );
}
