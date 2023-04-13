import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      POKEMON TYPESCRIPT
      <nav>
        <button ><Link to={"/"}>ACCUEIL</Link></button>
        <button ><Link to={"/search"}>SEARCH</Link></button>
      </nav>
    </div>)
}

export default Navbar;