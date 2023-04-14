import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        POKEMON TYPESCRIPT
      </div>
      <nav>
        <button className="navbarButton" ><Link to={"/"}>ACCUEIL</Link></button>
        <button className="navbarButton" ><Link to={"/search"}>SEARCH</Link></button>
      </nav>
    </div>)
}

export default Navbar;