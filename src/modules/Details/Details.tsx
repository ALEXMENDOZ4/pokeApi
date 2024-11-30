import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../shared/components/Button/Button';
import * as sc from './styles';
import { getPokemon, URL_BY_ID } from '../../shared/services';
import Loading from '../../shared/components/Loading/Loading';
import { IpokemonByid } from '../../shared/interfaces';
import Statistics from './components/Statistics/Statistics';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import SvgComponent from '../../assets/Pokemon';
import toast from 'react-hot-toast';
import useLoading from '../../shared/hook/useLoading';

const Details = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState<IpokemonByid>();

  const { loading, setLoading } = useLoading();

  
  useEffect(() => {

    setLoading(true);

    if (id) {
      getPokemon(`${URL_BY_ID}/${id}`)
        .then((data) => {
          setSelectedPokemon(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error fetching Pokémon:", err);
          toast.error("Ha ocurrido un error");
          setLoading(false);
        });
    }
  }, [id]);


  const goBack = () => {
    navigate("/");
  }

  return (
    <sc.Container>
      { loading && <Loading/> }
      <div className='image'>
        <SvgComponent/>
      </div>
      <sc.Grid>
        <PokemonInfo selectedPokemon={selectedPokemon!}/>
        <Statistics selectedPokemon={selectedPokemon!}/>
      </sc.Grid>
      <sc.ContainerButton>
        <Button Onclick={goBack}>Regresar</Button>
      </sc.ContainerButton>
    </sc.Container>
  )
}

export default Details;