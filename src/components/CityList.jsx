/* eslint-disable react/prop-types */
import styles from "./cityList.module.css";
import deleteSVG from "../assets/delete.svg";

function CityList({ cities }) {
  return (
    <ul className={styles["city-list"]}>
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </ul>
  );
}

function City({ city }) {
  return (
    <li className={styles["city-el"]}>
      <p>{city.emoji}</p>
      <p>{city.cityName}</p>
      <p>{city.country}</p>
      <button className={styles["delete-btn"]}>
        <img src={deleteSVG} alt="delete" />
      </button>
    </li>
  );
}

export default CityList;
