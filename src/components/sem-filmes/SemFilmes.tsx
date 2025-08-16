
import Image from 'next/image';

import type { ISemFilmes } from './SemFilmes.interface';
import Button from '../ui/button/Button';
import * as S from './SemFilmes.style'; 

export default function SemFilmes({
  title = 'Parece que não há nada por aqui :(',
  imageSrc = '/sem-filmes.svg',
  imageAlt = 'Nada encontrado',
  actionText = 'Recarregar página',
  onAction = () => location.reload(),
  minHeight = 240,
  disabled,
  loading,
  className,
}: ISemFilmes) {
  return (
    <S.Wrapper style={{ minHeight }} className={className}>
      <S.Title>{title}</S.Title>

      {imageSrc && (
        <S.ImgHolder>
          <Image src={imageSrc} alt={imageAlt} width={447} height={400} priority />
        </S.ImgHolder>
      )}

      <Button onClick={onAction} disabled={disabled} loading={loading} width={173}>
        {actionText}
      </Button>
    </S.Wrapper>
  );
}
