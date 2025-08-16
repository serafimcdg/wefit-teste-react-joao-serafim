import type { IFilme } from "@/interfaces/Filme.interface";

const DATA_CARRINHO = "wemovies:carrinho";

export function addFilmeCarrinho(filme: IFilme): void {
    const current: IFilme[] = JSON.parse(sessionStorage.getItem(DATA_CARRINHO) || "[]");

    const index = current.findIndex((item) => item.id === filme.id);
    if (index >= 0) {
        current[index].quantidade = (current[index].quantidade ?? 0) + 1;
    } else {
        current.push({ ...filme, quantidade: 1 });
    }
    sessionStorage.setItem(DATA_CARRINHO, JSON.stringify(current));
    window.dispatchEvent(new Event('cart:update'));

}


export function getCarrinhoData(): IFilme[] {
    return JSON.parse(sessionStorage.getItem(DATA_CARRINHO) || "[]");
}


export function limpaFilmesCarrinho(id: number): void {
    const current: IFilme[] = JSON.parse(sessionStorage.getItem(DATA_CARRINHO) || "[]");
    const updated = current.filter((item) => item.id !== id);
    sessionStorage.setItem(DATA_CARRINHO, JSON.stringify(updated));
}



export function setNotificacaoCarrinho(cart: IFilme[]): void {
  sessionStorage.setItem(DATA_CARRINHO, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart:update"));
}

export function removeUnidadeFilmeCarrinho(id: number): void {
  const current: IFilme[] = JSON.parse(sessionStorage.getItem(DATA_CARRINHO) || "[]");
  const idx = current.findIndex((i) => i.id === id);
  if (idx === -1) return;

  const nextQuantidade = Math.max(1, Number(current[idx].quantidade) - 1 || 1);
  current[idx].quantidade = nextQuantidade;

  setNotificacaoCarrinho(current);
}

export function limpaFilmesCarrinhoNotifica(id: number): void {
  const current: IFilme[] = JSON.parse(sessionStorage.getItem(DATA_CARRINHO) || "[]");
  const updated = current.filter((item) => item.id !== id);
  setNotificacaoCarrinho(updated);
}