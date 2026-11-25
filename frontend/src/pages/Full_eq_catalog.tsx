import { Link } from "react-router";
import type { Earthquake } from "../App";

interface Full_eq_catalog_Props {
  all_eq: Earthquake[];
}

function Full_eq_catalog({ all_eq }: Full_eq_catalog_Props) {
  return (
    <>
      <h1>Earthquake Catalog</h1>

      {all_eq.map((target_earthquake) => {
        return (
          <Link
            key={target_earthquake.id}
            to={`/full_eq_catalog/${target_earthquake.id}`}
          >
            <p>
              {target_earthquake.magnitude_type} - {target_earthquake.magnitude}
            </p>
            <p>
              {target_earthquake.id} - {target_earthquake.event_time}
            </p>
            <p>{target_earthquake.location}</p>
          </Link>
        );
      })}
    </>
  );
}

export default Full_eq_catalog;
