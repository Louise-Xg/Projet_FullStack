import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Earthquake } from "../types/Earthquake";
import { Link } from "react-router";
import styles from "../styles/Details_eq.module.css";

function Details_eq() {
  // 1. Get id from the url of the backend/blablabla/id, here the id is a string
  const { id } = useParams();

  const [target_earthquake, setTarget_Earthquake] = useState<Earthquake | null>(
    null,
  );

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:30000/eq_catalog/${id}`);
      const cleanData = (await rawData.json()) as Earthquake;
      setTarget_Earthquake(cleanData);
    }
    fetchData();
  }, []);

  // 2. Handle missing earthquakes, in case of no EQ id found, then display a msg like:  "there is no corresponding EQ to this id"
  if (target_earthquake === null) {
    return <p>Earthquake id:{id} not found. Stay tuned...! </p>;
  }

  // 3. Display earthquake information
  return (
    <section className={styles.section_eq_details}>
      <h2>Earthquake Details</h2>

      <div className={styles.presentation_eq_details}>
        <p>Location: {target_earthquake.location}</p>
        <p>Magnitude: {target_earthquake.magnitude}</p>
        <p>Magnitude type: {target_earthquake.magnitude_type}</p>
        <p>Date: {target_earthquake.event_time}</p>
        <p>Depth: {target_earthquake.depth_km} km</p>
        <p>Latitude: {target_earthquake.latitude} °</p>
        <p>Longitude: {target_earthquake.longitude} °</p>
      </div>

      <nav className={styles.navbutton}>
        <Link to="/full_eq_catalog">
          <button className={styles.returnbutton}> ↵ Return</button>
        </Link>
      </nav>
    </section>
  );
}

export default Details_eq;
