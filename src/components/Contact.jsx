import React from "react";
import Section from "./Section";
import Card from "./Card";

function Contact() {
  return (
    <Section id="contacto">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Hablemos y diseñemos juntos un sistema que transforme tu empresa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <Card>
              <div className="text-base font-semibold">Acción rápida</div>
              <p className="mt-2 text-sm text-white/70">
                Puedo atenderte por WhatsApp o agendar una llamada.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">
                  Agendar una llamada
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  Escribirme por WhatsApp
                </button>
              </div>
            </Card>
          </div>

          <div className="md:col-span-7">
            <Card>
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/70">Nombre</span>
                    <input className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25" placeholder="Tu nombre" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/70">Email</span>
                    <input type="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25" placeholder="tucorreo@..." />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/70">Mensaje</span>
                  <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25" placeholder="Cuéntame qué quieres construir y el objetivo…" />
                </label>
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">
                  Enviar
                </button>
              </form>
            </Card>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} gowht architect · Arquitectura Digital · Branding · Marketing · Software
        </div>
      </div>
    </Section>
  );
}

export default Contact;