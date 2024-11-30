import { Ipokemon } from '../../interfaces';
import * as sc from './styles';

interface ICard{
    pokemon: Ipokemon
    next: (url: string) => void;  
}

const Card = ({ pokemon, next }: ICard) => {
  return (
    <sc.Card key={pokemon.name} onClick={() => next(pokemon.url)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </sc.Card>
  );
};

export default Card;