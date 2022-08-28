import { memo } from "react";
import { Modal } from "flowbite-react";
import { PokemonInterface } from "../../Hooks/useListPokedex";
interface ModalProps {
  show: boolean;
  onClose: () => void;
  pokemon: PokemonInterface;
}
function ModalDetailPokemon(props: ModalProps) {
  const { show, onClose, pokemon } = props;
  return (
    <div>
      <Modal size="md" show={show} onClose={onClose}>
        <Modal.Header>Detail Pokemon</Modal.Header>
        <Modal.Body>
          {pokemon && (
            <div className="flex flex-col justify-center items-center">
              <h1 className="md:text-2xl text-xl mb-3">{pokemon.name}</h1>

              <img
                className="md:w-[160px] md:h-[160px] w-[100px] h-[100px] mb-3 "
                alt={pokemon.name}
                src={pokemon.sprites.other.dream_world.front_default}
              />
              <h1 className="text-xl mb-3 ">Types</h1>

              <div className="flex flex-wrap gap-2  mb-3">
                {pokemon.types.map((type: any, i: number) => (
                  <div className="px-2 py-1 bg-gray-800 text-white" key={i}>
                    <p data-testid="pokemon-detail-type" className="text-sm">
                      {type.type.name}
                    </p>
                  </div>
                ))}
              </div>
              <h1 className="text-xl mb-3">Abilities</h1>
              <div className="flex flex-wrap gap-2 mb-3">
                {pokemon.abilities.map((ab: any, i: number) => (
                  <div className="px-2 py-1 bg-red-800 text-white" key={i}>
                    <p
                      data-testid="pokemon-detail-abilities"
                      className="text-sm"
                    >
                      {ab.ability.name}
                    </p>
                  </div>
                ))}
              </div>
              <h1 className="text-xl mb-3">Stats</h1>
              {pokemon.stats.map((stat: any, i: number) => (
                <p key={i} className="m-0" data-testid="pokemon-detail-stats">
                  {stat.stat.name} : {stat.base_stat}
                </p>
              ))}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default memo(ModalDetailPokemon);
