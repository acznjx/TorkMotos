"use client";

import { FaWrench, FaPaintbrush, FaMotorcycle, FaHelmetSafety } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      title: "Mecânica",
      description: "Manutenção completa e revisões especializadas para motos de todos os modelos.",
      icon: <FaWrench />,
    },
    {
      title: "Pintura",
      description: "Pintura personalizada e retoques profissionais que destacam sua moto.",
      icon: <FaPaintbrush />,
    },
    {
      title: "Venda de Motos",
      description: "Motos seminovas, selecionadas com qualidade e confiança.",
      icon: <FaMotorcycle />,
    },
    {
      title: "Acessórios",
      description: "Equipamentos de segurança e acessórios para conforto e estilo na estrada.",
      icon: <FaHelmetSafety />,
    },
  ];

  return (
    <section id="servicos" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter italic">
            Nossos <span className="text-[#E30613]">Serviços</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#E30613] mt-4" style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] border border-white/5 p-10 flex flex-col items-start transition-all duration-300 hover:border-[#E30613]/50"
            >
              {/* Ícone com destaque */}
              <div className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:text-[#E30613] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Detalhe visual de hover: linha que cresce no fundo */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E30613] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}