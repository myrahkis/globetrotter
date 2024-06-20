import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";
import styles from "./appLayout.module.css";

function AppLayout() {
  return (
    <ProtectedRoute>
      <div className={styles["app"]}>
        <SideBar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
}

export default AppLayout;
