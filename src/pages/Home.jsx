import React from "react";
import styles from "./home.module.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <NavBar />
      <div className={styles["background-img"]}></div>
      <div className={styles["container"]}>
        <h2>
          Globetrotter? <br /> Make your adventures{" "}
          <i className={styles["yellow"]}>memorable</i>.
        </h2>
        <p className={styles["desc"]}>
          Never forget your wonderful experiences, and show everyone how you
          have wandered the world.
        </p>
        <button className={styles["home-btn"]} onClick={() => navigate('app')}>START TRACKING NOW</button>
      </div>
    </>
  );
}

export default Home;
