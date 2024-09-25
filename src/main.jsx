import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-zinc-100 min-h-screen">
      <Header />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
