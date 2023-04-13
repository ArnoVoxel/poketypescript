import logo from './logo.svg';
import Navbar from '../src/components/Navbar';
import './App.css';

function App() {
  // const [pokemonName, setPokemonName] = useState('');
  // const [pokemonRequest, setPokemonRequest] = useState({
  //   id:0,
  //   name: '',
  //   sprites: {
  //     back_default: '',
  //     front_default: ''
  //   },
  // });

  return (
    <div className="App">
      <Navbar />
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
