import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.webp";

import "./navbar.css";

/**
 * ? NAV
 * * Renders a navigation component with a logo & a list of links.
 *
 * @return {JSX.Element} The rendered navigation component.
 */
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav">
      <Link to="/" className={currentPath === "/" ? "active" : ""}>
        <img src={logo} alt="logo Kasa" />
      </Link>

      <ul>
        <li>
          <Link to="/" className={currentPath === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={currentPath === "/about" ? "active" : ""}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
