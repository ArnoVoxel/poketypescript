import PokeapiService from "../services/pokeapi.service";
import PokemonResource from "../types/pokemondata.type"
import SearchPokemonType from "../types/SearchPokemonType";

function SearchPokemon(pokemon: SearchPokemonType | any): JSX.Element {
	let pokemonRequest: PokemonResource;
	function search() {
		PokeapiService.findByName(pokemon.pokemonName)
    .then((result) => {
      pokemonRequest = result.data;
      console.log(pokemonRequest);
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
		<div className="App">
			TEST
      {/* <SearchPokemon pokemonName={pokemon.pokemonName} setPokemonName={pokemon.setPokemonName} setPokemonRequest={pokemon.setPokemonRequest} /> */}
      {/* <DisplayPokemon name={pokemonName} pokemonRequest={pokemonRequest} /> */}
      <header className="App-header">
				<div>
					<input type="text" value={pokemon.pokemonName} onChange={handleInput} />
					<button type="submit" onClick={search}>
						capturer
					</button>
				</div>
      </header>
    </div>
	);
}
export default SearchPokemon;
