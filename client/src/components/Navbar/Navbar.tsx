import "../Navbar/Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <ul className="NavBar-Mobile">
          <li className="NavBar-Mobile-Lien">
            <NavLink to="/">A PROPOS</NavLink>
          </li>
          <li className="NavBar-Mobile-Lien">
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="NavBar-Mobile-Lien">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>

        <div className="NavBar-Desktop-titre">
          <h1>SMAGGHE KEVIN</h1>
          <h2>DEVELOPPEUR WEB ET WEB MOBILE</h2>
        </div>

        <ul className="NavBar-Desktop">
          <li className="NavBar-Desktop-Lien">
            <NavLink to="/">A PROPOS</NavLink>
          </li>
          <li className="NavBar-Desktop-Lien">
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="NavBar-Desktop-Lien">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
