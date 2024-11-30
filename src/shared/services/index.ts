import axios from 'axios';
import { IpokemonByid, Ipokemons } from '../interfaces';

export const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const URL_BY_ID = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemons = async (url: string) => {

  try {
    const response = await axios.get<Ipokemons>(url);
    return response.data;
  } catch (err) {
      
    console.log('Error fetching data:', err);
    throw err;
  }
}


export const getPokemon = async (url: string) => {
  try {
    const response = await axios.get<IpokemonByid>(url);
    return response.data;
  } catch (err) {
    console.log("Error fetching data: ", err);
    throw err;
  }
}