import { IpokemonByid } from "../../../../shared/interfaces";
import { capitalizeFirstLetter } from "../../../../shared/utils";
import * as sc from './styles';

interface ITypesPokemon{
  selectedPokemon: IpokemonByid;
}


const Statistics = ({ selectedPokemon }: ITypesPokemon) => {

  return (
    <div>
      <sc.StatList>
        <h2>Habilidades:</h2>
        {selectedPokemon?.abilities.map((item, index: number) => (
          <li key={index}>
            {capitalizeFirstLetter(item.ability.name)}
            {item.is_hidden && "(Habilidad oculta)"}
          </li>
        ))}
      </sc.StatList>
      <sc.StatList>
        <h2>Estadísticas:</h2>
        {selectedPokemon?.stats.map((stat, index: number) => (
          <li key={index}>
            <span>{capitalizeFirstLetter(stat.stat.name)}</span>
            <strong>{stat.base_stat}</strong>
          </li>
        ))}
      </sc.StatList>
    </div>
  );
};

export default Statistics;