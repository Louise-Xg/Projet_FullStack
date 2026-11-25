import { useEffect, useState } from "react";

type Earthquake = {
  id: number;
  event_time: string;
  magnitude: number;
  magnitude_type: string;
  location: string;
  latitude: number;
  longitude: number;
  depth_km: number;
};

function App() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:30000/eq_catalog");
      const cleanData = (await rawData.json()) as Earthquake[];
      setEarthquakes(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome Home!</h1>
      {earthquakes.map((earthquake) => {
        return <p>{earthquake.id} brrr</p>;
      })}
    </>
  );
}

export default App;
