import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import styles from "./city.module.css";

function City() {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <h6 className={styles["header"]}>CITY NAME</h6>
        <div className={styles["wrapper__name"]}>
          <p>{currentCity.emoji}</p>
          <p>{currentCity.cityName}</p>
        </div>
      </div>
      {currentCity.notes && (
        <div className={styles["wrapper"]}>
          <h6 className={styles["header"]}>YOUR THOUGHTS</h6>
          <p>{currentCity.notes}</p>
        </div>
      )}
      <div className={styles["wrapper"]}>
        <h6 className={styles["header"]}>LEARN MORE</h6>
        <a
          href={`https://ru.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
          className={styles["link"]}
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
    </div>
  );
}

export default City;
