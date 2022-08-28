import { PokemonInterface } from "../../Hooks/useListPokedex";
import { memo } from "react";
interface PropPokemon {
  pokemon: PokemonInterface;
  setDetail: (pokemon: PokemonInterface) => void;
}

const Pokemon = (props: PropPokemon) => {
  const { pokemon, setDetail } = props;
  return (
    <div
      data-testid="pokemon-list"
      onClick={() => setDetail(pokemon)}
      className={`min-h-[300px] cursor-pointer hover:shadow-xl ${pokemon.name} border flex flex-col py-[1.5rem] items-center gap-5`}
    >
      <p data-testid="pokemon-id">{`#0${pokemon.id}`}</p>
      <img
        data-testid="pokemon-image"
        className="w-[120px] h-[120px]"
        src={
          pokemon.sprites.other.dream_world.front_default
            ? pokemon.sprites.other.dream_world.front_default
            : pokemon.sprites.front_default
        }
        alt={pokemon.name}
      />
      <h1 data-testid="pokemon-title" className="text-xl">
        {pokemon.name}
      </h1>
      <div className="flex flex-wrap gap-2">
        {pokemon.types.map((type: any, i: number) => (
          <div className="px-2 py-1 bg-gray-800 text-white" key={i}>
            <p data-testid="pokemon-type" className="text-sm">
              {type.type.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Pokemon);
