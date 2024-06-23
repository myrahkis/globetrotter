import NavBar from "../components/NavBar";
import styles from "./product.module.css";
import pricing from "../assets/price.jpg";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className={styles["container"]}>
        <div className={styles["info-wrapper"]}>
          <h3>It&apos;s simple. Just $3/month</h3>
          <p className={styles["text"]}>
            It&apos;s a small price to pay for the opportunity to hold in your
            hands the entire world you&apos;ve already had the chance to
            explore. Don&apos;t miss the chance to digitize and memorize all
            your trips, share your experiences with friends and plan new
            adventures!
          </p>
          <p className={styles["text"]}>
            It only takes a few clicks to start using Globetrotter and create
            your own unique travel map. Join our community of travelers and give
            new life to your adventures!
          </p>
          <button className={styles["app-btn"]} onClick={() => navigate('/login')}>START TRACKING NOW</button>
        </div>
        <img src={pricing} alt="can't load" className={styles["img"]} />
      </div>
    </>
  );
}

export default Pricing;
