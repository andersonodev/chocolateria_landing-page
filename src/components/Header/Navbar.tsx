
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/scrollUtils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollY = useRef(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > 100) {
        const isScrollingDown = currentScrollY > prevScrollY.current;
        setHideNav(isScrollingDown);
      } else {
        setHideNav(false);
      }
      
      prevScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-coffee-800 shadow-md"
          : "bg-coffee-800",
        hideNav && "transform -translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[4rem] sm:min-h-[5rem]">
          <a 
            href="#" 
            className="group flex items-center -my-2"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img 
              src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
              alt="Chocolateria Sabor e Prazer"
              className="h-16 sm:h-20 md:h-24 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
            <a href="#sobre" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "sobre")}>
              Sobre
            </a>
            <a href="#produtos" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "produtos")}>
              Produtos
            </a>
            <a href="#eventos" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "eventos")}>
              Eventos
            </a>
            <a href="#galeria" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "galeria")}>
              Galeria
            </a>
            <a href="#depoimentos" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "depoimentos")}>
              Depoimentos
            </a>
            <a href="#espaco" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "espaco")}>
              Nosso Espaço
            </a>
            <a href="#localizacao" className="nav-link text-white text-sm font-medium hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5" onClick={(e) => handleNavClick(e, "localizacao")}>
              Localização
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-coffee-800 transition-all duration-500 z-50",
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full bg-coffee-800">
          <div className="flex items-center justify-between p-4 border-b border-coffee-700 bg-coffee-800">
            <a href="#" className="group" onClick={(e) => handleNavClick(e, "home")}>
              <img 
                src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-14 sm:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
            <button
              className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow gap-6 sm:gap-8 p-4 overflow-auto bg-coffee-800 mobile-menu-content">
            <a
              href="#home"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "home");
              }}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "sobre");
              }}
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "produtos");
              }}
            >
              Produtos
            </a>
            <a
              href="#eventos"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "eventos");
              }}
            >
              Eventos
            </a>
            <a
              href="#galeria"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "galeria");
              }}
            >
              Galeria
            </a>
            <a
              href="#depoimentos"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "depoimentos");
              }}
            >
              Depoimentos
            </a>
            <a
              href="#espaco"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "espaco");
              }}
            >
              Nosso Espaço
            </a>
            <a
              href="#localizacao"
              className="text-white text-lg sm:text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                handleNavClick(e, "localizacao");
              }}
            >
              Localização
            </a>
          </div>

          <div className="p-4 sm:p-6 border-t border-coffee-700 bg-coffee-800 mobile-menu-footer">
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Youtube"
              >
                <Youtube size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
