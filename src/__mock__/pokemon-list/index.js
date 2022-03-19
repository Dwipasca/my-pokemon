import { gql } from "@apollo/client";

const GET_POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

const MOCK_POKEMON_LIST = [
  {
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/5/",
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/6/",
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/7/",
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/8/",
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    url: "https://pokeapi.co/api/v2/pokemon/10/",
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
];

export const MOCK_GET_POKEMON_LIST = [
  {
    request: {
      query: GET_POKEMON_LIST,
      variables: {
        limit: 10,
        offset: 0,
      },
    },
    result: {
      data: { pokemons: { results: MOCK_POKEMON_LIST } },
    },
  },
];
