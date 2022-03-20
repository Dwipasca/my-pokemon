import { render, screen, waitFor } from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";

import { BrowserRouter } from "react-router-dom";

// mocking data pokemon detail
import { MOCK_GET_POKEMON } from "../../__mock__/pokemon-detail";

import PokemonDetail from "../../pages/pokemon-detail";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <MockedProvider addTypename={false} mocks={MOCK_GET_POKEMON}>
        <PokemonDetail />
      </MockedProvider>
    </BrowserRouter>
  );
};

it("show header page pokemon detail successfully", async () => {
  render(<MockComponent />);

  await waitFor(() => {
    const headerPage = screen.getByText(/pokemon detail/i);
    expect(headerPage).toBeInTheDocument();
  });
});
