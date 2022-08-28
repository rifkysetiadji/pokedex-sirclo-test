import { useState, useEffect } from "react";
import { useDetectBottom } from "../useDetectBottom";
export interface PokemonInterface {
  id: number;
  name: string;
  [key: string]: any;
}
export const useListPokedex = (ref: any) => {
  const API_DEFAULT_URL: string = process.env.REACT_APP_API + "pokemon" || "";

  const [pokemons, setPokemon] = useState<PokemonInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [next_url, setNextUrl] = useState<string>(API_DEFAULT_URL);
  const [useInfinity, setUseInfinity] = useState<boolean>(true);
  const { isVisible } = useDetectBottom(ref);
  useEffect(() => {
    if (isVisible && useInfinity) {
      getPokemon();
    }
  }, [isVisible]);

  const getPokemon = async () => {
    setUseInfinity(true);
    setLoading(true);
    fetch(next_url)
      .then((res) => res.json())
      .then((data) => {
        setNextUrl(data.next);

        Promise.all(
          data.results.map(async (d: any) => {
            const res = await fetch(API_DEFAULT_URL + `/${d.name}`);
            const data = await res.json();
            return data;
          })
        ).then((result: any) => {
          setPokemon([...pokemons, ...result]);
          setLoading(false);
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getPokemonByFilter = async (url: string) => {
    setLoading(true);
    setUseInfinity(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Promise.all(
          data.pokemon.map(async (d: any) => {
            const res = await fetch(API_DEFAULT_URL + `/${d.pokemon.name}`);
            const data = await res.json();
            return data;
          })
        ).then((result: any) => {
          setPokemon(result);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { pokemons, loading, useInfinity, getPokemon, getPokemonByFilter };
};
