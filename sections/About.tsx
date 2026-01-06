"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="quem-somos" className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Imagem com moldura estilizada */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#E30613]/30">
            <Image
              src="/image/oficina-motos.jpg" // Substitua pelo caminho real da sua foto
              alt="Sobre a Tork Motos"
              width={600}
              height={400}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {/* Detalhe geométrico de fundo inspirado no clip-path */}
          <div 
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#E30613] -z-0 opacity-20 blur-3xl"
          ></div>
          <div 
            className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#E30613] z-20"
          ></div>
        </div>

        {/* Lado Direito: Texto e História */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="flex flex-col items-start mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter italic">
              Quem <span className="text-[#E30613]">Somos</span>
            </h2>
            <div 
              className="w-16 h-1 bg-[#E30613] mt-2" 
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
            ></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A <span className="text-white font-bold">Tork Motos</span> nasceu da paixão pelas duas rodas. 
            Com anos de experiência no mercado, nos tornamos referência em qualidade e confiança 
            para motociclistas que não abrem mão de segurança e performance.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Nossa oficina conta com tecnologia de ponta e uma equipe especializada para cuidar da sua 
            moto como se fosse nossa. Seja para uma revisão preventiva ou uma personalização exclusiva, 
            estamos prontos para acelerar com você.
          </p>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl font-bold text-[#E30613]">+10 Anos</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">De Experiência</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[#E30613]">+5.000</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Motos Atendidas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}