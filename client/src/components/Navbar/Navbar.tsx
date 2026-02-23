import "../Navbar/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <ul className="NavBar-Mobile">
          <li className="NavBar-Mobile-Lien">
            <Link to="/a-propos">A PROPOS</Link>
          </li>
          <li className="NavBar-Mobile-Lien">
            <Link to="/portfolio"> PORTFOLIO</Link>
          </li>
          <li className="NavBar-Mobile-Lien">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="NavBar-Desktop-titre">
          <h1>SMAGGHE KEVIN</h1>
          <h2>DEVELOPPEUR WEB ET WEB MOBILE</h2>
        </div>
        <ul className="NavBar-Desktop">
          <li className="NavBar-Desktop-Lien">
            <Link to="/a-propos">A PROPOS</Link>
          </li>
          <li className="NavBar-Desktop-Lien">
            <Link to="/portfolio"> PORTFOLIO</Link>
          </li>
          <li className="NavBar-Desktop-Lien">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
