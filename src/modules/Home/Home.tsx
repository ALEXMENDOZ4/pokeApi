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
  const [allPokemons, setAllPokemons] = useState<Ipokemon[]>([]);
  const [currentPokemons, setCurrentPokemons] = useState<Ipokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Ipokemon[]>([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();
  const itemsPerPage = 20;

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const fetchAllPokemons = async () => {
    setLoading(true);
    const allPokemons: Ipokemon[] = [];
    let nextUrl: string | null = URL;
  
    try {
      while (nextUrl) {
        const response = await getAllPokemons(nextUrl);
  
        const resultsWithImages = await Promise.all(
          response.results.map(async (pokemon: Ipokemon) => {
            const pokemonDetails = await getPokemon(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonDetails.sprites.front_default,
              url: pokemon.url,
            };
          })
        );
  
        allPokemons.push(...resultsWithImages);
  
        nextUrl = response.next;
      }
  
      setAllPokemons(allPokemons);
      setFilteredPokemons(allPokemons);
      setTotalPages(Math.ceil(allPokemons.length / itemsPerPage));
      updateCurrentPokemons(allPokemons, 1);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching pokemons:", error);
      toast.error("Ha ocurrido un error");
      setLoading(false);
    }
  };
  

  const updateCurrentPokemons = (pokemons: Ipokemon[], page: number) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPokemons(pokemons.slice(start, end));
  };


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemons(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    updateCurrentPokemons(filtered, 1);
    setCurrentPage(1);
  };


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


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      updateCurrentPokemons(filteredPokemons, nextPage);
    }
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      updateCurrentPokemons(filteredPokemons, prevPage);
    }
  };


  return (
    <sc.Container>
      {loading && <Loading />}
      <sc.ContainerSearch>
        <Input value={text} onchange={(e) => handleSearch(e)} />
      </sc.ContainerSearch>
      <sc.CardContainer className="hide-scroll" $length={!currentPokemons.length}>
        {!currentPokemons.length && (
          <sc.NotData>
            <h1>Datos no encontrados</h1>
            <img src={pokebola} alt="pokebola" />
          </sc.NotData>
        )}
        {currentPokemons.map((pokemon) => (
          <Card pokemon={pokemon} next={next} key={pokemon.name} />
        ))}
      </sc.CardContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        OnGoBack={handlePrevPage}
        OnNext={handleNextPage}
      />
    </sc.Container>
  );
};

export default Home;