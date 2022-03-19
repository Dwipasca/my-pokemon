import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../../lib/api";

// components
import Pokemon from "../../components/pokemon";

const Index = () => {
  const [page, setPage] = useState(0);
  const [listPokemon, setListPokemon] = useState([]);

  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 10, offset: page },
  });

  useEffect(() => {
    if (loading === false && data.pokemons?.results) {
      setListPokemon([...listPokemon, ...data.pokemons?.results]);
    }
  }, [data]);

  const loadMore = () => {
    setPage(page + 10);
  };

  if (error) return "Error";

  return (
    <div style={{ width: "480px", backgroundColor: "turquoise" }}>
      <h1>Pokemon List</h1>

      {loading
        ? "Loading.."
        : listPokemon.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                img={pokemon.image}
              />
            );
          })}

      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default Index;
