'use client';

import Header from '@/components/header/Header';
import { PaginaCard } from '@/components/pagina-card/PaginaCard';
import SemFilmes from '@/components/sem-filmes/SemFilmes';
import SpinnerLoading from '@/components/ui/spinner/SpinnerLoading';
import { useLoadingStore } from '@/store/loading.store';

export default function Home() {
  const isLoading = useLoadingStore(s => s.isLoading);

  return (
    <>
      <Header cartCount={0} />

      <main>
        {isLoading ? (
            <SpinnerLoading />
        ) : (
          <div><PaginaCard maxWidth="75%" elevation="md"><SemFilmes/></PaginaCard></div>
        )}
      </main>
    </>
  );
}
