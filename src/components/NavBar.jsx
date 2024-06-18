import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar__links"]}>
        <li>
          <NavLink to={"/"} className={styles["navbar__link"]}>
            <Logo />
          </NavLink>
        </li>
        <div className={styles['navbar__container']}>
          <li>
            <NavLink to={"/product"} className={styles["navbar__link"]}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/prices"} className={styles["navbar__link"]}>
              Pricing
            </NavLink>
          </li>
          <button className={styles['nav-btn']}>
            <Link to={"/login"} className={styles["navbar__link"]}>
              LOG IN
            </Link>
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
