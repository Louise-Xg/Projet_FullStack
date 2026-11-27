import { Link } from "react-router";
import styles from "../styles/Full_eq_catalog.module.css";
import { useState, useEffect } from "react";
import type { Earthquake } from "../types/Earthquake";
import DeleteButton from "../components/DeleteButton";

function Full_eq_catalog() {
  //Fetch earthquake form backend/
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:30000/eq_catalog");
      const cleanData = (await rawData.json()) as Earthquake[];
      setEarthquakes(cleanData);
    }
    fetchData();
  }, []);

  // Update the list after an earthquake has been deleted
  function MostRecentCatalog(id: number) {
    setEarthquakes(earthquakes.filter((earthquake) => earthquake.id !== id)); //select all rows corresponding to an eq beside the deleted id eq
  }

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
        {earthquakes.map((target_earthquake) => {
          return (
            <li className={styles.list_bloc}>
              <div
                className={`${styles.magnitude_icon} ${GetMagnitudeRange(target_earthquake.magnitude)}`} //because we can apply several classes as: className= "class1 class2"
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

              {/* <DeleteButton
                id={target_earthquake.id} //id of the earthquake to delete
                updateCatalog={MostRecentCatalog} // update the displayed catalog earthquakes after successful deletion occuring in the function DeleteButton
              /> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Full_eq_catalog;
