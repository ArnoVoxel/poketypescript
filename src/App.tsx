import React, { useState } from 'react';
import logo from './logo.svg';
import Navbar from '../src/components/Navbar';
import SearchPokemon from './components/SearchPokemon';
import DisplayPokemon from './components/DisplayPokemon';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonRequest, setPokemonRequest] = useState({
    id:0,
    name: ''
  });
  
  return (
    <div className="App">
      <Navbar />
      <SearchPokemon pokemonName={pokemonName} setPokemonName={setPokemonName} setPokemonRequest={setPokemonRequest} />
      <DisplayPokemon name={pokemonName} pokemonRequest={pokemonRequest} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
          Votre POKEclopédie à portée de clignotage
        </p>
        <a
          className="App-link"
          href="https://www.pokepedia.fr/Portail:Accueil"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokepedia pour les vieux
        </a>
      </header>
    </div>
  );
}

export default App;
