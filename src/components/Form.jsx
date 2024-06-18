import { useState } from "react";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form className={styles["form"]}>
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
        <button className={styles["form-btn"]}>Add</button>
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
