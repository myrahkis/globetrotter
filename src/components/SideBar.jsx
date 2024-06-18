import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./sideBar.module.css";

function SideBar() {
  return (
    <div className={styles["container"]}>
      <Logo />
      <div className={styles['list-wrapper']}>
        <AppNav />
        <Outlet />
      </div>

      <footer className={styles["footer"]}>
        <p>&copy; Copyright {new Date().getFullYear()} by Globetrotter Inc.</p>
      </footer>
    </div>
  );
}

export default SideBar;
