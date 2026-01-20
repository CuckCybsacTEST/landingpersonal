import { useGradient } from "../hooks/useGradient";

function FeatureGrid() {
  const gradient = useGradient();

  const features = [
    {
      icon: "🎨",
      title: "Branding Estratégico",
      description: "Identidad visual que converge con tu propuesta de valor"
    },
    {
      icon: "📱",
      title: "Ecosistema Digital",
      description: "Apps y plataformas integradas a tu estrategia"
    },
    {
      icon: "⚡",
      title: "Automatización",
      description: "Sistemas escalables que reducen fricción"
    },
    {
      icon: "📊",
      title: "Marketing Medible",
      description: "Cada métrica orientada a rentabilidad"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300`}
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
          <h3 className="font-semibold text-white mb-2 text-sm">{feature.title}</h3>
          <p className="text-xs text-white/60">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureGrid;
