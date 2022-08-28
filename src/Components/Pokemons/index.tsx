import { PokemonInterface } from "../../Hooks/useListPokedex";
import { useState, memo } from "react";
import Pokemon from "../CardPokemon";
import ModalDetailPokemon from "../ModalDetailPokemon";
interface PropPokemons {
  pokemons: PokemonInterface[];
  loading: boolean;
  useInfinity: boolean;
}
function Pokemons(props: PropPokemons) {
  const { pokemons, loading, useInfinity } = props;
  const [detail, setDetail] = useState<PokemonInterface>();
  const [open, setOpen] = useState(false);

  const detailToggle = (detail: PokemonInterface) => {
    setDetail(detail);
    setOpen(true);
  };
  return (
    <div>
      <ModalDetailPokemon
        show={open}
        onClose={() => setOpen(false)}
        pokemon={detail!}
      />
      {loading && <h1 className="text-center text-2xl mb-10">Loading...</h1>}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 justify-center items-center mb-10">
        {pokemons.length === 0 && <div style={{ height: "155rem" }} />}
        {pokemons.map((d: PokemonInterface) => (
          <Pokemon pokemon={d} key={d.id} setDetail={detailToggle} />
        ))}
      </div>
      {useInfinity && <h1 className="text-center text-2xl">Loading...</h1>}
    </div>
  );
}
export default memo(Pokemons);
