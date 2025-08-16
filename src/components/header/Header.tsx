'use client';

import { useCallback, useEffect, useState } from 'react';
import { IHeaderProps } from './Header.interface';
import * as S from './Header.styles';
import Image from 'next/image';
import { getCarrinhoData } from '@/services/postAddCart.service';
import { useRouter } from 'next/navigation';

export default function Header({ cartCount }: Readonly<IHeaderProps>) {
  const router = useRouter();
  const [count, setContagem] = useState<number>(cartCount ?? 0);

  const atualizaContagem = useCallback(() => {
    const cart = getCarrinhoData();
    const total = cart.reduce((acc, item) => acc + (Number(item?.quantidade) || 0), 0);
    setContagem(total);
  }, []);

  useEffect(() => {
    atualizaContagem();
    const onCarrinhoAtualiza = () => atualizaContagem();
    window.addEventListener('cart:update', onCarrinhoAtualiza);
    return () => window.removeEventListener('cart:update', onCarrinhoAtualiza);
  }, [atualizaContagem]);

  const handleVaiParaCarrinho = useCallback(() => {
    router.push('/carrinho');
  }, [router]);

  const handleVaiParaHome = useCallback(() => {
    router.push('/');
  }, [router]);


  return (
    <S.HeaderBar>
      <S.Inner>
        <S.Title
          role="link"
          tabIndex={0}
          onClick={handleVaiParaHome}
          aria-label="Ir para a página inicial"
        >
          WeMovies
        </S.Title>

        <S.Right>
          <S.CartTexts
            role="button"
            tabIndex={0}
            onClick={handleVaiParaCarrinho}
            aria-label="Abrir carrinho"
            style={{ cursor: 'pointer' }}
          >
            <S.CartLabel><span>Meu Carrinho</span></S.CartLabel>
            <S.ItemCount>{count} itens</S.ItemCount>
          </S.CartTexts>

          <S.CartIcon
            aria-label="Abrir carrinho"
            role="button"
            tabIndex={0}
            onClick={handleVaiParaCarrinho}
            style={{ cursor: 'pointer' }}
          >
            <Image src="/carrinho-shop.svg" alt="Carrinho" width={40} height={40} />
          </S.CartIcon>
        </S.Right>
      </S.Inner>
    </S.HeaderBar>
  );
}
