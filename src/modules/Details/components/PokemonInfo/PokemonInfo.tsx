import { IpokemonByid } from "../../../../shared/interfaces";
import TypesPokemon from "../TypesPokemon/TypesPokemon";
import * as sc from "./styles.ts";


interface ITypesPokemon{
    selectedPokemon: IpokemonByid;
}

const PokemonInfo = ({ selectedPokemon }: ITypesPokemon) => {
  return (
    <sc.Container>
      <img
        src={selectedPokemon?.sprites.other.dream_world.front_default}
        alt="Imagen no disponible"
      />
      <div>
        <div className="name">{selectedPokemon?.name}</div>
        <TypesPokemon selectedPokemon={selectedPokemon!} />
      </div>
    </sc.Container>
  );
};

export default PokemonInfo;