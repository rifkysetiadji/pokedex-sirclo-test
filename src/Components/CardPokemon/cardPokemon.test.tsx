import { render, screen } from "@testing-library/react";

import CardPokemon from ".";

test("should render data by data given", () => {
  const data = {
    id: 1,
    name: "bulbasaur",
    order: 1,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          front_female: null,
        },
      },
    },
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    weight: 69,
  };
  const setDetail = jest.fn();

  render(<CardPokemon pokemon={data} setDetail={setDetail} />);

  let pokemonid = screen.getByText(/#01/i);
  expect(pokemonid).toBeInTheDocument();

  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toEqual(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  );

  let pokemontitle = screen.getByText(/bulbasaur/i);
  expect(pokemontitle).toBeInTheDocument();

  let pokemontypes = screen.queryAllByTestId("pokemon-type");
  expect(pokemontypes.length).toBe(2);
  expect(pokemontypes[0].innerHTML).toEqual("grass");
});
