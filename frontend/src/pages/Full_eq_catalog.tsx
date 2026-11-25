import { Link } from "react-router";
import type { Earthquake } from "../App";
import styles from "../styles/Full_eq_catalog.module.css";

interface Full_eq_catalog_Props {
  all_eq: Earthquake[];
}

function Full_eq_catalog({ all_eq }: Full_eq_catalog_Props) {
  //Create a function that will change the magnitude icon according to the magnitude value
  function GetMagnitudeRange(magnitude: number) {
    if (magnitude < 4) {
      return styles.magnitude_low;
    } else if (magnitude < 6) {
      return styles.magnitude_moderate;
    } else {
      return styles.magnitude_high;
    }
  }
  return (
    <section className={styles.section_eq_catalog}>
      <div>
        <h1>Explore Earthquakes Since 2026</h1>
        <p className={styles.subtitle}>
          Discover and explore recorded seismic events. Explore the Earthquake
          Catalog.
        </p>

        <h2>During the last 48 hours:</h2>
      </div>

      <ul>
        {all_eq.map((target_earthquake) => {
          return (
            <li className={styles.list_bloc}>
              <div
                className={`${styles.magnitude_icon} ${GetMagnitudeRange(target_earthquake.magnitude)}`}
              >
                <p>
                  {target_earthquake.magnitude_type} {"\n"}
                  {target_earthquake.magnitude}
                </p>
              </div>

              <div className={styles.eq_small_presentation}>
                <p>{target_earthquake.event_time}</p>
                <p>{target_earthquake.location}</p>
              </div>
              <Link to={`/full_eq_catalog/${target_earthquake.id}`}>
                <div className={styles.arrow_details}>
                  <p>►</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Full_eq_catalog;
