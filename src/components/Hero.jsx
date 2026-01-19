import React from "react";
import Pill from "./Pill";
import MockImage from "./MockImage";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-56 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-56 right-0 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Todo conectado. Todo medible. Todo orientado a rentabilidad.
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Arquitectura digital para construir negocios que funcionan solos, contigo al frente.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Soy Deivis Contreras. Acompaño a negocios y marcas a diseñar marcas, contenido, experiencias digitales y sistemas escalables que convergen en una solución global automatizada. Integro branding, marketing y software para generar cultura, optimización y crecimiento sostenible.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Agendar una llamada
              </a>
              <a
                href="#contacto"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Solicitar propuesta
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Branding",
                "Storytelling",
                "Social Media",
                "Web",
                "Sistemas & Apps",
                "Automatización",
              ].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <MockImage label="Mockup del sitio" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;