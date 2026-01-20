import React from "react";
import FeatureGrid from "./FeatureGrid";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
        {/* Top Section: Tagline + CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            Converge branding, marketing y software
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Tu negocio, automatizado
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Arquitectura digital completa que converge en una solución orientada a rentabilidad. Branding, marketing y desarrollo sincronizados en un solo sistema escalable.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all"
            >
              Agendar una llamada
            </a>
            <a
              href="#contacto"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Ver casos de estudio
            </a>
          </div>
        </div>

        {/* Features Grid - Bottom */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-white/60 text-sm font-semibold tracking-wide mb-3">MÓDULOS INTEGRADOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Todo en un sistema
            </h2>
          </div>
          <FeatureGrid />
        </div>

        {/* Bottom info */}
        <div className="mt-20 text-center">
          <p className="text-white/50 text-sm">
            Soy Deivis Contreras. Acompaño a negocios a diseñar sistemas digitales escalables que funcionan solos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;