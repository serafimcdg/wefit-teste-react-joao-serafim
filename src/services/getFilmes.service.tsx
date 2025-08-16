import { IFilme } from "@/interfaces/Filme.interface";
import { RawMovie, RawResponse } from "@/interfaces/RetornoFilme.interface";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://wefit-movies.vercel.app';
const MOVIES_URL = `${URL}/api/movies`;

const toIFilme = (m: RawMovie): IFilme => ({
  id: m.id,
  title: m.title,
  price: Number(m.price),
  image: m.image,
  quantidade: 0,
});

export async function getFilmes(signal?: AbortSignal): Promise<IFilme[]> {
  const { data } = await axios.get<RawResponse>(MOVIES_URL, { signal });
  return (data?.products ?? []).map(toIFilme);
}