import React from "react";
import Section from "./Section";
import Card from "./Card";

function MethodCards({ methodCards }) {
  return (
    <Section id="metodo">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60">
            METODOLOGÍA
          </div>
          <h2 className="gradient-text text-3xl font-semibold tracking-tight md:text-4xl">
            De marca a sistema a negocio optimizado.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            No entrego piezas sueltas. Diseño contigo una arquitectura digital donde todo se integra y se mide.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {methodCards.map((c) => (
            <Card key={c.title}>
              <div className="text-4xl mb-3">{c.icon}</div>
              <div className="text-base font-semibold">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{c.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default MethodCards;