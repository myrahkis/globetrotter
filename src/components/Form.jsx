import { useEffect, useState } from "react";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function convertToEmoji(countryCode) {
  const codePoints = countryCode.toUpperCase().split('').map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const { addNewCity } = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState('');
  const [lat, lng] = useUrlPosition();
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat & !lng) return;

      async function fetchCityData() {
        try {
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error("That's not a city! Please, click elsewhere!");

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (e) {
          setGeocodingError(e.message);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !notes) return;

    const newCity = {
      cityName,
      country,
      emoji,
      notes,
      position: {lat, lng},
    }

    addNewCity(newCity);
    navigate('/app/cities');
  }

  if (!lat & !lng) return <h5>Click on the map to choose visited city!</h5>;

  if (geocodingError) {
    return <h5>{geocodingError}</h5>;
  }

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <div className={styles["city-name-wrapper"]}>
        <label>City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className={styles["input"]}
        />
      </div>
      <div className={styles["notes-wrapper"]}>
        <label>Your thoughts</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className={styles["input"]}
        />
      </div>
      <div className={styles["btns-wrapper"]}>
        <button type="submit" className={styles["form-btn"]}>Add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className={styles["form-btn"]}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Form;
