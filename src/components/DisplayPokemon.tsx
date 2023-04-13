

type pokemonResource = {
  id: number
  name: string,
}

function DisplayPokemon(pokemon:{name: string, pokemonRequest: pokemonResource}) {
  let pokemonElement: pokemonResource = pokemon.pokemonRequest;

  return (
    <div>
      un test
      <div>{pokemonElement.name}</div>
    </div>
  )
}

export default DisplayPokemon;