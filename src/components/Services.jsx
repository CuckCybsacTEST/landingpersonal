import React from "react";
import Section from "./Section";
import Card from "./Card";

function Services({ services }) {
  return (
    <Section id="servicios">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60">
            SERVICIOS PARTICULARES
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Soluciones puntuales, ejecutables y de alta calidad
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Si necesitas resolver algo puntual, trabajo contigo servicios individuales sin perder el estándar premium.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="text-5xl text-center mb-4">{s.icon}</div>
              <div className="text-base font-semibold text-center">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70 text-center">{s.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Services;