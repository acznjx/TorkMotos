"use client";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contato" className="bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter italic">
            Fale <span className="text-[#E30613]">Conosco</span>
          </h2>
          <div 
            className="w-20 h-1.5 bg-[#E30613] mt-4" 
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Dúvidas sobre serviços ou orçamentos? Entre em contato com nossa equipe especializada.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-lg border border-white/5 text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">WhatsApp</span>
                  <span className="text-xl font-bold">(51) 99999-9999</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-lg border border-white/5 text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">E-mail</span>
                  <span className="text-xl font-bold">contato@torkmotos.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-lg border border-white/5 text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                  <FaClock size={22} />
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">Horário</span>
                  <span className="text-lg font-bold italic">Seg - Sex: 08h às 18h | Sáb: 08h às 12h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com Botão Estilizado */}
          <form className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl space-y-4">
            <input 
              type="text" 
              placeholder="Seu Nome" 
              className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-[#E30613] outline-none transition-all text-white"
            />
            <input 
              type="email" 
              placeholder="Seu E-mail" 
              className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-[#E30613] outline-none transition-all text-white"
            />
            <textarea 
              placeholder="Sua Mensagem" 
              rows={4}
              className="w-full bg-black border border-white/10 rounded-lg p-4 focus:border-[#E30613] outline-none transition-all text-white resize-none"
            ></textarea>
            
            {/* Botão com estilo Trapézio inspirado na Navbar */}
            <button 
              className="w-full py-4 text-white font-black uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-95"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                backgroundColor: "#E30613", 
              }}
            >
              Enviar Mensagem
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}