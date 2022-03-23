import React, { useState } from "react";

export const PokemonContext = React.createContext({
  myPokemonList: [],
  catchPokemon: () => {},
  releasePokemon: () => {},
});

export const PokemonProvider = ({ children }) => {
  const [myPokemonList, setMyPokemonList] = useState([]);

  const addPokemonToMyPokemonList = (pokemon, nickname) => {
    const pokemonPayload = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon?.types.map((type) => type.type?.name),
      sprites: pokemon.sprites?.front_default,
      nickname,
    };

    const payload = [...myPokemonList, pokemonPayload];

    setMyPokemonList(payload);
  };

  const deletePokemonFromMyPokemonList = (id) => {
    const newPokemonList = [...myPokemonList];

    newPokemonList.splice(id, 1);

    setMyPokemonList(newPokemonList);
  };

  return (
    <PokemonContext.Provider
      value={{
        myPokemonList: myPokemonList,
        catchPokemon: addPokemonToMyPokemonList,
        releasePokemon: deletePokemonFromMyPokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
