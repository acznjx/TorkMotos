"use client";

export default function Navbar() {
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#marcas", label: "Marcas" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contatos" },
  ];

  return (
    <nav className="w-full flex flex-col items-center bg-transparent -mt-[1px] relative">
      
      {/* DESKTOP: Design em Trapézio - Visível apenas em telas grandes (lg) */}
      <div
        className="hidden lg:flex w-full max-w-5xl text-white py-3 items-center justify-center gap-10 text-sm font-black uppercase italic tracking-widest"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
          backgroundColor: "#E30613", 
        }}
      >
        {links.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}