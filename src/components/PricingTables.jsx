import React from 'react';
import { Check, Info, Zap } from 'lucide-react';
import { useGradient } from '../hooks/useGradient';

const PricingTables = () => {
  const gradient = useGradient();

  const plans = [
    {
      name: "Diagnóstico Operativo",
      price: "0",
      oldPrice: "99",
      description: "Auditoría puntual de procesos digitales",
      features: [
        "Auditoría de Ciudadanía Digital",
        "Detección de cuellos de botella",
        "Reporte de escalabilidad",
        "Sesión de 90 minutos"
      ],
      cta: "Solicitar Diagnóstico Gratis",
      highlight: false
    },
    {
      name: "Célula de Estrategia",
      price: "459",
      isStartingPrice: true,
      description: "Instalamos tu departamento de Content & Social Media (Ustedes la cámara, nosotros el cerebro)",
      features: [
        "Content Manager & Social Media",
        "Planeamiento Estratégico Real",
        "Gestión de Medios Propios",
        "Dashboard de Resultados",
        "No incluye Fotografía/Video",
        "Todo el Soporte Técnico"
      ],
      cta: "Instalar Célula",
      highlight: false
    },
    {
      name: "Departamento TIC 360",
      price: "889",
      isStartingPrice: true,
      description: "Infraestructura, I+D y Software a medida. Tu propio equipo IT avanzado.",
      features: [
        "Soporte TIC & Infraestructura",
        "Investigación y Desarrollo (I+D)",
        "Software Ad-hoc & Automatización",
        "Control de Ciberseguridad",
        "Optimización de Procesos",
        "Consultoría Senior 24/7"
      ],
      cta: "Instalar Departamento TIC",
      highlight: false
    },
    {
      name: "Ecosistema Convergente",
      price: "1,499",
      isStartingPrice: true,
      description: "La fusión total: Marketing Estratégico + Poder TIC. Maximización de resultados sin fisuras.",
      features: [
        "Fusión Estrategia + TIC",
        "Software adaptado a Ventas",
        "Automatización de Marketing",
        "Inteligencia de Datos B2B",
        "Escalabilidad Garantizada",
        "Operativa Digital Total"
      ],
      cta: "Desplegar Ecosistema Total",
      highlight: false
    }
  ];

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {plans.map((plan, idx) => (
          <div 
            key={idx}
            className={`relative rounded-3xl p-[1px] transition-all duration-500 hover:scale-[1.02] ${
              plan.highlight ? `bg-gradient-to-br ${gradient}` : 'bg-white/10'
            }`}
          >
            <div className="bg-black/90 backdrop-blur-xl rounded-[23px] p-8 h-full flex flex-col">
              {plan.highlight && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-[10px] font-black text-black uppercase tracking-wider`}>
                  Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  {plan.price !== "Consultar" && <span className="text-sm font-medium text-white/40">{plan.isStartingPrice ? 'Desde $' : '$'}</span>}
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.oldPrice && (
                    <span className="text-lg text-white/30 line-through ml-1 italic">
                      ${plan.oldPrice}
                    </span>
                  )}
                  {plan.price !== "Consultar" && (
                    <span className="text-xs text-white/40 font-medium ml-1">
                      {plan.price === "0" ? "Cortesía" : "USD/mes"}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? `bg-gradient-to-br ${gradient}` : 'bg-white/20'}`}>
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                plan.highlight 
                  ? `bg-gradient-to-r ${gradient} text-black hover:shadow-lg hover:shadow-white/5` 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {plan.highlight ? <Zap className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTables;
