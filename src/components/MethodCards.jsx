import React from "react";
import Section from "./Section";

function MethodCards({ methodCards }) {
  return (
    <Section id="metodo">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Metodología
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            De marca a sistema a negocio optimizado
          </h2>
          <p className="text-lg text-white/70">
            No entrego piezas sueltas. Diseño contigo una arquitectura digital donde todo se integra y se mide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {methodCards.map((c, idx) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden group-hover:shadow-xl group-hover:shadow-white/20"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-out blur-sm"></div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 text-sm font-bold group-hover:bg-white/20 transition-all">
                {idx + 1}
              </div>
              <div className="text-4xl mb-4">{c.icon}</div>
              <div className="text-lg font-semibold text-white">{c.title}</div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default MethodCards;
