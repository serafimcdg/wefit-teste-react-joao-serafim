import type { IFilme } from "@/interfaces/Filme.interface";

const DATA_CARRINHO = "wemovies:carrinho";

const ambienteNavegador =
  typeof window !== "undefined" && typeof sessionStorage !== "undefined";

function idsIguais(a: unknown, b: unknown) {
  return String(a) === String(b);
}

function parseSeguro<T>(texto: string | null, padrao: T): T {
  if (!texto) return padrao;
  try {
    return JSON.parse(texto) as T;
  } catch {
    return padrao;
  }
}

function lerCarrinho(): IFilme[] {
  if (!ambienteNavegador) return [];
  return parseSeguro<IFilme[]>(sessionStorage.getItem(DATA_CARRINHO), []);
}

function setCarrinho(carrinho: IFilme[]): void {
  if (!ambienteNavegador) return;
  sessionStorage.setItem(DATA_CARRINHO, JSON.stringify(carrinho));
  window.dispatchEvent(new Event("cart:update"));
}

export function addFilmeCarrinho(filme: IFilme): void {
  const atual = lerCarrinho();
  const idx = atual.findIndex((item) => idsIguais(item.id, filme.id));

  if (idx >= 0) {
    const qtd = Number(atual[idx].quantidade ?? 0);
    atual[idx].quantidade = (Number.isFinite(qtd) ? qtd : 0) + 1;
  } else {
    atual.push({ ...filme, quantidade: 1 });
  }

  setCarrinho(atual);
}

export function getCarrinhoData(): IFilme[] {
  return lerCarrinho();
}

export function limpaFilmesCarrinho(id: number | string): void {
  const atual = lerCarrinho();
  const atualizado = atual.filter((item) => !idsIguais(item.id, id));
  setCarrinho(atualizado);
}

export function setNotificacaoCarrinho(carrinho: IFilme[]): void {
  setCarrinho(carrinho);
}

export function removeUnidadeFilmeCarrinho(id: number | string): void {
  const atual = lerCarrinho();
  const idx = atual.findIndex((i) => idsIguais(i.id, id));
  if (idx === -1) return;

  const qtd = Number(atual[idx].quantidade ?? 0);
  const proxima = (Number.isFinite(qtd) ? qtd : 0) - 1;

  if (proxima > 0) {
    atual[idx].quantidade = proxima;
  } else {
    atual.splice(idx, 1);
  }

  setCarrinho(atual);
}

export function limpaFilmesCarrinhoNotifica(id: number | string): void {
  limpaFilmesCarrinho(id);
}
