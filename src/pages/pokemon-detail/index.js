import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// lib
import { GET_POKEMON } from "../../lib/api";
import { PokemonContext } from "../../context";

// style
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #e1e2e1;
  width: 480px;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 10px 5px;
  min-width: 120px;
  height: 40px;
  background-color: azure;
  font-size: small;
`;

const Button = styled.button`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Modal = styled.div`
  width: 200px;
  height: 200px;
  background-color: cyan;
`;

const Index = () => {
  let params = useParams();
  const { myPokemonList, catchPokemon } = useContext(PokemonContext);

  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState("");

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

  if (error) return "Error";

  const handleCatchPokemon = () => {
    const random = Math.random();
    const successRate = 0.5;

    if (random > successRate) {
      setOpen(true);
    } else {
      alert("failed to catch pokemon");
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmitModal = () => {
    if (pokemonName) {
      const isPokemonNameExist = myPokemonList.find(
        (pokemon) => pokemon.nickname === pokemonName
      );

      if (!isPokemonNameExist) {
        catchPokemon(pokemon, pokemonName);
        alert("Successful catching pokemon");
      } else {
        alert("Nickname already used");
      }
    }
  };

  return (
    <Container>
      <Title>Pokemon Detail</Title>
      <Header>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemon && (
            <img
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              style={{ width: "92px", height: "92px" }}
            />
          )
        )}

        {loading ? <p>Loading...</p> : pokemon && <h2>{pokemon.name}</h2>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemon &&
          pokemon.types?.map((type, idx) => <p key={idx}>{type.type?.name}</p>)
        )}
      </Header>
      <div>
        <strong>Moves</strong>
        <MovesWrapper>
          {loading ? (
            <p>Loading...</p>
          ) : (
            pokemon &&
            pokemon.moves?.map((move, idx) => (
              <Badge key={idx}>
                <p>{move.move.name}</p>
              </Badge>
            ))
          )}
        </MovesWrapper>
      </div>

      {open > 0 && (
        <Modal>
          <input
            type="text"
            name="pokemonName"
            id="pokemonName"
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button onClick={handleCloseModal}>Close</button>
          <button onClick={handleSubmitModal}>Save</button>
        </Modal>
      )}

      <Button onClick={handleCatchPokemon}>Catch Pokemon</Button>
    </Container>
  );
};

export default Index;
