
import React from "react";
import { CakeSlice, Coffee, GlassWater } from "lucide-react";
import { scrollToElement } from "@/utils/scrollUtils";

const HeroSection: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center hero-gradient relative overflow-hidden pt-20 sm:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500/10 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
          <h1 className="text-coffee-800 mb-3 sm:mb-4 fade-in leading-tight">
            Arte em Forma de
            <span className="block text-coffee-600 mt-1 sm:mt-2 font-bold">Chocolate</span>
          </h1>
          <p className="text-coffee-700 mb-6 sm:mb-8 fade-in max-w-2xl mx-auto leading-relaxed">
            Desde 2017, transformando momentos em memórias doces e inesquecíveis com nossa chocolateria artesanal.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 fade-in">
            <a
              href="#produtos"
              className="bg-coffee-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-coffee-800 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              onClick={(e) => handleNavClick(e, "produtos")}
            >
              <CakeSlice className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Conheça Nossos Produtos
            </a>
            <a
              href="#sobre"
              className="bg-white/90 backdrop-blur-sm text-coffee-700 border-2 border-coffee-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              onClick={(e) => handleNavClick(e, "sobre")}
            >
              <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Nossa História
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 relative z-10 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center fade-in">
            <Coffee className="w-12 h-12 mx-auto text-coffee-600 mb-4" />
            <h3 className="text-coffee-700 font-serif font-semibold mb-2">Chocolates Artesanais</h3>
            <p className="text-coffee-600 text-sm">Produzidos com ingredientes selecionados e técnicas tradicionais</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center fade-in" style={{ animationDelay: "0.2s" }}>
            <CakeSlice className="w-12 h-12 mx-auto text-coffee-600 mb-4" />
            <h3 className="text-coffee-700 font-serif font-semibold mb-2">Doces Exclusivos</h3>
            <p className="text-coffee-600 text-sm">Criações únicas que surpreendem a cada mordida</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center fade-in" style={{ animationDelay: "0.4s" }}>
            <GlassWater className="w-12 h-12 mx-auto text-coffee-600 mb-4" />
            <h3 className="text-coffee-700 font-serif font-semibold mb-2">Experiências Sensoriais</h3>
            <p className="text-coffee-600 text-sm">Sabores que despertam todos os sentidos</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
