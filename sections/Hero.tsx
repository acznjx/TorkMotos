"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      
      {/* Imagem de Fundo */}
      <Image
        src="/background.png" 
        alt="Tork Motos Background"
        fill
        priority
        className="object-cover object-center scale-105 animate-slow-zoom" 
      />

      {/* Overlay Gradiente: Escurece o topo para a Navbar e o centro para o texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
          Acelere com <br />
          <span className="text-[#E30613] drop-shadow-[0_5px_15px_rgba(227,6,19,0.4)]">Confiança</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialistas em mecânica de alta performance e as melhores marcas do mercado. Sua moto em boas mãos.
        </p>

        {/* Botões Estilizados */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#servicos"
            className="w-full sm:w-auto px-10 py-4 text-white font-black uppercase tracking-widest transition-all hover:brightness-125 active:scale-95"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              backgroundColor: "#E30613", 
            }}
          >
            Ver Serviços
          </a>
          <a 
            href="#contato"
            className="w-full sm:w-auto px-10 py-4 text-white font-black uppercase tracking-widest border-2 border-white/20 hover:bg-white hover:text-black transition-all active:scale-95"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Detalhe Inferior */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-[#E30613] to-transparent rounded-full" />
      </div>
    </section>
  );
}