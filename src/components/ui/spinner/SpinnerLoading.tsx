'use client';
import Image from 'next/image';
import { useLoadingStore } from '@/store/loading.store';
import * as S from './SpinnerLoading.styles';

export default function SpinnerLoading() {
  const isLoading = useLoadingStore(s => s.isLoading); 
  if (!isLoading) return null;

  return (
    <S.Overlay>
      <S.Spin $size={44} $speed={0.9}>
        <Image src="/load-spinner.svg" alt="Carregando" width={44} height={44} priority />
      </S.Spin>
    </S.Overlay>
  );
}
