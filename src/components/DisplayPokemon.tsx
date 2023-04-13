import PokemonResource from "../types/pokemondata.type"

function DisplayPokemon(pokemon:{name: string, pokemonRequest: PokemonResource}) {
  let pokemonElement: PokemonResource = pokemon.pokemonRequest;
  let content: JSX.Element;
  if(pokemonElement.id === 0) {
    content = (<div>Pas de pokemon sélectionné</div>)
  }else { 
    content = (
    <div>
      <div>NOM : {pokemonElement.name}</div>
      <div>ID : {pokemonElement.id}</div>
      <img src={pokemonElement.sprites.front_default} alt='pokemon de face' />
      <img src={pokemonElement.sprites.back_default} alt='pokemon de dos' />
    </div>
      );
  }



  return (
    <div>
      {content}
    </div>
  )
}

export default DisplayPokemon;