import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-1">
          <img
            src="/imgLogo/logo.PNG"
            alt="Logo de FlairClothes"
            className={styles.customLogo}
          />
        </Link>
        <ul className="navbar-nav me-auto ms-3">
          <li className={styles.customLi}>
            <NavLink
              to="/category/shoes"
              className={`me-1 ${styles.customLink} ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              Calzado
            </NavLink>
          </li>
          <li className={styles.customLi}>
            <NavLink
              to="/category/coverall"
              className={`me-1 ${styles.customLink} ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              Buzos
            </NavLink>
          </li>
          <li className={styles.customLi}>
            <NavLink
              to="/category/t-shirts"
              className={`me-1 ${styles.customLink} ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              Remeras
            </NavLink>
          </li>
          <li className={styles.customLi}>
            <NavLink
              to="/category/pants"
              className={`me-1 ${styles.customLink} ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              Pantalones
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
