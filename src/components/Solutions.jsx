import React from "react";
import Section from "./Section";
import Card from "./Card";

function Solutions({ solutions }) {
  return (
    <Section id="soluciones">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60">
            NUESTRAS SOLUCIONES INTEGRADAS
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Arquitecturas listas para crecer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Distintos tipos de negocio, un mismo principio: integración, medición y escalabilidad.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <Card key={s.title}>
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Nota</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Cuando trabajo consultoría para plataformas de suscripción, mi enfoque es estratégico y tecnológico:
            branding, funnels, retención, automatización, analítica y operación.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Solutions;