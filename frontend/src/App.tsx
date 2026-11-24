import { useEffect, useState } from "react";

type Eq = {
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
  const [eqs, setEqs] = useState<Eq[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:30000/eq_catalog");
      const cleanData = (await rawData.json()) as Eq[];
      setEqs(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome Home!</h1>
      {eqs.map((eq) => {
        return <p>{eq.id} brrr</p>;
      })}
    </>
  );
}

export default App;
