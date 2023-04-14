import Navbar from "../components/Navbar";
import '../styles/DetailPokemon.css'

function DetailPokemon () {
  if (localStorage.getItem('pokemonList') === null) {
    return (
      <div>
        <h1>Nothing to display</h1>
      </div>
    )
  }
  
  let data: any = localStorage.getItem('pokemonList');
  let pokemonData = [JSON.parse(data)];
  let content = pokemonData.map((pokemon: any) => {
    // list of types
    let types = pokemon.types.map((type: any, index: number) => {
      return (
        <div key={index+type.type.name} className="type">
          <p>{type.type.name}</p>
        </div>
      )
    });
    // list of abilities
    let abilities = pokemon.abilities.map((ability: any, index: number) => {
      return (
        <div key={index+ability.ability.name} className="ability">
          <p>{ability.ability.name}</p>
        </div>
      )
    });
    // list of stats
    let stats = pokemon.stats.map((stat: any, index: number) => {
      return (
        <div key={index+stat.stat.name} className="statStyle">
          <p>{stat.stat.name}: {stat.base_stat}</p>
        </div>
      )
    }
    );
    return (
      <div className="pokemonDetail">
        <h1>{pokemon.name} <img className="imageDetail" src={pokemon.sprites.front_default} alt={pokemon.name} /></h1>
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
    )
  });
  
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <div>{content}</div>
      </div>
    </div>
  )
}

export default DetailPokemon