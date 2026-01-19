import React, { useState, useEffect } from "react";

const GradientSelector = () => {
  const [selected, setSelected] = useState("white");

  const gradients = [
    {
      id: "white",
      name: "Blanco (Actual)",
      tailwind: "from-white/8 to-white/3",
      preview: "from-white/8 to-white/3"
    },
    {
      id: "cyberpunk",
      name: "Neón Cyberpunk",
      tailwind: "from-blue-500/20 via-purple-500/15 to-pink-500/15",
      preview: "from-blue-500/20 via-purple-500/15 to-pink-500/15"
    },
    {
      id: "aurora",
      name: "Cyan Aurora",
      tailwind: "from-cyan-500/20 via-blue-500/15 to-purple-500/15",
      preview: "from-cyan-500/20 via-blue-500/15 to-purple-500/15"
    },
    {
      id: "sunset",
      name: "Sunset Vibrante",
      tailwind: "from-orange-500/15 via-pink-500/15 to-purple-500/15",
      preview: "from-orange-500/15 via-pink-500/15 to-purple-500/15"
    },
    {
      id: "indigo",
      name: "Índigo Moderno",
      tailwind: "from-indigo-500/20 via-purple-500/15 to-pink-500/15",
      preview: "from-indigo-500/20 via-purple-500/15 to-pink-500/15"
    },
    {
      id: "mint",
      name: "Green Mint",
      tailwind: "from-green-500/15 via-cyan-500/15 to-blue-500/15",
      preview: "from-green-500/15 via-cyan-500/15 to-blue-500/15"
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("gradientMode");
    if (saved) setSelected(saved);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    localStorage.setItem("gradientMode", id);
    window.location.reload();
  };

  const selectedGradient = gradients.find(g => g.id === selected);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group relative">
        <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg hover:shadow-xl transition-all hover:scale-105">
          🎨 Degradados
        </button>

        <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block bg-black/95 border border-white/20 rounded-2xl p-4 w-72 backdrop-blur">
          <div className="text-xs font-semibold text-white/60 mb-3">DEGRADADO ACTUAL: {selectedGradient?.name}</div>
          
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {gradients.map((gradient) => (
              <button
                key={gradient.id}
                onClick={() => handleSelect(gradient.id)}
                className={`w-full text-left rounded-xl p-3 transition-all border ${
                  selected === gradient.id
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient.preview} border border-white/20`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{gradient.name}</div>
                    <div className="text-xs text-white/50">{gradient.tailwind}</div>
                  </div>
                  {selected === gradient.id && (
                    <div className="text-lg">✓</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/40">
            Selecciona un degradado para aplicar globalmente
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientSelector;
