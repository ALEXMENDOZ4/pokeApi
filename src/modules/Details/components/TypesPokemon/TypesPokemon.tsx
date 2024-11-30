import { IpokemonByid } from '../../../../shared/interfaces';
import * as sc from './styles';

interface ITypesPokemon{
  selectedPokemon: IpokemonByid;
}

const TypesPokemon = ({selectedPokemon}: ITypesPokemon) => {

  return (
    <sc.TypesContainer>
      <span>Tipo de pokemon:</span>
      {selectedPokemon?.types.map((t, index) => (
        <sc.TypeBadge key={index} className={t.type.name}>
          {t.type.name}
        </sc.TypeBadge>
      ))}
    </sc.TypesContainer>
  );
};

export default TypesPokemon;