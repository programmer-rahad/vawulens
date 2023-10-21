import { Link, NavLink } from "react-router-dom";
import Logo from "./../images/logo.png";
import { links } from "../data";
import "./navbar.scss";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setNav(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${nav ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setNav(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle-btn" onClick={() => setNav(!nav)}>
          {nav ? <VscClose /> : <VscThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
