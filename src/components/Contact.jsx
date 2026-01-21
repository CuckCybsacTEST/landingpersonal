import React from "react";
import Section from "./Section";

function Contact() {
  return (
    <Section id="contacto">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Evalúa tu operación digital
          </h2>
          <p className="text-lg text-white/70">
            Hablemos para realizar un diagnóstico de tu infraestructura actual e iniciar el acompañamiento estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">📈</div>
              <h3 className="text-2xl font-semibold text-white">Inicia hoy</h3>
            </div>
            <p className="text-base text-white/70 mb-6">
              Agenda un diagnóstico operativo o solicita hablar con un consultor senior.
            </p>
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-white/90 transition-all">
                🗣️ Hablar con un consultor
              </button>
              <button className="w-full rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                📊 Solicitar diagnóstico
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Detalles de tu operación</h3>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/70">Empresa / Marca</span>
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25 focus:bg-white/10 transition-all" placeholder="Nombre comercial" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/70">Email corporativo</span>
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25 focus:bg-white/10 transition-all" placeholder="contacto@empresa.com" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-white/70">Situación operativa actual</span>
                <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/25 focus:bg-white/10 transition-all resize-none" placeholder="Describe los retos actuales de tu negocio..." />
              </label>
              <button type="submit" className="w-full rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-white/90 transition-all mt-2">
                Solicitar Diagnóstico B2B
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="mb-4 flex justify-center gap-6">
            {[
              { label: "Operativa", icon: "📊" },
              { label: "Medición", icon: "🎯" },
              { label: "Tecnología", icon: "⚙️" },
              { label: "Rentabilidad", icon: "💰" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-6">
            © 2026 CYBSAC Perú · Ciudadanía Digital Empresarial
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
