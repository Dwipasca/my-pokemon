import React from "react";

import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// pages
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import MyPokemonList from "./pages/my-pokemon-list";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:pokemonName/detail" element={<PokemonDetail />} />
        <Route path="/my-pokemon-list" element={<MyPokemonList />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
