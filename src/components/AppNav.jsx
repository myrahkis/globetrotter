import { NavLink } from "react-router-dom";
import styles from "./appNav.module.css";

function AppNav() {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['list']}>
        <li>
          <NavLink to="cities" className={styles['list__link']}>Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries" className={styles['list__link']}>Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
