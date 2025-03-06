
import { useState, useEffect, useRef } from "react";
import { Menu, X, Coffee, MapPin, CakeSlice, Clock, GlassWater, Facebook, Instagram, Youtube, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/scrollUtils";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prevScrollY = useRef(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setShowScrollTop(currentScrollY > 300);
      
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const products = [
    {
      name: "Chocolate Quente Especial",
      description: "Chocolate quente cremoso com chantilly e raspas de chocolate",
      image: "/lovable-uploads/b5e32cbf-e35b-4914-a947-2feea0eca4c8.png"
    },
    {
      name: "Picolé de Caramelo",
      description: "Picolé artesanal de chocolate com recheio de caramelo",
      image: "/lovable-uploads/ad3ef8bf-244f-4999-814c-dad4d8424b14.png"
    },
    {
      name: "Milk-shake de Chocolate",
      description: "Milk-shake cremoso com chocolate belga",
      image: "/lovable-uploads/16ab67dd-cad7-443b-a253-e728d51d0e50.png"
    },
    {
      name: "Cheesecake de Morango",
      description: "Cheesecake com cobertura de morango e chocolate",
      image: "/lovable-uploads/c53ebb13-61ee-42c3-afc4-8f33659c4bca.png"
    },
    {
      name: "Torta Chocolate com Nozes",
      description: "Torta de chocolate belga com nozes crocantes",
      image: "/lovable-uploads/9f7e7fc6-d551-4076-ba00-e7ce5af89b11.png"
    },
    {
      name: "Torta de Morango",
      description: "Torta de chocolate com morangos frescos",
      image: "/lovable-uploads/e162515f-b600-48eb-9c4c-cafdf7dba804.png"
    }
  ];

  const beverages = [
    {
      name: "Chocolate Quente Clássico",
      description: "Chocolate quente com chantilly e canela",
      image: "/lovable-uploads/7bbc336e-f84f-466d-ad6e-2d3481753b50.png"
    },
    {
      name: "Frappuccino de Chocolate",
      description: "Bebida gelada com chocolate e café",
      image: "/lovable-uploads/775f4985-a98f-4bc4-a4cb-851be536e55f.png"
    }
  ];

  return (
    <div className="min-h-screen">
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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden fixed inset-0 bg-coffee-800 transition-all duration-500 z-50",
            isMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-coffee-700">
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
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-6 sm:gap-8 p-4">
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

            <div className="p-4 sm:p-6 border-t border-coffee-700">
              <div className="flex justify-center space-x-6 sm:space-x-8">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-2 sm:p-3 bg-coffee-700 text-white rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110",
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={20} className="sm:w-6 sm:h-6" />
      </button>

      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center hero-gradient relative overflow-hidden pt-20 sm:pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
            <h1 className="text-coffee-800 mb-3 sm:mb-4 fade-in leading-tight">
              Arte em Forma de
              <span className="block text-coffee-600 mt-1 sm:mt-2">Chocolate</span>
            </h1>
            <p className="text-coffee-700 mb-6 sm:mb-8 fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Desde 2017, transformando momentos em memórias doces e inesquecíveis com nossa chocolateria artesanal.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#produtos"
                className="bg-coffee-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-coffee-800 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
              >
                <CakeSlice className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Conheça Nossos Produtos
              </a>
              <a
                href="#sobre"
                className="bg-white/90 backdrop-blur-sm text-coffee-700 border-2 border-coffee-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
              >
                <Coffee className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Nossa História
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section
        id="sobre"
        className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-coffee-800 mb-4 sm:mb-6">Nossa História</h2>
            <p className="text-coffee-600 mb-8 sm:mb-10 leading-relaxed">
              Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
              momentos únicos através dos mais finos chocolates artesanais.
              Nossa paixão pela excelência e compromisso com a qualidade nos
              tornaram referência em delícias chocolatadas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-chocolate-50 rounded-xl card-hover">
                <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-700 mx-auto mb-2 sm:mb-3" />
                <h3 className="text-coffee-800 mb-1 sm:mb-2">
                  Qualidade Premium
                </h3>
                <p className="text-coffee-600 text-xs sm:text-sm">
                  Ingredientes selecionados e processos artesanais
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-chocolate-50 rounded-xl card-hover">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-700 mx-auto mb-2 sm:mb-3" />
                <h3 className="text-coffee-800 mb-1 sm:mb-2">
                  Tradição
                </h3>
                <p className="text-coffee-600 text-xs sm:text-sm">
                  Anos de experiência em chocolate artesanal
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-chocolate-50 rounded-xl card-hover sm:col-span-2 md:col-span-1">
                <CakeSlice className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-700 mx-auto mb-2 sm:mb-3" />
                <h3 className="text-coffee-800 mb-1 sm:mb-2">
                  Inovação
                </h3>
                <p className="text-coffee-600 text-xs sm:text-sm">
                  Criações únicas e sabores exclusivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-chocolate-50 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-coffee-800 text-center mb-10 sm:mb-16">
            Nossos Produtos
          </h2>
          
          <div className="mb-10 sm:mb-16">
            <h3 className="text-coffee-700 mb-6 sm:mb-8 text-center">Doces e Tortas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative overflow-hidden group aspect-video">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 sm:p-6">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <CakeSlice className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 mx-auto" />
                        <p className="text-sm sm:text-base font-medium">Ver Detalhes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl text-coffee-800 mb-1 sm:mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-coffee-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-coffee-700 mb-6 sm:mb-8 text-center">Bebidas Especiais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {beverages.map((beverage, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative overflow-hidden group aspect-video">
                    <img
                      src={beverage.image}
                      alt={beverage.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 sm:p-6">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Coffee className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 mx-auto" />
                        <p className="text-sm sm:text-base font-medium">Ver Detalhes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl text-coffee-800 mb-1 sm:mb-2">
                      {beverage.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-coffee-600">
                      {beverage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="espaco"
        className="py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-coffee-800 mb-4 sm:mb-6">
                Um Ambiente Acolhedor
              </h2>
              <p className="text-coffee-600 leading-relaxed">
                Nossa chocolateria foi cuidadosamente projetada para proporcionar
                momentos únicos de prazer e conforto. Em um ambiente que combina
                elegância e aconchego, você pode desfrutar de nossas delícias
                enquanto se perde em conversas agradáveis.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center space-x-2 sm:space-x-3 text-coffee-700">
                  <Coffee className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">Café Premium</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-coffee-700">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">Ambiente Climatizado</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-coffee-700">
                  <GlassWater className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">Menu Exclusivo</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-coffee-700">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">Localização Prime</span>
                </div>
              </div>
            </div>
            <div className="relative mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
                alt="Nosso Espaço"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="py-16 sm:py-20 md:py-24 bg-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-coffee-800 text-center mb-10 sm:mb-16">
            Localização
          </h2>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-coffee-800">
                  Visite-nos
                </h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-coffee-600">
                  <p>
                    Rua das Delícias, 123
                    <br />
                    Bairro do Sabor
                    <br />
                    Cidade - Estado
                  </p>
                  <div>
                    <strong className="text-coffee-800">Horário de Funcionamento:</strong>
                    <br />
                    Segunda a Sábado: 9h às 20h
                    <br />
                    Domingo: 10h às 18h
                  </div>
                  <a
                    href="tel:+551199999999"
                    className="inline-block text-coffee-700 hover:text-coffee-800 transition-colors duration-200"
                  >
                    (11) 9999-9999
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden w-full h-full shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5615608572666!2d-43.70549392468627!3d-22.74453203209242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99574176ddaa05%3A0x75f1362fa8ff43bd!2sChocolateria%20Sabor%20e%20Prazer!5e0!3m2!1spt-BR!2sbr!4v1740412609192!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "250px", height: "100%" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Chocolateria Sabor e Prazer"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-coffee-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Contato</h4>
              <div className="text-coffee-100 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
                <p>Email: contato@saboreprazer.com</p>
                <p>Tel: (11) 9999-9999</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Siga-nos</h4>
              <div className="flex space-x-4 sm:space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                >
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-coffee-100">
            <p className="text-sm sm:text-base md:text-lg">&copy; 2024 Chocolateria Sabor e Prazer. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
