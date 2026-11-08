
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Principles from "./components/Principles";
import Formats from "./components/Formats";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import ReleaseNotes from "./components/ReleaseNotes";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

import "./tailwind.css";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />

      <main id="utama">
        <Hero />
        <Principles />
        <Formats />
        <HowItWorks />
        <Download />
        <FAQ />
        <ReleaseNotes />
        <Privacy />
      </main>

      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemen #root tidak ditemukan.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
