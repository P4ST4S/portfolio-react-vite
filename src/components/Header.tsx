import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import styles from "../styles/components/Header.module.css";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1000;

  return (
    <header>
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <h1 className={styles.title}>ANTOINE</h1>
        </NavLink>
        {isMobile ? (
          <CiMenuFries className={styles.menuIcon} />
        ) : (
          <ul className={styles.listLink}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
