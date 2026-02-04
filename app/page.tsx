import TopBar from "../sections/TopBar";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Brands from "../sections/Brands";
import Location from "../sections/Location";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black">
      {/* Menu fixo sobre o Hero */}
      <div className="absolute top-0 left-0 w-full z-50 flex flex-col items-center bg-transparent">
        <TopBar />
        <Navbar />
      </div>

      <Hero />
      
      {/* Seções com IDs para o scroll suave */}
      <section id="servicos"><Services /></section>
      <section id="quem-somos"><About /></section>
      <section id="marcas"><Brands /></section>
      <section id="localizacao"><Location /></section>
      <section id="contato"><Contact /></section>
      
      <Footer />
    </main>
  );
}