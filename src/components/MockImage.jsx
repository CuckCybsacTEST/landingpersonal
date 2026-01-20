function MockImage({ label = "Mockup" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.25),transparent_45%)]" />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-widest text-white/60">VISUAL</div>
          <div className="h-8 w-20 rounded-full bg-white/10" />
        </div>
        <div className="mt-6 grid gap-3">
          <div className="h-10 w-3/4 rounded-xl bg-white/10" />
          <div className="h-4 w-5/6 rounded-lg bg-white/5" />
          <div className="h-4 w-4/6 rounded-lg bg-white/5" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="h-16 rounded-xl bg-white/5" />
          <div className="h-16 rounded-xl bg-white/5" />
          <div className="h-16 rounded-xl bg-white/5" />
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
          <div className="text-sm font-semibold text-white">{label}</div>
          <div className="mt-2 h-2 w-full rounded bg-white/10" />
          <div className="mt-2 h-2 w-5/6 rounded bg-white/10" />
          <div className="mt-2 h-2 w-4/6 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default MockImage;