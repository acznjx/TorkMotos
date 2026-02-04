import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <section className="w-full bg-white relative z-10 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-3 md:py-4 flex items-center justify-between">
        
        {/* Social Icons - Desktop com Links */}
        <div className="hidden lg:flex items-center gap-5 text-gray-400 text-lg">
          <a 
            href="https://www.instagram.com/torkmotos71/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#E30613] transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/SEU_PERFIL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#E30613] transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=555194393900" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/image/tork-motos.png"
            alt="Tork Motos"
            width={140}
            height={50}
            priority
            className="object-contain w-[110px] md:w-[140px]"
          />
        </div>

        {/* Contato Principal */}
        <div className="flex items-center">
          <a 
            href="https://api.whatsapp.com/send?phone=555194393900" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col items-end mr-2 hidden md:flex">
              <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest leading-none">Fale Conosco</span>
              <span className="text-black font-black text-sm tracking-tighter">(51) 9439-3900</span>
            </div>
            <div className="bg-green-500 p-2 rounded-full text-white shadow-lg shadow-green-200 group-hover:bg-green-600 transition-all md:p-2.5">
              <FaWhatsapp className="text-xl md:text-lg" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}