import NavBar from "../components/NavBar";
import travel from "../assets/travellers.jpg";
import styles from "./product.module.css";

function Product() {
  return (
    <>
      <NavBar />
      <div className={styles['container']}>
        <img src={travel} alt="can't load" className={styles['img']} />
        <div className={styles['info-wrapper']}>
          <h3>About Globetrotter</h3>
          <p className={styles['text']}>
            Globetrotter is an innovative travel app that helps you keep an
            amazing log of your adventures around the world! With Globetrotter,
            you can easily track all the cities and countries you&apos;ve
            visited, creating a unique map of your travels.
          </p>
          <p className={styles['text']}>
            We will help you not only preserve your brightest impressions, but
            will also inspire new adventures, showing how much you have already
            seen a wonderful world. With this application your the guidebook
            will become not only a map of countries and cities, but also your
            personal travel diary!
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
