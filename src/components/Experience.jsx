import React from "react";
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

  const skills = [
    { category: "Product Strategy", items: ["Go-to-market", "User Research", "Monetization", "Growth Hacking"] },
    { category: "Development", items: ["React", "Node.js", "System Design", "Scalability"] },
    { category: "Leadership", items: ["Team Building", "Stakeholder Management", "Agile", "Mentoring"] },
    { category: "Markets", items: ["LatAm", "Europa", "Asia", "B2B & B2C"] }
  ];

  return (
    <Section id="experiencia">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
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
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur"
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

        {/* Skills Grid */}
        <div className="bg-gradient-to-br from-white/8 to-white/3 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Habilidades desarrolladas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="text-center">
                <h4 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wide">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="text-sm text-white/80">
                      ✓ {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Mi background combinado con especialización en arquitectura digital, me permite diseñar sistemas que no solo funcionan, sino que escalan.
          </p>
          <a
            href="#contacto"
            className="inline-block rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
