import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { Ipokemon } from "../../interfaces";

describe("Card Component", () => {

  const mockPokemon: Ipokemon = {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    url: "https://pokeapi.co/api/v2/pokemon/25/"
  };

  const mockNext = jest.fn(); // Simula la función `next`

  it("renders the card with the given name", () => {
    render(<Card pokemon={mockPokemon} next={mockNext}/>);

    // Verifica si el texto "Pikachu" está presente en el documento
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
  });
});