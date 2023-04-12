import { SetStateAction } from "react";
import PokeapiService from "../services/pokeapi.service";

function SearchPokemon(pokemon:{pokemonName: string, setPokemonName: React.Dispatch<SetStateAction<string>>}) {
  let pokemonRequest:any;
  const search = (event: React.MouseEvent<HTMLButtonElement>)=> {
    event.preventDefault();

    const button = event.target;
    // pokemon.setPokemonName(input)
    console.log('clic');
    console.log(button);
  }
  console.log(pokemonRequest);
  return(
    <div>
      <input type="text" />
      <button onClick={search} >capturer</button>
    </div>
  )
}
export default SearchPokemon