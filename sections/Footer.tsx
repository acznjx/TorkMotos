"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 px-6 relative border-t border-white/5">
      
      {/* Botão Voltar ao Topo (Estilo Trapézio) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button 
          onClick={scrollToTop}
          className="bg-[#E30613] p-4 text-white hover:bg-black transition-colors duration-300 shadow-2xl"
          style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
        >
          <FaChevronUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <Image
              src="/image/tork-motos.png"
              alt="Tork Motos Logo"
              width={140}
              height={50}
              className="brightness-0 invert object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Referência em mecânica especializada e venda de motos de alta performance. Paixão por duas rodas e compromisso com sua segurança.
            </p>
            <div className="flex gap-4">
              {/* LINK DO INSTAGRAM ADICIONADO ABAIXO */}
              <a 
                href="https://www.instagram.com/torkmotos71/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#E30613] transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#E30613] transition-all duration-300">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold uppercase italic mb-6 border-l-4 border-[#E30613] pl-3">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#marcas" className="hover:text-white transition-colors">Marcas</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Rápido */}
          <div>
            <h4 className="text-lg font-bold uppercase italic mb-6 border-l-4 border-[#E30613] pl-3">Contato</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#E30613]" /> (51) 51 9 9439-3900
              </li>
              <li>contato@torkmotos.com.br</li>
              <li>Av. Dorival Cândido Luz de Oliveira, 3905</li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter/Selo */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Qualidade Garantida</h4>
            <p className="text-xs text-gray-500 mb-4">Peças originais e mão de obra certificada para todas as marcas.</p>
            <div className="w-full h-1 bg-[#E30613]/20 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-[#E30613]"></div>
            </div>
          </div>

        </div>

        {/* Copyright Final */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest font-medium">
          <p>© 2024 Tork Motos - Todos os direitos reservados</p>
          <p>Desenvolvido por acznjx</p>
        </div>
      </div>
    </footer>
  );
}