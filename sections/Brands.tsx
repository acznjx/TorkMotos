"use client";

import Image from "next/image";

export default function Brands() {
  const motoBrands = [
    { name: "Honda", src: "https://i.imgur.com/DxNtCDu.png" },
    { name: "Yamaha", src: "https://i.imgur.com/iHrqA65.png" },
    { name: "Kawasaki", src: "https://i.imgur.com/UBAcT2Y.png" },
    { name: "BMW", src: "https://i.imgur.com/n8Zkpey.png" },
    { name: "Suzuki", src: "https://i.imgur.com/jz8QBqD.png" },
    { name: "Triumph", src: "https://i.imgur.com/ziHOyDU.png" },
  ];

  const accessoryBrands = [
    { name: "Alpinestars", src: "https://i.imgur.com/oumjKF4.png" },
    { name: "LS2", src: "https://i.imgur.com/AlTbO19.png" },
    { name: "Pirelli", src: "https://i.imgur.com/AQ3TirX.png" },
    { name: "Mobil", src: "https://i.imgur.com/Tn17iuh.png" },
    { name: "Norisk", src: "https://i.imgur.com/0dWU7ki.png" },
    { name: "Motul", src: "https://i.imgur.com/iVe5Ct9.png" },
  ];

  return (
    <section id="marcas" className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título em uma única linha */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic text-white text-center whitespace-nowrap">
            AS MELHORES <span className="text-[#E30613]">MARCAS</span>
          </h2>
          <div 
            className="h-2 w-48 bg-[#E30613] mt-4" 
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          ></div>
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
                    sizes="(max-width: 768px) 50vw, 15vw"
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
                    sizes="(max-width: 768px) 50vw, 15vw"
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