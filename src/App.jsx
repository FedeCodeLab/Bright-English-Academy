import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import LittleAbout from "./components/LittleAbout";
import Opinions from "./components/Opinions";

function App() {
  return (
    <main>
      <Hero />
      <Opinions />
      <LittleAbout />
      <Cards />
    </main>
  );
}

export default App;
