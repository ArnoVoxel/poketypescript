import { Link } from "react-router-dom";
import PokemonResource, { PokemonType } from "../types/pokemondata.type";
import "../styles/Navbar.css";
import "../styles/DisplayPokemon.css";
import fromPokemonResource from "../types/utilities/fromPokemonResource";
import { Type } from "../types/pokemon.type";

function DisplayPokemon(pokemon: {
  name: string;
  pokemonRequest: PokemonResource;
}) {
  const pokemonElement = pokemon.pokemonRequest;
  let content: JSX.Element;
  if (pokemonElement.id === 0) {
    content = <div>Pas de pokemon sélectionné</div>;
  } else {
    const pokemon = fromPokemonResource.toPokemon(pokemonElement);

    content = (
      <div>
        <div>
          NOM : {pokemon.name}{" "}
          <button className="navbarButton">
            <Link to={"/display"}>Détails</Link>
          </button>
        </div>
        <div>ID : {pokemon.id}</div>
        <img
          src={pokemon.sprites.front}
          alt={"missing " + pokemon.name + " picture"}
        />
        <img
          src={pokemon.sprites.back}
          alt={"missing " + pokemon.name + " picture"}
        />
        <div>TYPES : </div>
        {pokemon.types.map((type: Type, idx: number) => (
          <div key={idx} className="listStyle">
            {type.name}
          </div>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default DisplayPokemon;
