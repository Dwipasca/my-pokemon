import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// lib
import { GET_POKEMON } from "../../lib/api";

// style
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #e1e2e1;
  width: 480px;
  min-height: 100vh;
`;

const Index = () => {
  let params = useParams();

  const [pokemon, setPokemon] = useState(null);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      name: params.pokemonName,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  // if (loading) return "Loading..";
  if (error) return "Error";

  console.log(pokemon);

  return (
    <Container>
      <h1>Detail Pokemon</h1>
      <div>
        {loading ? <p>Loading...</p> : pokemon && <h2>{pokemon.name}</h2>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemon && (
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          )
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemon &&
          pokemon.types?.map((type, idx) => <p key={idx}>{type.type?.name}</p>)
        )}
      </div>
      <div>
        <strong>Moves</strong>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemon &&
          pokemon.moves?.map((move, idx) => <p key={idx}>{move.move.name}</p>)
        )}
      </div>

      <button>Catch Pokemon</button>
    </Container>
  );
};

export default Index;
