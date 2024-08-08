import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1>
          <NavLink to="/" end>
            Antoine
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
