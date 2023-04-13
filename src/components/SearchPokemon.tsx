import { SetStateAction } from "react";
import PokeapiService from "../services/pokeapi.service";

type pokemonResource = {
	id: number;
	name: string;
};

function SearchPokemon(pokemon: {
	pokemonName: string;
	setPokemonName: React.Dispatch<SetStateAction<string>>;
	setPokemonRequest: React.Dispatch<React.SetStateAction<pokemonResource>>;
}) {
	let pokemonRequest: pokemonResource;
	function search() {
		PokeapiService.findByName(pokemon.pokemonName)
    .then((result) => {
      pokemonRequest = result.data;
      pokemon.setPokemonRequest(pokemonRequest);
    })
    .catch((error) => {
      console.log(error);
      alert('Ce pokemon '+ pokemon.pokemonName +' n\'existe pas');
    });
	}

	function handleInput(e: React.FormEvent<HTMLInputElement>): void {
		pokemon.setPokemonName(e.currentTarget.value);
	}

	return (
		<div>
			<input type="text" value={pokemon.pokemonName} onChange={handleInput} />
			<button type="submit" onClick={search}>
				capturer
			</button>
		</div>
	);
}
export default SearchPokemon;
