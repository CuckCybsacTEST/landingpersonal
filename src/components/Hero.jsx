import React from "react";
import FeatureGrid from "./FeatureGrid";
import PricingTables from "./PricingTables";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1700px] w-full px-4 md:px-6">
        {/* Top Section: Tagline + CTA - Now Full Height */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            Ciudadanía Digital Empresarial · Acompañamiento B2B
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Instalamos Departamentos de Innovación en tu Negocio
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            No somos una agencia externa. Desplegamos capacidades operativas reales dentro de tu estructura: desde Células de Estrategia hasta Departamentos TIC 360 de alto impacto.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-all"
            >
              Iniciar Despliegue
            </a>
            <a
              href="#contacto"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Solicitar Diagnóstico Gratis
            </a>
          </div>
        </div>

        {/* Pricing Tables - Below the Fold */}
        <div className="py-20 mb-8" id="precios">
          <PricingTables />
        </div>

        {/* Features Grid - Bottom */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-white/60 text-sm font-semibold tracking-wide mb-3">CIUDADANÍA DIGITAL EN ACCIÓN</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Operación digital profesional
            </h2>
          </div>
          <FeatureGrid />
        </div>

        {/* Bottom info */}
        <div className="mt-20 text-center">
          <p className="text-white/50 text-sm italic">
            CYBSAC Perú · Escenarios de alta presión, resultados de alto impacto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;