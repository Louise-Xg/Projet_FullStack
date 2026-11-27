import { Route, Routes } from "react-router";

import Header from "./components/Header.tsx";
import Full_eq_catalog from "./pages/Full_eq_catalog.tsx";
import Details_eq from "./pages/Details_eq.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/full_eq_catalog" element={<Full_eq_catalog />} />
        <Route path="/full_eq_catalog/:id" element={<Details_eq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
