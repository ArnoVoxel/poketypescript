import logo from './logo.svg';
import Navbar from '../src/components/Navbar';
import PokeapiService from "../src/services/pokeapi.service";
import './App.css';

function changeImageClass() {
  let image = document.getElementById("image");
  if (image) {
    image.className = "App-logo-clicked";
  }
  //if local storage is empty, set a random number between 1 and 1008 and get the pokemon data from Pokeapi
  if(localStorage.getItem('pokemonList') === null) {
    let random = Math.floor(Math.random() * 1008) + 1;
    PokeapiService.findByName(JSON.stringify(random)).then((data: any) => {
      localStorage.setItem('pokemonList', JSON.stringify(data.data));
    });
  }

  // setInterval to redirect to another page
  setInterval(() => {
    window.location.href = "/display";
  }
    , 2000);
}


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" >
        <div onClick={changeImageClass}>
          <img id='image' src={logo} className="App-logo" alt="logo" onClick={changeImageClass} />
        </div>
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
