import React from "react";
import Section from "./Section";

function Services({ services }) {
  return (
    <Section id="servicios">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Operativa On-Demand
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Servicios Puntuales y Transaccionales
          </h2>
          <p className="text-lg text-white/70">
            Soluciones inmediatas para necesidades específicas dentro del ecosistema CYBSAC. Ejecución premium y directa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/70 text-center flex-1">{s.body}</p>
              <div className="mt-6 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                <button className="text-xs text-white/60 hover:text-white transition-colors">Solicitar Servicio →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Services;
