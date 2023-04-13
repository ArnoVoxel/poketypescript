

type pokemonResource = {
  id: number
  name: string,
}

function DisplayPokemon(pokemon:{name: string, pokemonRequest: pokemonResource}) {
  let pokemonElement: pokemonResource = pokemon.pokemonRequest;
  let content: JSX.Element;
  if(pokemonElement.id === 0) {
    content = (<div>Pas de pokemon sélectionné</div>)
  }else { 
    content = (
    <div>
      <div>NOM : {pokemonElement.name}</div>
      <div>ID : {pokemonElement.id}</div>
    </div>
      );
  }



  return (
    <div>
      un test
      {content}
    </div>
  )
}

export default DisplayPokemon;