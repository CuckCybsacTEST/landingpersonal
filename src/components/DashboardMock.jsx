import { useGradient } from "../hooks/useGradient";

function DashboardMock() {
  const gradient = useGradient();

  return (
    <div className="relative">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 blur-2xl" />
      
      {/* Main Dashboard Card */}
      <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} shadow-2xl shadow-white/10 backdrop-blur-sm`}>
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-2 w-2 rounded-full bg-white/30" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="text-xs font-semibold tracking-wider text-white/50">GOWTH CONTROL</div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-8 rounded-full bg-white/20" />
            <div className="h-4 w-4 rounded-lg bg-white/20" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="text-sm font-semibold tracking-wider text-white/60 mb-2">DASHBOARD</div>
            <div className="text-2xl font-bold text-white">Tu negocio en números</div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Stat 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/10 transition-all">
              <div className="text-xs text-white/60 font-semibold mb-2">INGRESOS</div>
              <div className="text-xl font-bold text-white mb-1">$24.5K</div>
              <div className="text-xs text-white/50">↑ 12.5% vs mes anterior</div>
            </div>

            {/* Stat 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/10 transition-all">
              <div className="text-xs text-white/60 font-semibold mb-2">CLIENTES</div>
              <div className="text-xl font-bold text-white mb-1">148</div>
              <div className="text-xs text-white/50">↑ 8.2% activos</div>
            </div>

            {/* Stat 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/10 transition-all">
              <div className="text-xs text-white/60 font-semibold mb-2">CONVERSIÓN</div>
              <div className="text-xl font-bold text-white mb-1">3.24%</div>
              <div className="text-xs text-white/50">↑ 2.1% optimizado</div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Module 1: Branding */}
            <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur p-5 hover:border-white/20 transition-all cursor-pointer`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-white/60 font-semibold mb-1">MÓDULO</div>
                  <div className="text-lg font-bold text-white">Branding</div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60">→</div>
              </div>
              <div className="text-xs text-white/50">Identidad visual y storytelling</div>
            </div>

            {/* Module 2: Automatización */}
            <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur p-5 hover:border-white/20 transition-all cursor-pointer`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-white/60 font-semibold mb-1">MÓDULO</div>
                  <div className="text-lg font-bold text-white">Automatización</div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60">→</div>
              </div>
              <div className="text-xs text-white/50">Sistemas y procesos escalables</div>
            </div>

            {/* Module 3: Marketing */}
            <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur p-5 hover:border-white/20 transition-all cursor-pointer`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-white/60 font-semibold mb-1">MÓDULO</div>
                  <div className="text-lg font-bold text-white">Marketing</div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60">→</div>
              </div>
              <div className="text-xs text-white/50">Social, contenido y growth</div>
            </div>

            {/* Module 4: Desarrollo */}
            <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur p-5 hover:border-white/20 transition-all cursor-pointer`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-white/60 font-semibold mb-1">MÓDULO</div>
                  <div className="text-lg font-bold text-white">Desarrollo</div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60">→</div>
              </div>
              <div className="text-xs text-white/50">Apps, web y ecosistemas</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 bg-white/3">
          <div className="text-xs text-white/40">Conectado • En tiempo real</div>
          <div className="text-xs text-white/40">v1.0 Alpha</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMock;
