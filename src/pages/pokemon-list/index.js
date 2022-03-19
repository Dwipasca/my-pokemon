import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../../lib/api";

// components
import Pokemon from "../../components/pokemon";

// style
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #e1e2e1;
  width: 480px;
  min-height: 100vh;
`;

const Index = () => {
  const [page, setPage] = useState(0);
  const [listPokemon, setListPokemon] = useState([]);

  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 10, offset: page },
  });

  useEffect(() => {
    if (loading === false && data) {
      setListPokemon([...listPokemon, ...data.pokemons?.results]);
    }
  }, [data]);

  const loadMore = () => {
    setPage(page + 10);
  };

  if (error) return "Error";

  return (
    <Container>
      <h1>Pokemon List</h1>

      {loading ? (
        <p>Loading..</p>
      ) : (
        listPokemon.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.name}
              name={pokemon.name}
              img={pokemon.image}
            />
          );
        })
      )}

      <button onClick={loadMore}>Load more</button>
    </Container>
  );
};

export default Index;
