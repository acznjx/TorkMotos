"use client";

import Image from "next/image";

export default function Brands() {
  // Caminhos apontando para sua pasta /public/image/brands/
  const motoBrands = [
    { name: "Honda", src: "/image/brands/honda.png" },
    { name: "Yamaha", src: "/image/brands/yamaha.png" },
    { name: "Kawasaki", src: "/image/brands/kawasaki.png" },
    { name: "BMW", src: "/image/brands/bmw.png" },
    { name: "Suzuki", src: "/image/brands/suzuki.png" },
    { name: "Triumph", src: "/image/brands/triumph.png" },
  ];

  const accessoryBrands = [
    { name: "LS2", src: "/image/brands/ls2.png" },
    { name: "Alpinestars", src: "/image/brands/alpinestars.png" },
    { name: "Pirelli", src: "/image/brands/pirelli.png" },
    { name: "Mobil", src: "/image/brands/mobil.png" },
    { name: "Norisk", src: "/image/brands/norisk.png" },
    { name: "Motul", src: "/image/brands/motul.png" },
  ];

  return (
    <section id="marcas" className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Estilo Veloz */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white text-center leading-none">
            AS MELHORES <br />
            <span className="text-[#E30613] inline-flex flex-col">
              MARCAS
              <span className="h-2 w-full bg-[#E30613] mt-2" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}></span>
            </span>
          </h2>
        </div>

        {/* Grupo 1: Motos */}
        <div className="mb-20">
          <h3 className="text-[#E30613] text-sm font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-4 italic">
            Motos <div className="h-[1px] bg-white/10 flex-grow"></div>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {motoBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative h-28 bg-[#141414] border border-white/5 flex items-center justify-center p-6 rounded-lg transition-all duration-500 hover:border-[#E30613]/50 hover:bg-[#1a1a1a]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-70 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grupo 2: Acessórios */}
        <div>
          <h3 className="text-[#E30613] text-sm font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-4 italic">
            Acessórios & Peças <div className="h-[1px] bg-white/10 flex-grow"></div>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {accessoryBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative h-28 bg-[#141414] border border-white/5 flex items-center justify-center p-6 rounded-lg transition-all duration-500 hover:border-[#E30613]/50 hover:bg-[#1a1a1a]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-70 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}