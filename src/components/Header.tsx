
import { useState, useEffect, useRef } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/scrollUtils";

const Header = () => {
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
          ? "bg-coffee-800/95 backdrop-blur-sm shadow-lg"
          : "bg-coffee-800/95 backdrop-blur-sm",
        hideNav && "transform -translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[4.5rem] md:min-h-[5rem]">
          <a 
            href="#" 
            className="group flex items-center -my-2"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img 
              src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
              alt="Chocolateria Sabor e Prazer"
              className="h-16 md:h-24 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-white text-sm font-medium tracking-wide" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
            <a href="#sobre" className="nav-link text-white text-sm font-medium tracking-wide" onClick={(e) => handleNavClick(e, "sobre")}>
              Sobre
            </a>
            <a href="#produtos" className="nav-link text-white text-sm font-medium tracking-wide" onClick={(e) => handleNavClick(e, "produtos")}>
              Produtos
            </a>
            <a href="#espaco" className="nav-link text-white text-sm font-medium tracking-wide" onClick={(e) => handleNavClick(e, "espaco")}>
              Nosso Espaço
            </a>
            <a href="#localizacao" className="nav-link text-white text-sm font-medium tracking-wide" onClick={(e) => handleNavClick(e, "localizacao")}>
              Localização
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 bg-coffee-800/95 backdrop-blur-sm transition-all duration-500 z-50",
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-coffee-700/50">
            <a href="#" className="group" onClick={(e) => handleNavClick(e, "home")}>
              <img 
                src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
            <button
              className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow gap-6 p-4">
            <a
              href="#home"
              className="text-white text-lg font-medium hover:text-coffee-200 transition-all duration-300 border-b border-coffee-700/30 pb-2 w-4/5 text-center"
              onClick={(e) => {
                handleNavClick(e, "home");
              }}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="text-white text-lg font-medium hover:text-coffee-200 transition-all duration-300 border-b border-coffee-700/30 pb-2 w-4/5 text-center"
              onClick={(e) => {
                handleNavClick(e, "sobre");
              }}
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="text-white text-lg font-medium hover:text-coffee-200 transition-all duration-300 border-b border-coffee-700/30 pb-2 w-4/5 text-center"
              onClick={(e) => {
                handleNavClick(e, "produtos");
              }}
            >
              Produtos
            </a>
            <a
              href="#espaco"
              className="text-white text-lg font-medium hover:text-coffee-200 transition-all duration-300 border-b border-coffee-700/30 pb-2 w-4/5 text-center"
              onClick={(e) => {
                handleNavClick(e, "espaco");
              }}
            >
              Nosso Espaço
            </a>
            <a
              href="#localizacao"
              className="text-white text-lg font-medium hover:text-coffee-200 transition-all duration-300 border-b border-coffee-700/30 pb-2 w-4/5 text-center"
              onClick={(e) => {
                handleNavClick(e, "localizacao");
              }}
            >
              Localização
            </a>
          </div>

          <div className="p-6 border-t border-coffee-700/50">
            <div className="flex justify-center space-x-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
