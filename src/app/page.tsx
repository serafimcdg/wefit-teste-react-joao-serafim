'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header/Header';
import { PaginaCard } from '@/components/pagina-card/PaginaCard';
import SemFilmes from '@/components/sem-filmes/SemFilmes';
import SpinnerLoading from '@/components/ui/spinner/SpinnerLoading';
import FilmesGrid from '@/components/filmes-grid/FilmesGrid';
import { useLoadingStore } from '@/store/loading.store';
import type { IFilme } from '@/interfaces/Filme.interface';
import { View } from '@/interfaces/View.interface';
import { getFilmes } from '@/services/getFilmes.service';

export default function Home() {
  const isLoading = useLoadingStore((s) => s.isLoading);
  const show = useLoadingStore((s) => s.show);
  const hide = useLoadingStore((s) => s.hide);

  const [filmes, setFilmes] = useState<IFilme[]>([]);
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    let unmounted = false;

    show(); 
    const ctrl = new AbortController();

    const timeoutId = setTimeout(() => {
      getFilmes(ctrl.signal)
        .then((data) => {
          if (!unmounted) setFilmes(data);
        })
        .catch((err) => {
          if (!unmounted && err?.name !== 'CanceledError' && err?.name !== 'AbortError') {
            setFilmes([]);
          }
        })
        .finally(() => {
          if (!unmounted) {
            setLoaded(true);
            hide();          
          }
        });
    }, 1000); 

    return () => {
      unmounted = true;
      clearTimeout(timeoutId);
      ctrl.abort();
      hide(); 
    };
  }, [show, hide]);

  const view: View =
    !loaded || isLoading ? 'loading' : filmes.length > 0 ? 'grid' : 'empty';

  return (
    <>
      <Header />
      <main>
        {view === 'loading' ? (
          <SpinnerLoading />
        ) : view === 'grid' ? (
          <FilmesGrid filmes={filmes} maxWidth="100%" elevation="md" />
        ) : (
          <PaginaCard maxWidth="100%" elevation="md">
            <SemFilmes />
          </PaginaCard>
        )}
      </main>
    </>
  );
}
