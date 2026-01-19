import React from "react";
import Section from "./Section";

function Convergence() {
  return (
    <Section id="convergencia">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60">
            UNA SOLUCIÓN GLOBAL AUTOMATIZADA
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Todo converge en un ecosistema
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Tu marca comunica, tu contenido atrae, tu web convierte y tu sistema optimiza.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {["Tu Marca", "Tu Contenido", "Tu Web", "Tu Sistema"].map((x) => (
              <div key={x} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="text-sm font-semibold">{x}</div>
                <div className="mt-3 h-2 w-full rounded bg-white/10" />
                <div className="mt-2 h-2 w-5/6 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Convergence;