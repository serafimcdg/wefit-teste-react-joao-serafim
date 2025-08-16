export interface ICartItem {
  id: number | string;
  title: string;
  price: number;
  image: string;
  quantidade: number;
}

export interface ITabelaCarrinho {
  items: ICartItem[];
  total: number;
  onInc?: (id: ICartItem['id']) => void;
  onDec?: (id: ICartItem['id']) => void;
  onRemove?: (id: ICartItem['id']) => void;
  onCheckout?: () => void;
}
