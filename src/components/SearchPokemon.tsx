import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokeapiService from "../services/pokeapi.service";
import DisplayPokemon from "./DisplayPokemon";

function SearchPokemon(): JSX.Element {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonRequest, setPokemonRequest] = useState({
		name: "",
		id: 0,
		sprites: {
			back_default: "",
			front_default: "",
		},
	});

	function search() {
		PokeapiService.findByName(pokemonName)
			.then((result) => {
				setPokemonRequest(result.data);
			})
			.catch((error) => {
				console.log(error);
				alert("Ce pokemon " + pokemonName + " n'existe pas");
			});
	}

	function handleInput(e: React.FormEvent<HTMLInputElement>): void {
		setPokemonName(e.currentTarget.value);
	}

	useEffect(()=>{
		document.title = pokemonRequest.name;
	}, [pokemonRequest]);

	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<div>
					<p>Entrez un nom ou un numéro : </p>
					<input type="text" value={pokemonName} onChange={handleInput} />
					<button type="submit" onClick={search}>
						capturer
					</button>
				</div>
				<br />
				<div id="detail">
					<Outlet />
				</div>
				<div>
					<DisplayPokemon name={pokemonName} pokemonRequest={pokemonRequest} />
				</div>
			</header>
		</div>
	);
}
export default SearchPokemon;
