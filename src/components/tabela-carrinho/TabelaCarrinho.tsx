import Image from 'next/image';
import * as S from './TabelaCarrinho.style';
import type { ITabelaCarrinho } from './TabelaCarrinho.interface';

const brl = (v: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

export default function CartTable({
    items, total, onInc, onDec, onRemove, onCheckout,
}: Readonly<ITabelaCarrinho>) {
    return (
        <S.Wrap>
            <S.Table>
                <colgroup>
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                </colgroup>

                <thead>
                    <tr>
                        <S.Th>PRODUTO</S.Th>
                        <S.Th>QTD</S.Th>
                        <S.Th className="right">SUBTOTAL</S.Th>
                        <S.Th className="right"></S.Th>

                    </tr>
                </thead>

                <tbody>
                    {items.map((it) => (
                        <tr key={it.id}>
                            <S.Td>
                                <S.Product>
                                    <S.Poster>
                                        <Image src={it.image} alt={it.title} fill sizes="80px" />
                                    </S.Poster>
                                    <S.TitlePrice>
                                        <strong>{it.title}</strong>
                                        <small>{brl(it.price)}</small>
                                    </S.TitlePrice>
                                </S.Product>
                            </S.Td>

                            <S.Td >
                                <S.QuantidadeCasse>
                                    <S.Round aria-label="Diminuir" onClick={() => onDec?.(it.id)}>
                                        <Image src="/menos.svg" alt="Diminuir" width={22} height={22} draggable={false} />
                                    </S.Round>
                                    <S.Pill>{it.quantidade}</S.Pill>
                                    <S.Round aria-label="Aumentar" onClick={() => onInc?.(it.id)}>
                                        <Image src="/mais.svg" alt="" width={22} height={2} draggable={false} />
                                    </S.Round>
                                </S.QuantidadeCasse>
                            </S.Td>

                            <S.Td className="right"><S.Subtotal>{brl(it.price * it.quantidade)}</S.Subtotal></S.Td>
                            <S.Td className="right"><S.Remove aria-label="Remover" onClick={() => onRemove?.(it.id)}>
                                <Image src="/lixeira.svg" alt="" width={50} height={50} draggable={false} />
                            </S.Remove></S.Td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <S.Td colSpan={2}><S.FinishBtn onClick={onCheckout}>FINALIZAR PEDIDO</S.FinishBtn></S.Td>
                        <S.Td className="right" colSpan={2}><S.Total ><span>TOTAL</span><strong>{brl(total)}</strong></S.Total></S.Td>
                    </tr>
                </tfoot>
            </S.Table>
            <S.ListMobile>
                {items.map((it) => (
                    <S.Item key={it.id}>
                        <S.Left>
                            <S.PosterMobile>
                                <Image src={it.image} alt={it.title} fill sizes="72px" />
                            </S.PosterMobile>

                            <S.Info>
                                <S.TitleMobile>{it.title}</S.TitleMobile>

                                <S.QuantidadeCasse>
                                    <S.Round aria-label="Diminuir" onClick={() => onDec?.(it.id)}>
                                        <Image src="/menos.svg" alt="Diminuir" width={22} height={22} draggable={false} />
                                    </S.Round>
                                    <S.Pill>{it.quantidade}</S.Pill>
                                    <S.Round aria-label="Aumentar" onClick={() => onInc?.(it.id)}>
                                        <Image src="/mais.svg" alt="Aumentar" width={22} height={22} draggable={false} />
                                    </S.Round>
                                </S.QuantidadeCasse>
                            </S.Info>
                        </S.Left>

                        <S.Right>
                            <S.UnitTop>
                                <S.UnitPrice>{brl(it.price)}</S.UnitPrice>
                                <S.Remove aria-label="Remover" onClick={() => onRemove?.(it.id)}>
                                    <Image src="/lixeira.svg" alt="Remover" width={20} height={20} draggable={false} />
                                </S.Remove>
                            </S.UnitTop>

                            <S.SubtotalBlock>
                                <span>SUBTOTAL</span>
                                <strong>{brl(it.price * it.quantidade)}</strong>
                            </S.SubtotalBlock>
                        </S.Right>
                    </S.Item>
                ))}

                <S.MobileFooter>
                    <S.Total><span>TOTAL</span><strong>{brl(total)}</strong></S.Total>
                    <S.FinishBtn onClick={onCheckout}>FINALIZAR PEDIDO</S.FinishBtn>
                </S.MobileFooter>
            </S.ListMobile>

        </S.Wrap>

    );
}
