import { useEffect, useState, KeyboardEvent } from "react";
import Navbar from "../components/Navbar";
import PokeapiService from "../services/pokeapi.service";
import DisplayPokemon from "./DisplayPokemon";
import "../styles/SearchPokemon.css";
import pokeLogo from "../assets/pokeball.png";
import PokemonResource from "../types/pokemondata.type";

function SearchPokemon(): JSX.Element {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonRequest, setPokemonRequest] = useState({
    name: "",
    id: 0,
    sprites: {
      back_default: "",
      front_default: "",
    },
  } as PokemonResource);

  function search() {
    if (pokemonName === "") {
      alert("Veuillez entrer un nom ou un numéro de pokemon");
      return;
    }
    PokeapiService.findByName(pokemonName)
      .then((result) => {
        setPokemonRequest(result);
        let pokemonList = JSON.stringify(result);
        localStorage.setItem("pokemonList", pokemonList);
      })
      .catch((error) => {
        console.log(error);
        alert("Ce pokemon " + pokemonName + " n'existe pas");
      });
  }

  function handleInput(e: React.FormEvent<HTMLInputElement>): void {
    setPokemonName(e.currentTarget.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      search();
    }
  }

  useEffect(() => {
    document.title = pokemonRequest.name;
  }, [pokemonRequest]);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div>
          <p>Entrez un nom (anglais) ou un numéro : </p>
          <input
            type="text"
            value={pokemonName}
            onChange={handleInput}
            onKeyUp={handleKeyDown}
          />
          <button className="searchButton" type="submit" onClick={search}>
            <img className="imageButton" src={pokeLogo} alt="capturer" />
          </button>
        </div>
        <br />
        <div>
          <DisplayPokemon name={pokemonName} pokemonRequest={pokemonRequest} />
        </div>
      </header>
    </div>
  );
}
export default SearchPokemon;
