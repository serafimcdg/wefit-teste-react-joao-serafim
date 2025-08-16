'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '@/components/header/Header';
import { PaginaCard } from '@/components/pagina-card/PaginaCard';
import TabelaCarrinho from '@/components/tabela-carrinho/TabelaCarrinho';
import SemFilmes from '@/components/sem-filmes/SemFilmes';
import CompraFinalizada from '@/components/compra-finalizada/CompraFinalizada';
import SpinnerLoading from '@/components/ui/spinner/SpinnerLoading';
import type { IFilme } from '@/interfaces/Filme.interface';
import {
  getCarrinhoData,
  addFilmeCarrinho,
  removeUnidadeFilmeCarrinho,
  limpaFilmesCarrinhoNotifica,
} from '@/services/postAddCart.service';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';
import { useLoadingStore } from '@/store/loading.store';

const Main = styled.main`
  padding: 24px;
  @media (max-width: 900px) { padding: 5px; }
`;

type View = 'loading' | 'cart' | 'empty' | 'done';

export default function CarrinhoPage() {
  const [items, setItems] = useState<IFilme[]>([]);
  const [status, setStatus] = useState<View>('loading'); 
  const router = useRouter();

  const isLoading = useLoadingStore((s) => s.isLoading);
  const show = useLoadingStore((s) => s.show);
  const hide = useLoadingStore((s) => s.hide);

  const atualizaItens = useCallback(() => {
    const list = getCarrinhoData();
    setItems(list);
    setStatus(list.length ? 'cart' : 'empty');
  }, []);

  useEffect(() => {
    let unmounted = false;
    show();
    const t = setTimeout(() => {
      if (unmounted) return;
      atualizaItens();
      hide();
    }, 800);

    const onCarrinhoAtualiza = () => atualizaItens();
    window.addEventListener('cart:update', onCarrinhoAtualiza);

    return () => {
      unmounted = true;
      clearTimeout(t);
      window.removeEventListener('cart:update', onCarrinhoAtualiza);
      hide();
    };
  }, [show, hide, atualizaItens]);

  const total = useMemo(
    () => items.reduce((s, it) => s + Number(it.price) * Number(it.quantidade || 0), 0),
    [items]
  );

  const incrementarQuantidade = (id: IFilme['id']) => {
    const movie = items.find((it) => it.id === id);
    if (movie) addFilmeCarrinho(movie);
  };

  const dec = (id: IFilme['id']) => {
    removeUnidadeFilmeCarrinho(Number(id));
  };

  const remove = (id: IFilme['id']) => {
    limpaFilmesCarrinhoNotifica(Number(id));
  };

  const checkout = async () => {
    if (isLoading) return;
    show();
    try {
      await new Promise((r) => setTimeout(r, 1000));
      for (const it of items) {
        limpaFilmesCarrinhoNotifica(Number(it.id));
      }
      setItems([]);
      setStatus('done');
    } finally {
      hide();
    }
  };

  const view: View = isLoading ? 'loading' : status;

  return (
    <>
      <Header />
      <Main>
        {view === 'loading' ? (
          <SpinnerLoading />
        ) : view === 'done' ? (
          <PaginaCard maxWidth="100%" elevation="md">
            <CompraFinalizada actionText="Voltar" onAction={() => router.push('/')} />
          </PaginaCard>
        ) : view === 'empty' ? (
          <PaginaCard maxWidth="100%" elevation="md">
            <SemFilmes actionText="Voltar" onAction={() => router.push('/')} />
          </PaginaCard>
        ) : (
          <PaginaCard maxWidth="75%" elevation="md" style={{ padding: '24px 0' }}>
            <TabelaCarrinho
              items={items}
              total={total}
              onInc={incrementarQuantidade}
              onDec={dec}
              onRemove={remove}
              onCheckout={checkout}
            />
          </PaginaCard>
        )}
      </Main>
    </>
  );
}
