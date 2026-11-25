import { useParams } from "react-router";
import type { Earthquake } from "../App";

interface Details_eq_Props {
  all_eq: Earthquake[];
}

function Details_eq({ all_eq }: Details_eq_Props) {
  // 1. Get id from the url of the backend/blablabla/id, here the id is a string
  const { id } = useParams();

  // 2. Find the corresponding earthquake
  const earthquake = all_eq.find(
    (target_earthquake) => target_earthquake.id === Number(id), //as the id from url is a string, we have to convert it to number
  );

  // 3. Handle missing earthquakes, in case of no EQ id found, then display a msg like:  "there is no corresponding EQ to this id"
  if (!earthquake) {
    return <p>Earthquake not found. Stay tuned!</p>;
  }

  // 4. Display earthquake information
  return (
    <>
      <h1>Earthquake Details</h1>

      <p>Location: {earthquake.location}</p>

      <p>Magnitude: {earthquake.magnitude}</p>
      <p>Magnitude type: {earthquake.magnitude_type}</p>
      <p>Date: {earthquake.event_time}</p>
      <p>Depth: {earthquake.depth_km} km</p>
      <p>Latitude: {earthquake.latitude} °</p>
      <p>Longitude: {earthquake.longitude} °</p>
    </>
  );
}

export default Details_eq;
