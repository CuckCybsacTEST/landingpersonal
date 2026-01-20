import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MethodCards from "./components/MethodCards";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Convergence from "./components/Convergence";
import Contact from "./components/Contact";
import GradientSelector from "./components/GradientSelector";
import { nav, methodCards, solutions, services } from "./data/data";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav nav={nav} />
      <main className="pt-24">
        <Hero />
        <Experience />
        <Skills />
        <MethodCards methodCards={methodCards} />
        <Solutions solutions={solutions} />
        <Services services={services} />
        <Convergence />
        <Contact />
      </main>
      <GradientSelector />
    </div>
  );
}

export default App;