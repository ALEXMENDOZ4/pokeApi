import { useEffect, useState } from 'react';
import Button from '../../shared/components/Button/Button';
import * as sc from './styles';
import { useNavigate } from "react-router-dom";
import { getPokemon, URL_BY_ID } from '../../shared/services';
import Loading from '../../shared/components/Loading/Loading';
import toast from 'react-hot-toast';
import useLoading from '../../shared/hook/useLoading';

const NotFound = () => {

  const navigate = useNavigate();
  const [image, setImage] = useState("");
  
  const { loading, setLoading } = useLoading();

  const randomId = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

  useEffect(() => {

    setLoading(true);

    getPokemon(`${URL_BY_ID}/${randomId}`)
      .then((data) => {
        setImage(data.sprites.other.dream_world.front_default);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching Pokémon:", err);
        setLoading(false);
        toast.error("Ha ocurrido un error");
      });
  }, []);

  const goBack = () => {
    navigate("/");
  }

  return (
    <sc.NotFound>
      { loading && <Loading/> }
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <img src={image} alt="Imagen no encontrada" />
      <div>
        <Button Onclick={goBack}>
          Regresar
        </Button>
      </div>
    </sc.NotFound>
  );
};

export default NotFound;