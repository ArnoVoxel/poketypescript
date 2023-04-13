import { SetStateAction } from "react";
import PokemonResource from "./pokemondata.type"

export default interface  SearchPokemon {
  pokemonName: string;
	setPokemonName: React.Dispatch<SetStateAction<string>>;
	setPokemonRequest: React.Dispatch<React.SetStateAction<PokemonResource>>;
}