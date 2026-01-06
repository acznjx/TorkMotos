import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <section className="w-full bg-white relative z-10 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-3 md:py-4 flex items-center justify-between">
        
        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-5 text-gray-400 text-lg">
          <a href="#" className="hover:text-[#E30613] transition-all duration-300 transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#E30613] transition-all duration-300 transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#E30613] transition-all duration-300 transform hover:scale-110">
            <FaWhatsapp />
          </a>
        </div>

        {/* Logo: Ajuste de tamanho para mobile não ficar desproporcional */}
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

        {/* Contato */}
        <div className="flex items-center">
          <a 
            href="https://wa.me/5551000000000" 
            target="_blank"
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col items-end mr-2 hidden md:flex">
              <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest leading-none">Fale Conosco</span>
              <span className="text-black font-black text-sm tracking-tighter">(51) 00000-0000</span>
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