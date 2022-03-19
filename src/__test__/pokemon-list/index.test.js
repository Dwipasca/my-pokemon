import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";

// mocking data pokemon list
import { MOCK_GET_POKEMON_LIST } from "../../__mock__/pokemon-list";

// components
import PokemonList from "../../pages/pokemon-list";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <MockedProvider addTypename={false} mocks={MOCK_GET_POKEMON_LIST}>
        <PokemonList />
      </MockedProvider>
    </BrowserRouter>
  );
};

it("show pokemon list successfully", async () => {
  render(<MockComponent />);

  await waitFor(() => {
    const listPokemon = screen.getAllByTestId("list");
    expect(listPokemon.length).toBe(10);
  });
});
