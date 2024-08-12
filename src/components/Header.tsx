import { NavLink } from "react-router-dom";
import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <h1>
          <NavLink to="/" end>
            ANTOINE
          </NavLink>
        </h1>
        <ul className={styles.listLink}>
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
