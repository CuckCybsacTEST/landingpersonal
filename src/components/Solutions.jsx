import React from "react";
import Section from "./Section";

function Solutions({ solutions }) {
  return (
    <Section id="pilares">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Pilares Estratégicos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Acompañamiento B2B de Alto Nivel
          </h2>
          <p className="text-lg text-white/70">
            No vendemos servicios sueltos. Diseñamos y operamos el ecosistema digital de negocios que requieren control real y alta rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white flex-1">{s.title}</h3>
                <div className="text-2xl ml-4">→</div>
              </div>
              <p className="text-base leading-relaxed text-white/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚡</div>
            <div>
              <div className="font-semibold text-white mb-2">Nota de Posicionamiento</div>
              <p className="text-sm leading-relaxed text-white/70">
                Nuestros programas de acompañamiento están diseñados para negocios con tracción sustancial: discotecas, eventos masivos, hospitality y marcas corporativas. Priorizamos la operatividad real y la Ciudadanía Digital sobre la estética vacía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Solutions;
