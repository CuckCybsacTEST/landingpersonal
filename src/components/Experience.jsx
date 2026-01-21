import React, { useState, useEffect } from "react";
import Section from "./Section";

function Experience() {
  const experiences = [
    {
      company: "Eventos & Hospitality",
      role: "Sistemas de Alta Demanda",
      years: "Acompañamiento",
      description: "Implementación de infraestructura crítica para eventos masivos y gestión de hospitalidad. Optimización de flujos de reserva y operación en tiempo real.",
      highlight: "+50 eventos operativos"
    },
    {
      company: "Nightclubs & Entertainment",
      role: "Operativa Digital",
      years: "Control Real",
      description: "Sistemas de control de acceso, venta anticipada y monetización de audiencias para discotecas de alto nivel en Latinoamérica.",
      highlight: "+1M tickets procesados"
    },
    {
      company: "Marcas Multisede",
      role: "Ciudadanía Digital",
      years: "Estructura B2B",
      description: "Estandarización de procesos digitales para franquicias y marcas con múltiples puntos de venta físicos. Control centralizado y datos unificados.",
      highlight: "Escalabilidad regional"
    },
    {
      company: "Consultoría de Monetización",
      role: "Estrategia de Rentabilidad",
      years: "Alto Ticket",
      description: "Profesionalización de activos digitales y audiencias, convirtiendo el contenido en unidades de negocio de alto rendimiento.",
      highlight: "ROI comprobado"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const currentExperience = experiences[current];

  return (
    <Section id="experiencia">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-20 md:px-6">
        {/* Header */}
        <div className="hidden md:block mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Experiencia en entornos de alta presión
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Probado en escenarios reales
          </h2>
          <p className="text-lg text-white/70">
            Acompañamos el crecimiento de negocios con tracción sustancial, garantizando que la tecnología sea el motor y no un cuello de botella.
          </p>
        </div>

        {/* Timeline - Experiences */}
        <div className="mb-20">
          <div className="md:hidden">
            <div key={current}>
              <div
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute -left-8 top-8 hidden md:flex">
                  <div className="h-4 w-4 rounded-full border-2 border-white/40 bg-black" />
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{currentExperience.company}</div>
                    <div className="text-sm text-white/60 mb-3">{currentExperience.role}</div>
                    <div className="text-xs font-semibold text-white/50">{currentExperience.years}</div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-base text-white/80 mb-4 leading-relaxed">{currentExperience.description}</p>
                    <div className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2">
                      <span className="text-xs font-semibold text-white/70">📈 {currentExperience.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col md:space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur w-auto"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 hidden md:flex">
                  <div className="h-4 w-4 rounded-full border-2 border-white/40 bg-black" />
                  {idx < experiences.length - 1 && (
                    <div className="absolute top-4 -z-10 h-24 w-0.5 bg-gradient-to-b from-white/20 to-white/5" style={{ left: "6px", top: "16px" }} />
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{exp.company}</div>
                    <div className="text-sm text-white/60 mb-3">{exp.role}</div>
                    <div className="text-xs font-semibold text-white/50">{exp.years}</div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-base text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2">
                      <span className="text-xs font-semibold text-white/70">📈 {exp.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
