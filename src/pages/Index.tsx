
import { useState, useEffect, useRef } from "react";
import { Menu, X, Coffee, MapPin, CakeSlice, Clock, GlassWater, Facebook, Instagram, Youtube, ChevronUp, Star, Calendar, Gift, ArrowRight, Quote, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/scrollUtils";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prevScrollY = useRef(0);
  const [hideNav, setHideNav] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
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
      image: "/lovable-uploads/b5e32cbf-e35b-4914-a947-2feea0eca4c8.png",
      price: "R$ 18,90",
      tag: "Mais Vendido"
    },
    {
      name: "Picolé de Caramelo",
      description: "Picolé artesanal de chocolate com recheio de caramelo",
      image: "/lovable-uploads/ad3ef8bf-244f-4999-814c-dad4d8424b14.png",
      price: "R$ 12,50",
      tag: "Novidade"
    },
    {
      name: "Milk-shake de Chocolate",
      description: "Milk-shake cremoso com chocolate belga",
      image: "/lovable-uploads/16ab67dd-cad7-443b-a253-e728d51d0e50.png",
      price: "R$ 22,90"
    },
    {
      name: "Cheesecake de Morango",
      description: "Cheesecake com cobertura de morango e chocolate",
      image: "/lovable-uploads/c53ebb13-61ee-42c3-afc4-8f33659c4bca.png",
      price: "R$ 16,50",
      tag: "Destaque"
    },
    {
      name: "Torta Chocolate com Nozes",
      description: "Torta de chocolate belga com nozes crocantes",
      image: "/lovable-uploads/9f7e7fc6-d551-4076-ba00-e7ce5af89b11.png",
      price: "R$ 14,90"
    },
    {
      name: "Torta de Morango",
      description: "Torta de chocolate com morangos frescos",
      image: "/lovable-uploads/e162515f-b600-48eb-9c4c-cafdf7dba804.png",
      price: "R$ 15,50"
    }
  ];

  const beverages = [
    {
      name: "Chocolate Quente Clássico",
      description: "Chocolate quente com chantilly e canela",
      image: "/lovable-uploads/7bbc336e-f84f-466d-ad6e-2d3481753b50.png",
      price: "R$ 16,90"
    },
    {
      name: "Frappuccino de Chocolate",
      description: "Bebida gelada com chocolate e café",
      image: "/lovable-uploads/775f4985-a98f-4bc4-a4cb-851be536e55f.png",
      price: "R$ 19,90",
      tag: "Refrescante"
    },
    {
      name: "Café Especial",
      description: "Café premium com notas de chocolate",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&w=500",
      price: "R$ 9,90"
    },
    {
      name: "Chocolate com Menta",
      description: "Bebida quente de chocolate com toque de menta",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&w=500",
      price: "R$ 17,90",
      tag: "Novidade"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Cliente Frequente",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=150",
      content: "A melhor chocolateria que já visitei! O chocolate quente especial é simplesmente divino, e o ambiente é super aconchegante."
    },
    {
      name: "João Pereira",
      role: "Confeiteiro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&w=150",
      content: "Como profissional da área, posso afirmar que os chocolates são de altíssima qualidade. Os processos artesanais fazem toda a diferença no sabor."
    },
    {
      name: "Mariana Costa",
      role: "Influenciadora Gastronômica",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&w=150",
      content: "Um lugar que recomendo de olhos fechados para os amantes de chocolate. A torta de chocolate com nozes é uma experiência única!"
    }
  ];

  const events = [
    {
      title: "Workshop de Trufas",
      date: "15 de Outubro",
      description: "Aprenda a fazer trufas artesanais com nosso mestre chocolatier",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&w=500"
    },
    {
      title: "Degustação Premium",
      date: "28 de Outubro",
      description: "Uma noite especial com nossos chocolates mais exclusivos",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&w=500"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1526081347589-7fa3cb873804?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&w=600"
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

      <section
        id="sobre"
        className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-coffee-50/50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-coffee-200 to-coffee-100 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1542992015-2a2077932ce9?ixlib=rb-1.2.1&w=800" 
                alt="Nossa História" 
                className="relative z-10 w-full h-[400px] sm:h-[500px] object-cover rounded-xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium">Desde 2017</div>
              <h2 className="text-coffee-800 leading-tight">Nossa História</h2>
              <p className="text-coffee-600 leading-relaxed">
                Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
                momentos únicos através dos mais finos chocolates artesanais.
                Nossa paixão pela excelência e compromisso com a qualidade nos
                tornaram referência em delícias chocolatadas.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                Fundada pela chef chocolatier Maria Silva, nossa chocolateria nasceu do sonho de transformar o ato de saborear chocolate em uma experiência extraordinária.
                Cada receita é desenvolvida com carinho e testada exaustivamente para garantir o equilíbrio perfeito de sabores.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-lg">
                  <div className="text-4xl font-bold text-coffee-700">7+</div>
                  <p className="text-sm text-coffee-600">Anos de Tradição</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-lg">
                  <div className="text-4xl font-bold text-coffee-700">50+</div>
                  <p className="text-sm text-coffee-600">Criações Exclusivas</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-lg sm:col-span-2 md:col-span-1">
                  <div className="text-4xl font-bold text-coffee-700">5k+</div>
                  <p className="text-sm text-coffee-600">Clientes Satisfeitos</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex flex-col">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-coffee-300 flex items-center justify-center text-white text-xs font-bold">MS</div>
                    <div className="w-10 h-10 rounded-full bg-coffee-400 flex items-center justify-center text-white text-xs font-bold">JP</div>
                    <div className="w-10 h-10 rounded-full bg-coffee-500 flex items-center justify-center text-white text-xs font-bold">AC</div>
                  </div>
                </div>
                <div className="text-sm text-coffee-600">
                  <p>Nossa equipe apaixonada por chocolate</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24">
            <div className="p-6 bg-chocolate-50 rounded-xl card-hover border border-chocolate-100">
              <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
              <h3 className="text-coffee-800 text-xl mb-2">
                Qualidade Premium
              </h3>
              <p className="text-coffee-600 text-sm">
                Ingredientes selecionados e processos artesanais que garantem o sabor inigualável
              </p>
            </div>
            <div className="p-6 bg-chocolate-50 rounded-xl card-hover border border-chocolate-100">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
              <h3 className="text-coffee-800 text-xl mb-2">
                Tradição & Experiência
              </h3>
              <p className="text-coffee-600 text-sm">
                Anos de experiência em chocolate artesanal e receitas transmitidas através de gerações
              </p>
            </div>
            <div className="p-6 bg-chocolate-50 rounded-xl card-hover border border-chocolate-100">
              <CakeSlice className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
              <h3 className="text-coffee-800 text-xl mb-2">
                Inovação Constante
              </h3>
              <p className="text-coffee-600 text-sm">
                Criações únicas e sabores exclusivos que mantêm nosso cardápio sempre surpreendente
              </p>
            </div>
            <div className="p-6 bg-chocolate-50 rounded-xl card-hover border border-chocolate-100">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
              <h3 className="text-coffee-800 text-xl mb-2">
                Experiência Única
              </h3>
              <p className="text-coffee-600 text-sm">
                Um ambiente projetado para proporcionar momentos inesquecíveis aos nossos clientes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="py-20 sm:py-28 bg-gradient-to-b from-white to-chocolate-50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium mb-4">Especialidades</div>
            <h2 className="text-coffee-800 mb-4 sm:mb-6">
              Nossos Produtos
            </h2>
            <p className="text-coffee-600">
              Descubra o universo de sabores que preparamos cuidadosamente para você. 
              Cada produto é uma experiência única de prazer e indulgência.
            </p>
          </div>
          
          <div className="mb-16 sm:mb-24">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-coffee-700 text-2xl sm:text-3xl font-serif">Doces e Tortas</h3>
              <a href="#" className="flex items-center text-coffee-600 hover:text-coffee-800 transition-colors text-sm sm:text-base">
                Ver todos <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover relative group">
                  {product.tag && (
                    <div className="absolute top-4 right-4 z-20 bg-coffee-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}
                  <div className="relative overflow-hidden aspect-video">
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
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl sm:text-2xl text-coffee-800 font-serif">
                        {product.name}
                      </h3>
                      <div className="text-lg sm:text-xl text-coffee-700 font-bold">
                        {product.price}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-coffee-600 mb-4">
                      {product.description}
                    </p>
                    <button className="w-full py-2 bg-coffee-100 text-coffee-800 rounded-lg hover:bg-coffee-200 transition-colors text-sm font-medium">
                      Adicionar ao Pedido
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-coffee-700 text-2xl sm:text-3xl font-serif">Bebidas Especiais</h3>
              <a href="#" className="flex items-center text-coffee-600 hover:text-coffee-800 transition-colors text-sm sm:text-base">
                Ver todas <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {beverages.map((beverage, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover relative group">
                  {beverage.tag && (
                    <div className="absolute top-4 right-4 z-20 bg-coffee-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {beverage.tag}
                    </div>
                  )}
                  <div className="relative overflow-hidden aspect-video">
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
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-coffee-800 font-serif">
                        {beverage.name}
                      </h3>
                      <div className="text-lg text-coffee-700 font-bold">
                        {beverage.price}
                      </div>
                    </div>
                    <p className="text-sm text-coffee-600 mb-4">
                      {beverage.description}
                    </p>
                    <button className="w-full py-2 bg-coffee-100 text-coffee-800 rounded-lg hover:bg-coffee-200 transition-colors text-sm font-medium">
                      Adicionar ao Pedido
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="eventos"
        className="py-20 sm:py-28 bg-white relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium mb-4">Experiências</div>
            <h2 className="text-coffee-800 mb-4 sm:mb-6">
              Eventos Especiais
            </h2>
            <p className="text-coffee-600">
              Além das delícias do dia a dia, oferecemos eventos exclusivos para os amantes de chocolate. 
              Confira nossa programação e participe dessas experiências inesquecíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-coffee-100 flex flex-col sm:flex-row">
                <div className="sm:w-2/5 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-coffee-600 mr-2" />
                      <span className="text-coffee-600 text-sm font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-coffee-800 mb-2 font-serif">{event.title}</h3>
                    <p className="text-coffee-600 text-sm mb-4">{event.description}</p>
                  </div>
                  <button className="bg-coffee-700 text-white py-2 px-4 rounded-lg hover:bg-coffee-800 transition-colors inline-flex items-center justify-center text-sm">
                    <Gift className="mr-2 w-4 h-4" /> Garanta sua Vaga
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-coffee-50 rounded-xl border border-coffee-100">
              <p className="text-coffee-700 text-sm sm:text-base">
                <span className="font-medium">Eventos Corporativos:</span> Oferecemos pacotes especiais para empresas. Entre em contato para mais informações.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="py-20 sm:py-28 bg-chocolate-50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium mb-4">Momentos</div>
            <h2 className="text-coffee-800 mb-4 sm:mb-6">
              Nossa Galeria
            </h2>
            <p className="text-coffee-600">
              Capture a essência da experiência da Chocolateria Sabor e Prazer através de imagens que revelam 
              o cuidado e a paixão que dedicamos a cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className={`overflow-hidden rounded-2xl shadow-lg ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                <div className="group cursor-pointer relative">
                  <img 
                    src={image} 
                    alt={`Galeria imagem ${index + 1}`} 
                    className="w-full h-full object-cover aspect-square sm:aspect-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-coffee-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-coffee-50 text-sm sm:text-base font-medium"
            >
              <Instagram className="mr-2 w-5 h-5" /> Siga-nos no Instagram
            </a>
          </div>
        </div>
      </section>

      <section
        id="depoimentos"
        className="py-20 sm:py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-coffee-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee-100 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium mb-4">Opiniões</div>
            <h2 className="text-coffee-800 mb-4 sm:mb-6">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-coffee-600">
              A satisfação de nossos clientes é nossa maior recompensa. 
              Confira alguns depoimentos de quem já viveu a experiência Sabor e Prazer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="min-w-full">
                      <div className="bg-coffee-50 rounded-2xl p-8 sm:p-10 shadow-lg relative">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-coffee-200 opacity-40" />
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                          <div className="sm:w-1/4 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-md mx-auto sm:mx-0"
                            />
                          </div>
                          <div className="sm:w-3/4">
                            <p className="text-coffee-700 text-lg sm:text-xl mb-6 relative z-10 font-serif italic">
                              "{testimonial.content}"
                            </p>
                            <div>
                              <h4 className="text-coffee-800 text-lg font-semibold">{testimonial.name}</h4>
                              <p className="text-coffee-600 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeTestimonial === index ? "bg-coffee-700" : "bg-coffee-200"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-coffee-50 px-6 py-3 rounded-xl">
              <MessageCircle className="w-5 h-5 text-coffee-700" />
              <span className="text-coffee-700 text-sm">Mais de 500 avaliações 5 estrelas</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="espaco"
        className="py-20 sm:py-28 bg-gradient-to-b from-white to-coffee-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium">Visite-nos</div>
              <h2 className="text-coffee-800 mb-4 sm:mb-6">
                Um Ambiente Acolhedor
              </h2>
              <p className="text-coffee-600 leading-relaxed">
                Nossa chocolateria foi cuidadosamente projetada para proporcionar
                momentos únicos de prazer e conforto. Em um ambiente que combina
                elegância e aconchego, você pode desfrutar de nossas delícias
                enquanto se perde em conversas agradáveis.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                O design interior reflete nossa paixão pelo chocolate e cada detalhe foi pensado para criar uma atmosfera acolhedora e sofisticada. Venha nos visitar e descubra por que somos o destino preferido dos amantes de chocolate.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center space-x-3 text-coffee-700">
                  <Coffee className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-coffee-600" />
                  <span className="text-sm sm:text-base">Café Premium</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-coffee-600" />
                  <span className="text-sm sm:text-base">Ambiente Climatizado</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <GlassWater className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-coffee-600" />
                  <span className="text-sm sm:text-base">Menu Exclusivo</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-coffee-600" />
                  <span className="text-sm sm:text-base">Localização Prime</span>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 mt-4 bg-coffee-700 text-white rounded-lg hover:bg-coffee-800 transition-colors text-sm sm:text-base"
              >
                Conheça Nosso Espaço <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-coffee-200 to-coffee-100 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&w=800"
                alt="Nosso Espaço"
                className="relative z-10 w-full h-[350px] sm:h-[500px] object-cover rounded-xl shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 w-28 h-28 sm:w-36 sm:h-36 bg-white/90 backdrop-blur rounded-lg shadow-xl z-20 flex flex-col items-center justify-center p-3">
                <CakeSlice className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-700 mb-1" />
                <span className="text-coffee-800 text-xs sm:text-sm font-medium text-center">Ambiente criado para experiências únicas</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16 sm:mt-24">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto bg-coffee-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coffee-700">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h.01" />
                  <path d="M17 7h.01" />
                  <path d="M7 17h.01" />
                  <path d="M17 17h.01" />
                </svg>
              </div>
              <h3 className="text-coffee-800 font-medium mb-2">Wi-Fi Gratuito</h3>
              <p className="text-coffee-600 text-sm">Conecte-se enquanto desfruta de nossas delícias</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto bg-coffee-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coffee-700">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>
              <h3 className="text-coffee-800 font-medium mb-2">Ambiente Acolhedor</h3>
              <p className="text-coffee-600 text-sm">Decoração especial que proporciona conforto</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto bg-coffee-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coffee-700">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-coffee-800 font-medium mb-2">Atendimento</h3>
              <p className="text-coffee-600 text-sm">Equipe treinada para lhe oferecer o melhor</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto bg-coffee-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coffee-700">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </div>
              <h3 className="text-coffee-800 font-medium mb-2">Música Ambiente</h3>
              <p className="text-coffee-600 text-sm">Seleção musical para tornar sua visita ainda mais agradável</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="py-20 sm:py-28 bg-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium mb-4">Encontre-nos</div>
            <h2 className="text-coffee-800 mb-4 sm:mb-6">
              Localização
            </h2>
            <p className="text-coffee-600">
              Estamos localizados em um ponto de fácil acesso, com estacionamento 
              próximo e ambiente acolhedor. Venha nos visitar!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6">
                <h3 className="text-coffee-800 text-2xl font-serif">
                  Visite-nos
                </h3>
                <div className="space-y-4 text-coffee-600">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 text-coffee-600 mt-1" />
                    <div>
                      <p className="font-medium text-coffee-700">Endereço:</p>
                      <p>
                        Rua das Delícias, 123
                        <br />
                        Bairro do Sabor
                        <br />
                        Cidade - Estado
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0 text-coffee-600 mt-1" />
                    <div>
                      <p className="font-medium text-coffee-700">Horário de Funcionamento:</p>
                      <p>
                        Segunda a Sábado: 9h às 20h
                        <br />
                        Domingo: 10h às 18h
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0 text-coffee-600 mt-1">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <p className="font-medium text-coffee-700">Contato:</p>
                      <a
                        href="tel:+551199999999"
                        className="block text-coffee-700 hover:text-coffee-800 transition-colors duration-200"
                      >
                        (11) 9999-9999
                      </a>
                      <a
                        href="mailto:contato@saboreprazer.com"
                        className="block text-coffee-700 hover:text-coffee-800 transition-colors duration-200"
                      >
                        contato@saboreprazer.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-coffee-100">
                  <h4 className="text-coffee-700 font-medium mb-2">Como Chegar:</h4>
                  <p className="text-coffee-600 text-sm mb-4">A apenas 5 minutos da estação de metrô Central, com fácil acesso por transporte público.</p>
                  <div className="flex space-x-3">
                    <button className="flex items-center justify-center px-4 py-2 bg-coffee-700 text-white rounded-lg hover:bg-coffee-800 transition-colors text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Obter Direções
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 bg-white text-coffee-700 border border-coffee-200 rounded-lg hover:bg-coffee-50 transition-colors text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Ver no Mapa
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden w-full h-full shadow-lg relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5615608572666!2d-43.70549392468627!3d-22.74453203209242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99574176ddaa05%3A0x75f1362fa8ff43bd!2sChocolateria%20Sabor%20e%20Prazer!5e0!3m2!1spt-BR!2sbr!4v1740412609192!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "300px", height: "100%" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Chocolateria Sabor e Prazer"
                  className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-coffee-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-coffee-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <img 
                src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-20 sm:h-24 w-auto mx-auto md:mx-0 mb-6"
              />
              <p className="text-coffee-100 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                Desde 2017 oferecendo momentos únicos e experiências inesquecíveis para os amantes de chocolate.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
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
            
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl mb-6 font-medium">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-coffee-100 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")} className="text-coffee-100 hover:text-white transition-colors">Sobre Nós</a>
                </li>
                <li>
                  <a href="#produtos" onClick={(e) => handleNavClick(e, "produtos")} className="text-coffee-100 hover:text-white transition-colors">Produtos</a>
                </li>
                <li>
                  <a href="#eventos" onClick={(e) => handleNavClick(e, "eventos")} className="text-coffee-100 hover:text-white transition-colors">Eventos</a>
                </li>
                <li>
                  <a href="#galeria" onClick={(e) => handleNavClick(e, "galeria")} className="text-coffee-100 hover:text-white transition-colors">Galeria</a>
                </li>
                <li>
                  <a href="#contato" onClick={(e) => handleNavClick(e, "contato")} className="text-coffee-100 hover:text-white transition-colors">Contato</a>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl mb-6 font-medium">Contato</h4>
              <div className="space-y-3 text-coffee-100">
                <p className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Rua das Delícias, 123, Bairro do Sabor</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(11) 9999-9999</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>contato@saboreprazer.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Seg-Sáb: 9h-20h | Dom: 10h-18h</span>
                </p>
              </div>
              
              <div className="mt-6">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="px-4 py-2 bg-coffee-700 text-white placeholder-coffee-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-200 flex-grow text-sm"
                    required
                  />
                  <button type="submit" className="bg-coffee-600 hover:bg-coffee-500 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Assinar Newsletter
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="border-t border-coffee-700/50 mt-12 sm:mt-16 pt-8 text-center">
            <p className="text-coffee-200 text-sm">&copy; 2024 Chocolateria Sabor e Prazer. Todos os direitos reservados.</p>
            <p className="text-coffee-300/60 text-xs mt-2">Desenvolvido com ♥ para os amantes de chocolate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
