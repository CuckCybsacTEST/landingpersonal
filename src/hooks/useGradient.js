import { useEffect, useState } from "react";

export const useGradient = () => {
  const [gradient, setGradient] = useState("from-white/8 to-white/3");

  useEffect(() => {
    const gradients = {
      white: "from-white/8 to-white/3",
      cyberpunk: "from-blue-500/20 via-purple-500/15 to-pink-500/15",
      aurora: "from-cyan-500/20 via-blue-500/15 to-purple-500/15",
      sunset: "from-orange-500/15 via-pink-500/15 to-purple-500/15",
      indigo: "from-indigo-500/20 via-purple-500/15 to-pink-500/15",
      mint: "from-green-500/15 via-cyan-500/15 to-blue-500/15"
    };

    const saved = localStorage.getItem("gradientMode") || "white";
    setGradient(gradients[saved]);
  }, []);

  return gradient;
};
