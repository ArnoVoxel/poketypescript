import Navbar from "../components/Navbar";
import "../styles/DetailPokemon.css";
import { Ability, Stat, Type } from "../types/pokemon.type";
import PokemonResource from "../types/pokemondata.type";
import fromPokemonResource from "../types/utilities/fromPokemonResource";

function DetailPokemon() {
  let data = localStorage.getItem("pokemonList");
  if (data === null) {
    return (
      <div>
        <h1>Nothing to display</h1>
      </div>
    );
  }

  const pokemonData: PokemonResource[] = [JSON.parse(data)];
  let content = pokemonData.map((pokemon: PokemonResource) => {
    const p = fromPokemonResource.toPokemon(pokemon);
    // list of types
    let types = p.types.map((type: Type, index: number) => {
      return (
        <div key={index + type.name} className="type">
          <p>{type.name}</p>
        </div>
      );
    });
    // list of abilities
    let abilities = p.abilities.map((ability: Ability, index: number) => {
      return (
        <div key={index + ability.name} className="ability">
          <p>{ability.name}</p>
        </div>
      );
    });
    // list of stats
    let stats = p.stats.map((stat: Stat, index: number) => {
      return (
        <div key={index + stat.name} className="statStyle">
          <p>
            {stat.name}: {stat.value}
          </p>
        </div>
      );
    });
    return (
      <div className="pokemonDetail">
        <h1>
          {p.name}{" "}
          <img className="imageDetail" src={p.sprites.front} alt={p.name} />
        </h1>
        <div className="row">
          <div className="types col">
            <h2>Types</h2>
            {types}
          </div>
          <div className="abilities col">
            <h2>Abilities</h2>
            {abilities}
          </div>
          <div className="stats col">
            <h2>Stats</h2>
            {stats}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <div>{content}</div>
      </div>
    </div>
  );
}

export default DetailPokemon;
