import { useRef, useEffect } from "react";
import { useListPokedex } from "../../../Hooks/useListPokedex";
import Pokemonts from "../../../Components/Pokemons";
import FilterPokemon from "../../../Components/FilterPokemon";
import { useFilterData } from "../../../Hooks/useFilterData";
export default function List() {
  const ref = useRef<HTMLDivElement>(null);
  const { pokemons, loading, getPokemon, getPokemonByFilter, useInfinity } =
    useListPokedex(ref);
  const { types } = useFilterData();
  useEffect(() => {
    getPokemon();
  }, []);
  const getFilterPokemon = (url: string) => {
    getPokemonByFilter(url);
  };
  return (
    <div data-testid="page-pokedex-list">
      <FilterPokemon types={types} getFilterPokemon={getFilterPokemon} />
      <Pokemonts
        pokemons={pokemons}
        loading={loading}
        useInfinity={useInfinity}
      />

      <div ref={ref}></div>
    </div>
  );
}
