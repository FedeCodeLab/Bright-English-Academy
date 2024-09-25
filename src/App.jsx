import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import LittleAbout from "./components/LittleAbout";
import Opinions from "./components/Opinions";
import Professors from "./views/Professors";
import About from "./views/About";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Hero />
            <Opinions />
            <LittleAbout />
            <Cards />
          </main>
        }
      />

      <Route path="/professors" element={<Professors />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
