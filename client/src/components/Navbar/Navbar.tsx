import "../Navbar/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <ul className="NavBar-Mobile">
      <li className="NavBar-Mobile-Lien">
        <Link to="/a-propos">A PROPOS</Link>
      </li>
      <li className="NavBar-Mobile-Lien">
        <Link to="/portfolio"> PORTFOLIO</Link>
      </li>
      <li className="NavBar-Mobile-Lien">
        <Link to="contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default Navbar;
