import { useNavigate, useSearchParams } from "react-router-dom";
import styles from './map.module.css';

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles['container']} onClick={() => navigate("form")}>
      <div>Map</div>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
}

export default Map;
