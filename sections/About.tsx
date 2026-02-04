"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="quem-somos" className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Imagem com Efeito Suave */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#E30613]/20">
            
            {/* Imagem quase original, apenas levemente mais escura para o texto/layout brilhar */}
            <Image
              src="https://i.imgur.com/3UkKebR.jpeg" 
              alt="Oficina Tork Motos"
              width={600}
              height={400}
              className="object-cover h-[450px] w-full transition-all duration-700 
                         brightness-[0.85] contrast-[1.1]
                         group-hover:scale-105 group-hover:brightness-100"
            />

            {/* Overlay Suave: Um degradê vermelho bem transparente apenas nas bordas */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E30613]/20 via-transparent to-[#E30613]/10 pointer-events-none"></div>
            
            {/* Vinheta lateral para dar profundidade */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
          </div>
          
          {/* Brilho de fundo (Glow) mais discreto */}
          <div 
            className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E30613] -z-0 opacity-10 blur-[120px]"
          ></div>
          
          {/* Cantoneira Estilizada */}
          <div 
            className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#E30613] z-20 opacity-50"
          ></div>
        </div>

        {/* Lado Direito: Texto */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="flex flex-col items-start mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter italic text-white">
              Quem <span className="text-[#E30613]">Somos</span>
            </h2>
            <div 
              className="w-16 h-1 bg-[#E30613] mt-2" 
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
            ></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A <span className="text-white font-bold">Tork Motos</span> chegou para elevar o padrão de cuidado com a sua máquina. 
            Nascemos com o objetivo de ser o porto seguro do motociclista, unindo técnica apurada e transparência absoluta em cada serviço.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Nossa oficina utiliza equipamentos modernos e processos rigorosos para garantir que cada moto 
            que passe por aqui atinja seu potencial máximo de performance e segurança. Nosso compromisso é com a excelência.
          </p>

          <div className="w-full border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1 font-bold">Acelerando desde</span>
              <span className="text-5xl font-black text-[#E30613] italic tracking-tighter">2025</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}