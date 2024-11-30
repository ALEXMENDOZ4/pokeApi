import { useEffect, useState } from 'react';
import * as sc from "./styles";
import { Ipokemon } from '../../shared/interfaces';
import { getAllPokemons, getPokemon, URL } from '../../shared/services';
import toast from 'react-hot-toast';
import Loading from '../../shared/components/Loading/Loading';
import Input from '../../shared/components/Input/Input';
import { useNavigate } from "react-router-dom";
import Card from '../../shared/components/Card/Card';
import Pagination from '../../shared/components/Pagination/Pagination';
import pokebola from '../../assets/pokebola.gif';
import useLoading from '../../shared/hook/useLoading';

const Home = () => {
  const [pokemons, setPokemons] = useState<Ipokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Ipokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [alertShown, setAlertShown] = useState(false);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);  

  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  type skipImage = Omit<Ipokemon, "image">;

  useEffect(() => {
    fetchPokemosWithImages(URL);
  }, []);

  const fetchPokemosWithImages = async (url: string) => {
    setLoading(true);

    try {
      const response = await getAllPokemons(url);
      const resultsWithImages = await Promise.all(
        response.results.map(async (pokemon: skipImage) => {
          const pokemonDetails = await getPokemon(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonDetails.sprites.front_default,
            url: pokemon.url,
          };
        })
      );
      setPokemons(resultsWithImages);
      setFilteredPokemons(resultsWithImages);

      const limit = 20;
      const total = Math.ceil(response.count / limit);
      setTotalPages(total);
      setNextUrl(response.next);
      setPrevUrl(response.previous);

      
      setLoading(false);
    } catch (error) {
      console.log("Error fetching pokemons:", error);
      toast.error("Ha ocurrido un error");
      setPokemons([]);
      setLoading(false);
    }
  }

  const timeout = () => {
    setTimeout(() => {
      setAlertShown(false);
    }, 1000);
  }

  const next = (url: string) => {
    getPokemon(url)
      .then((data) => {
        const id = data.id;
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.log("Error fetching Pokémon:", err);
        toast.error("Id no encontrado");
      });
  }

  const OnGoBack = () => {
    if (!prevUrl) {
      if (!alertShown) {
        toast.error('Has alcanzado el límite');
        setAlertShown(true);
        timeout();
      }
      return;
    }

    const correctedUrl = prevUrl.replace(/limit=\d+/g, "limit=20");
    fetchPokemosWithImages(correctedUrl);
    setCurrentPage(currentPage - 1); 
    setAlertShown(false);
  }

  const OnNext = () => {
    if (!nextUrl) {
      if (!alertShown) {
        toast.error('Has alcanzado el límite');
        setAlertShown(true);
        timeout();
      }
      return;
    }

    const correctedUrl = nextUrl.replace(/limit=\d+/g, "limit=20");
    fetchPokemosWithImages(correctedUrl);
    setCurrentPage(currentPage + 1);
    setAlertShown(false);
  }

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemons(filtered);
  }

  return (
    <sc.Container>
      {loading && <Loading />}
      <sc.ContainerSearch>
        <Input value={text} onchange={(e) => change(e)} />
      </sc.ContainerSearch>
      <sc.CardContainer className='hide-scroll' $length={!filteredPokemons.length}>
        {!filteredPokemons.length && (
          <sc.NotData>
            <h1>Datos no encontrados</h1>
            <img src={pokebola} alt="pokebola" />
          </sc.NotData>
        )}
        {filteredPokemons.map((pokemon) => (
          <Card pokemon={pokemon} next={next} key={pokemon.name} />
        ))}
      </sc.CardContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        OnGoBack={OnGoBack}
        OnNext={OnNext}
      />
    </sc.Container>
  );
}

export default Home;