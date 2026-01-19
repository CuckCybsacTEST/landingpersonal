import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MethodCards from "./components/MethodCards";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Convergence from "./components/Convergence";
import Contact from "./components/Contact";
import { nav, methodCards, solutions, services } from "./data/data";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav nav={nav} />
      <main className="pt-24">
        <Hero />
        <MethodCards methodCards={methodCards} />
        <Solutions solutions={solutions} />
        <Services services={services} />
        <Convergence />
        <Contact />
      </main>
    </div>
  );
}

export default App;