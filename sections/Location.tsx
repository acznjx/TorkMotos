"use client";

import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";

export default function Location() {
  // Endereço formatado para a URL do Google Maps
  const address = "Av. Dorival Cândido Luz de Oliveira, 3905, Gravataí - RS";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=SUA_API_KEY_AQUI&q=${encodeURIComponent(address)}`;
  
  // Link direto para abertura no GPS/Google Maps
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="localizacao" className="bg-[#0f0f0f] text-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter italic">
            Nossa <span className="text-[#E30613]">Localização</span>
          </h2>
          <div 
            className="w-20 h-1.5 bg-[#E30613] mt-4" 
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card de Endereço */}
          <div className="lg:col-span-1 bg-[#1a1a1a] p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="text-[#E30613] mb-6">
                <FaMapMarkerAlt size={40} />
              </div>
              <h3 className="text-2xl font-bold uppercase italic mb-4">Onde Estamos</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Av. Dorival Cândido Luz de Oliveira, 3905<br />
                Bairro COHAB A - Gravataí / RS<br />
                CEP: 94050-000
              </p>
            </div>

            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 py-4 text-white font-bold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                backgroundColor: "#E30613", 
              }}
            >
              <FaRoute size={20} />
              Como Chegar
            </a>

            <div className="absolute -bottom-10 -right-10 text-white/5 rotate-12 group-hover:text-[#E30613]/10 transition-colors duration-500">
              <FaMapMarkerAlt size={200} />
            </div>
          </div>

          {/* Mapa Integrado */}
          <div className="lg:col-span-2 h-[450px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-white/5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe
              // Usando a busca direta pelo endereço no modo visualização (embed padrão sem API Key necessária para testes básicos)
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.6368412431614!2d-51.0298642!3d-29.9348983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519777f7637841f%3A0xe2a98af28c93225e!2sAv.%20Dorival%20C%C3%A2ndido%20Luz%20de%20Oliveira%2C%203905%20-%20Cohab%20A%2C%20Gravata%C3%AD%20-%20RS%2C%2094050-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}