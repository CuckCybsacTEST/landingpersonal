import React from "react";

function Nav({ nav }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-white/10" />
          <div className="text-sm font-semibold">gowht architect</div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-white/70 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/15"
          >
            Solicitar propuesta
          </a>
          <a
            href="#contacto"
            className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-white/90"
          >
            Agendar una llamada
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;