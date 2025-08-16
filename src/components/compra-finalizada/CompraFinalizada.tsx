import Image from 'next/image';

import type { ICompraFinalizada } from './CompraFinalizada.interface';
import Button from '../ui/button/Button';
import * as S from './CompraFinalizada.style';

export default function CompraFinalizada({
  title = 'Compra realizada com sucesso!',
  imageSrc = '/finalizada.svg',
  imageAlt = 'Compra Finalizada',
  actionText = 'Voltar',
  onAction = () => location.reload(),
  minHeight = 240,
  disabled,
  loading,
  className,
}: ICompraFinalizada) {
  return (
    <S.Wrapper style={{ minHeight }} className={className}>
      <S.Title>{title}</S.Title>

      {imageSrc && (
        <S.ImgHolder>
          <Image src={imageSrc} alt={imageAlt} width={100} height={294} priority   style={{ maxHeight: 300, width: '100px', height: 'auto', objectFit: 'contain' }}
 />
        </S.ImgHolder>
      )}

      <Button onClick={onAction} disabled={disabled} loading={loading} width="173px">
        {actionText}
      </Button>
    </S.Wrapper>
  );
}
