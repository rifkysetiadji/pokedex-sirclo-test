import { render, screen } from "@testing-library/react";
import Pokemons from "./index";
test("should render list by data given", () => {
  const data = [
    {
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
    },
  ];

  render(<Pokemons pokemons={data} loading={true} useInfinity={false} />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  expect(screen.queryAllByTestId("pokemon-list").length).toBe(1);
});
