import React from "react";

function Nav({ nav }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-white/20 to-white/5 group-hover:from-white/30 transition-colors duration-300" />
          <div className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors duration-300">CYBSAC Perú</div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Diagnóstico
          </a>
          <a
            href="#contacto"
            className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Acompañamiento
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;