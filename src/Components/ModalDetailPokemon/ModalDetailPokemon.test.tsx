import { render, screen } from "@testing-library/react";

import ModalDetailPokemon from ".";

test("should render data by data given", () => {
  const data = {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    id: 1,
    name: "bulbasaur",
    sprites: {
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
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
  };

  const onClose = jest.fn();

  render(<ModalDetailPokemon pokemon={data} onClose={onClose} show={true} />);

  let pokemontitle = screen.getByText(/bulbasaur/i);
  expect(pokemontitle).toBeInTheDocument();

  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toEqual(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  );

  let types = screen.queryAllByTestId("pokemon-detail-type");
  expect(types.length).toBe(2);
  expect(types[0].innerHTML).toEqual("grass");

  let abilities = screen.queryAllByTestId("pokemon-detail-abilities");
  expect(abilities.length).toBe(2);
  expect(abilities[0].innerHTML).toEqual("overgrow");

  let stats = screen.queryAllByTestId("pokemon-detail-stats");
  expect(stats.length).toBe(6);
  expect(stats[0].innerHTML).toEqual("hp : 45");
});
