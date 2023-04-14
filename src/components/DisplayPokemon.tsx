import PokemonResource from "../types/pokemondata.type";

function DisplayPokemon(pokemon: {
	name: string;
	pokemonRequest: PokemonResource | any;
}) {
	let pokemonElement: PokemonResource = pokemon.pokemonRequest;

  let typesList : any = [];
	let content: JSX.Element;
	if (pokemonElement.id === 0) {
		content = <div>Pas de pokemon sélectionné</div>;
	} else {
    
    pokemonElement.types.forEach((type: any, index: number)=>{
    typesList[index] = type.type.name;
  });
		content = (
			<div>
				<div>NOM : {pokemonElement.name}</div>
				<div>ID : {pokemonElement.id}</div>
				<img src={pokemonElement.sprites.front_default} alt="pokemon de face" />
				<img src={pokemonElement.sprites.back_default} alt="pokemon de dos" />
        <div>TYPES : </div>
				<ul>{typesList.map((name: string) => (<li>{name}</li>))}</ul>
			</div>
		);
	}

	return <div>{content}</div>;
}

export default DisplayPokemon;
