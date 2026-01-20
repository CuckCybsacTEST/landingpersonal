import React, { useState, useEffect } from "react";
import Section from "./Section";

function Experience() {
  const experiences = [
    {
      company: "Stripe",
      role: "Product Developer",
      years: "2019-2022",
      description: "Arquitectura de soluciones de pago global. Desarrollo de APIs de alto rendimiento y experiencias de integración para miles de comercios.",
      highlight: "+500K merchants"
    },
    {
      company: "Mercado Libre",
      role: "Senior Product Engineer",
      years: "2017-2019",
      description: "Lead técnico en iniciativas de marketplace. Optimización de conversión y escalabilidad de plataformas de transacción.",
      highlight: "+10M usuarios"
    },
    {
      company: "Wallapop",
      role: "Product Developer",
      years: "2015-2017",
      description: "Desarrollo de features core en mobile y web. Growth engineering y monetización. Experiencia en mercados latino y europeo.",
      highlight: "+5M descargas"
    },
    {
      company: "Startups & Freelance",
      role: "Founder & Technical Leader",
      years: "2013-2015",
      description: "Fundación y escalada de 3 startups. Desarrollo full-stack, product strategy y fundraising. Experiencia validando modelos de negocio.",
      highlight: "3 ventures"
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
            Más de una década en mercados de alto nivel
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Mi experiencia como Product Developer
          </h2>
          <p className="text-lg text-white/70">
            He acompañado el crecimiento de algunas de las plataformas más grandes de Latinoamérica y el mundo. Desde early stage hasta scale-up de millones de usuarios.
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
