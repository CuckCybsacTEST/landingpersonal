import React from "react";
import Section from "./Section";

function Convergence() {
  const steps = [
    { title: "Infraestructura", desc: "Base tecnológica sólida", icon: "⚙️" },
    { title: "Cultura Digital", desc: "Operatividad y procesos", icon: "🧠" },
    { title: "Monetización", desc: "Conversión de activos", icon: "💰" },
    { title: "Ciudadanía Digital", desc: "Escalabilidad real", icon: "⚡" }
  ];

  return (
    <Section id="convergencia">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
            Ecosistema B2B Robusto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Todo converge en la Ciudadanía Digital
          </h2>
          <p className="text-lg text-white/70">
            Establecemos el marco operativo donde tu infraestructura, cultura y datos trabajan sincronizados para maximizar la rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{step.icon}</div>
              <div className="text-sm text-white/60 mb-1">Eje {idx + 1}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Operación", desc: "Control total en entornos de alta demanda" },
              { label: "Medición", desc: "Datos unificados para decisión empresarial" },
              { label: "Escalabilidad", desc: "Crecimiento sustentado en procesos reales" }
            ].map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{benefit.label}</div>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Convergence;
