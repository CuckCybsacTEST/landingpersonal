import React from "react";
import Section from "./Section";

function Solutions({ solutions }) {
  return (
    <Section id="soluciones">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Soluciones Integradas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Arquitecturas listas para crecer
          </h2>
          <p className="text-lg text-white/70">
            Distintos tipos de negocio, un mismo principio: integración, medición y escalabilidad.
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
            <div className="text-2xl">💡</div>
            <div>
              <div className="font-semibold text-white mb-2">Nota Importante</div>
              <p className="text-sm leading-relaxed text-white/70">
                Cuando trabajo consultoría para plataformas de suscripción, mi enfoque es estratégico y tecnológico: branding, funnels, retención, automatización, analítica y operación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Solutions;
