
import { Coffee, CakeSlice } from "lucide-react";
import { scrollToElement } from "@/utils/scrollUtils";

const HeroSection = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center hero-gradient relative overflow-hidden pt-16 md:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500/10 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-coffee-800 mb-1 sm:mb-2 md:mb-4 fade-in leading-tight">
            Arte em Forma de
            <span className="block text-coffee-600 mt-1 md:mt-2">Chocolate</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-coffee-700 mb-4 sm:mb-6 md:mb-8 fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Desde 2017, transformando momentos em memórias doces e inesquecíveis com nossa chocolateria artesanal.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#produtos"
              className="bg-coffee-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-coffee-800 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base"
              onClick={(e) => handleNavClick(e, "produtos")}
            >
              <CakeSlice className="mr-1 sm:mr-1.5 md:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5" />
              Conheça Nossos Produtos
            </a>
            <a
              href="#sobre"
              className="bg-white/90 backdrop-blur-sm text-coffee-700 border-2 border-coffee-700 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base"
              onClick={(e) => handleNavClick(e, "sobre")}
            >
              <Coffee className="mr-1 sm:mr-1.5 md:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5" />
              Nossa História
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
