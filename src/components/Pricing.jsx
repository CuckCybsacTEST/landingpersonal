import React, { useState } from 'react';
import Section from './Section';
import { useGradient } from '../hooks/useGradient';
import { Check, CreditCard, ShieldCheck, Zap } from 'lucide-react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Pricing = () => {
  const gradient = useGradient();
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Listener para capturar el token de Culqi
  React.useEffect(() => {
    const culqiHandler = () => {
      if (window.Culqi.token) {
        const token = window.Culqi.token.id;
        const email = window.Culqi.token.email;
        console.log("Token de Culqi generado:", token, email);
        alert(`¡Pago con Culqi iniciado correctamente! Token: ${token}`);
        // Aquí enviarías el token al backend para completar el cargo
      } else {
        console.log(window.Culqi.error);
        alert(window.Culqi.error.user_message);
      }
    };

    window.culqi = culqiHandler;
  }, []);

  const plans = [
    {
      id: 'diagnostic',
      name: 'Diagnóstico Operativo',
      price: '299',
      pricePen: '1100',
      description: 'Sesión intensiva para auditar tu operación digital y detectar cuellos de botella.',
      features: [
        'Auditoría de Ciudadanía Digital',
        'Hoja de ruta estratégica',
        'Análisis de rentabilidad',
        'Evaluación de infraestructura'
      ]
    },
    {
      id: 'accompaniment',
      name: 'Acompañamiento B2B',
      price: '1999',
      pricePen: '7500',
      description: 'Partner estratégico y operativo mensual para escalar tu negocio.',
      features: [
        'Operativa Digital completa',
        'Optimización de Monetización',
        'Control Multisede / Alta Demanda',
        'Soporte Estratégico Real'
      ],
      popular: true
    }
  ];

  const handlePayPalPayment = (plan) => {
    console.log(`Iniciando pago PayPal para: ${plan.name}`);
  };

  const handleCulqiPayment = (plan) => {
    // Configuración de la llave pública de Culqi
    if (window.Culqi) {
      window.Culqi.publicKey = import.meta.env.VITE_CULQI_PUBLIC_KEY || 'pk_test_placeholder';
      
      window.Culqi.settings({
        title: plan.name,
        currency: 'USD',
        description: plan.description,
        amount: plan.price * 100 // Culqi usa céntimos
      });

      // Configuración de opciones (Opcional)
      window.Culqi.options({
        lang: 'auto',
        modal: true,
        installments: true,
        customButton: '',
        style: {
          maincolor: '#000000',
          buttontext: '#ffffff',
          maintext: '#4A4A4A',
          desctext: '#4A4A4A'
        }
      });

      window.Culqi.open();
    } else {
      alert("Error: Script de Culqi no cargado.");
    }
  };

  return (
    <Section id="pricing">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Inicia tu transformación digital
          </h2>
          <p className="text-lg text-white/70">
            Escoge el nivel de acompañamiento que tu operación requiere hoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-[1px] rounded-3xl bg-gradient-to-br ${plan.popular ? gradient : 'from-white/20 to-white/5'}`}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-[23px] p-8 h-full flex flex-col">
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${gradient} text-xs font-bold text-black`}>
                    MÁS POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/40 text-sm">USD</span>
                    <span className="mx-2 text-white/20">|</span>
                    <span className="text-xl font-semibold text-white/80">S/ {plan.pricePen}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full bg-gradient-to-br ${gradient} bg-opacity-20`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => handleCulqiPayment(plan)}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all active:scale-[0.98]"
                  >
                    <CreditCard className="w-5 h-5" />
                    Pago con Tarjeta / Yape
                  </button>
                  
                  <button 
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full py-4 rounded-xl border border-white/20 bg-white/5 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Zap className="w-5 h-5" />
                    Pagar con PayPal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Pago / PayPal Integration Placeholder */}
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className={`w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br ${gradient}`}>
              <div className="bg-black p-8 rounded-[23px]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Finalizar Compra</h3>
                  <button onClick={() => setSelectedPlan(null)} className="text-white/40 hover:text-white">✕</button>
                </div>
                
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Plan seleccionado:</p>
                  <p className="font-bold text-white">{selectedPlan.name}</p>
                  <p className="text-2xl font-bold text-white mt-2">${selectedPlan.price} USD</p>
                </div>

                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons 
                    style={{ layout: "vertical", color: "blue" }} 
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: { value: selectedPlan.price }
                        }]
                      });
                    }}
                  />
                </PayPalScriptProvider>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Pago Seguro Encriptado
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Pricing;
