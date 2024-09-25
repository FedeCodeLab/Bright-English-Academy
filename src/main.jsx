import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <div className="bg-zinc-100 relative">
          <Header />
          <div className="min-h-screen">
            <App />
          </div>
          <Footer />
        </div>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
