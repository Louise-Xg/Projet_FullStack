import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Full_eq_catalog from "./pages/Full_eq_catalog.tsx";
import Details_eq from "./pages/Details_eq.tsx";
import Footer from "./components/Footer.tsx";

export type Earthquake = {
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
      <Header />
      <Routes>
        <Route
          path="/full_eq_catalog"
          element={<Full_eq_catalog all_eq={earthquakes} />}
        />
        <Route
          path="/full_eq_catalog/:id"
          element={<Details_eq all_eq={earthquakes} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
