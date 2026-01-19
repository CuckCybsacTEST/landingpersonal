import React, { useState } from "react";
import Section from "./Section";
import Card from "./Card";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission to backend
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contacto">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="gradient-text text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Hablemos y diseñemos juntos un sistema que transforme tu empresa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <Card>
              <div className="text-base font-semibold">🚀 Acción rápida</div>
              <p className="mt-2 text-sm text-white/70">
                Respondo en máximo 24 horas. Elige tu canal favorito.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="https://wa.me/1234567890" className="rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-green-500/20 transition-all duration-200 text-center">
                  💬 WhatsApp
                </a>
                <button className="rounded-2xl gradient-button-secondary border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-200">
                  📅 Agendar Llamada
                </button>
              </div>
            </Card>
          </div>

          <div className="md:col-span-7">
            <Card>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/70">Nombre</span>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25 focus:from-black/60 focus:to-black/40 transition-all duration-200" 
                      placeholder="Tu nombre" 
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/70">Email</span>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25 focus:from-black/60 focus:to-black/40 transition-all duration-200" 
                      placeholder="tucorreo@..." 
                    />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-white/70">Cuéntame tu proyecto</span>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 px-4 py-3 text-sm text-white/85 outline-none placeholder:text-white/30 focus:border-white/25 focus:from-black/60 focus:to-black/40 transition-all duration-200 resize-none" 
                    placeholder="¿Qué quieres construir? ¿Cuál es tu objetivo?" 
                  />
                </label>
                <button 
                  type="submit"
                  className="gradient-button rounded-2xl px-5 py-3 text-sm font-semibold text-black hover:shadow-lg hover:shadow-white/20 transition-all duration-200"
                >
                  Enviar mensaje
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