import { Link } from "react-router-dom";
import PokemonResource from "../types/pokemondata.type";
import '../styles/Navbar.css';
import '../styles/DisplayPokemon.css';

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
				<div>NOM : {pokemonElement.name} <button className="navbarButton"><Link to={"/display"}>Détails</Link></button></div>
				<div>ID : {pokemonElement.id}</div>
				<img src={pokemonElement.sprites.front_default} alt={"missing "+pokemonElement.name+" picture"} />
				<img src={pokemonElement.sprites.back_default} alt={"missing "+pokemonElement.name+" picture"} />
        <div>TYPES : </div>
				{typesList.map((name: string, index: number) => (<div key={index} className="listStyle">{name}</div>))}
			</div>
		);
	}

	return <div>{content}</div>;
}

export default DisplayPokemon;
