'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';
import * as S from './FilmesGrid.style';
import type { IGridFilmes } from './FilmesGrid.interface';
import type { IFilme } from '@/interfaces/Filme.interface';
import { addFilmeCarrinho, getCarrinhoData } from '@/services/postAddCart.service';
import * as T from '@/styles/FontesButton';

const toBRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

export default function FilmesGrid({
  filmes,
  maxWidth = '75%',
  className,
  style,
}: Readonly<IGridFilmes>) {
  const [counts, setCounts] = useState<Record<number, number>>({});

  const atualizaContagemCarrinho = useCallback(() => {
    const cart = getCarrinhoData(); 
    const next: Record<number, number> = {};
    for (const item of cart) {
      const idNum = Number(item.id);
      const qtd = Number(item.quantidade ?? 0);
      next[idNum] = (next[idNum] ?? 0) + (Number.isFinite(qtd) ? qtd : 0);
    }
    setCounts(next);
  }, []);

  useEffect(() => {
    atualizaContagemCarrinho();
    const onCartUpdate = () => atualizaContagemCarrinho();
    window.addEventListener('cart:update', onCartUpdate);
    return () => window.removeEventListener('cart:update', onCartUpdate);
  }, [atualizaContagemCarrinho]);

  const handleAdd = useCallback((movie: IFilme) => {
    addFilmeCarrinho(movie);
    atualizaContagemCarrinho();
    window.dispatchEvent(new CustomEvent('cart:update'));
  }, [atualizaContagemCarrinho]);

  return (
    <S.Wrapper style={{ maxWidth, margin: '0 auto', ...style }} className={className}>
      <S.Grid>
        {filmes.map((filme) => {
          const idNum = Number(filme.id);
          const quantidade = counts[idNum] ?? 0;
          const inCarrinho = quantidade > 0;

          return (
            <S.CardItem key={idNum}>
              <S.Poster>
                <Image
                  src={filme.image}
                  alt={filme.title}
                  fill
                  sizes="147px, 188px"
                  style={{ objectFit: 'contain' }}
                />
              </S.Poster>

              <S.Title>{filme.title}</S.Title>
              <S.Preco>{toBRL(filme.price)}</S.Preco>

              <div style={{ width: '100%', marginTop: 'auto' }}>
                <Button
                  onClick={() => handleAdd(filme)}
                  fullWidth
                  variant={inCarrinho ? 'success' : 'primary'}
                  aria-pressed={inCarrinho}
                  leftIcon={
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, paddingTop: '5px' }}>
                      <Image src="/carrinho.svg" alt="" width={13} height={13} />
                      <T.QuantidadeCarrinhoButton>{quantidade}</T.QuantidadeCarrinhoButton>
                    </span>
                  }
                >
                  <T.FonteCaixaAltaButton>ADICIONAR AO CARRINHO</T.FonteCaixaAltaButton>
                </Button>
              </div>
            </S.CardItem>
          );
        })}
      </S.Grid>
    </S.Wrapper>
  );
}
