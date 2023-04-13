

type pokemonResource = {
  id: number
  name: string,
}

function DisplayPokemon(pokemon:{name: string, pokemonRequest: pokemonResource}) {
  let pokemonElement: pokemonResource = pokemon.pokemonRequest;

  let content: JSX.Element = (
    <div>
      <div>NOM : {pokemonElement.name}</div>
      <div>ID : {pokemonElement.id}</div>
    </div>
      );

      

  return (
    <div>
      un test
      {content}
    </div>
  )
}

export default DisplayPokemon;