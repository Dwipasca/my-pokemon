import { gql } from "@apollo/client";

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const MOCK_POKEMON = {
  id: 10,
  name: "caterpie",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  types: [
    {
      type: {
        name: "bug",
      },
    },
  ],
  moves: [
    {
      move: {
        name: "tackle",
      },
    },
    {
      move: {
        name: "string-shot",
      },
    },
    {
      move: {
        name: "snore",
      },
    },
    {
      move: {
        name: "bug-bite",
      },
    },
    {
      move: {
        name: "electroweb",
      },
    },
  ],
};

export const MOCK_GET_POKEMON = [
  {
    request: {
      query: GET_POKEMON,
      variables: {
        name: "caterpie",
      },
    },
    result: {
      data: { pokemon: { results: MOCK_POKEMON } },
    },
  },
];
