
import { useState, useEffect, useRef } from "react";
import { Menu, X, Coffee, MapPin, CakeSlice, Clock, GlassWater, Facebook, Instagram, Youtube, ChevronUp, Star, Award, Heart, Gift, Play, Users, ShoppingBag, ChevronRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/scrollUtils";
import { AnimateOnScroll } from "@/utils/animationUtils";

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
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    
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
      badge: "Mais Vendido"
    },
    {
      name: "Picolé de Caramelo",
      description: "Picolé artesanal de chocolate com recheio de caramelo",
      image: "/lovable-uploads/ad3ef8bf-244f-4999-814c-dad4d8424b14.png",
      badge: "Novidade"
    },
    {
      name: "Milk-shake de Chocolate",
      description: "Milk-shake cremoso com chocolate belga",
      image: "/lovable-uploads/16ab67dd-cad7-443b-a253-e728d51d0e50.png"
    },
    {
      name: "Cheesecake de Morango",
      description: "Cheesecake com cobertura de morango e chocolate",
      image: "/lovable-uploads/c53ebb13-61ee-42c3-afc4-8f33659c4bca.png",
      badge: "Destaque"
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

  const testimonials = [
    {
      name: "Maria Silva",
      comment: "Os chocolates da Sabor e Prazer são simplesmente divinos! Cada mordida é uma experiência única de sabor.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "João Pereira",
      comment: "Ambiente acolhedor e chocolates de altíssima qualidade. Um verdadeiro prazer para os sentidos!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ana Costa",
      comment: "Descobri este lugar há um mês e já virei cliente fiel. As tortas são obras de arte e o atendimento é impecável.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const features = [
    {
      icon: <Gift className="w-6 h-6 md:w-8 md:h-8 text-coffee-600" />,
      title: "Produtos Artesanais",
      description: "Chocolates feitos à mão com muito carinho e dedicação"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-coffee-600" />,
      title: "Feito com Amor",
      description: "Receitas exclusivas desenvolvidas com paixão"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-coffee-600" />,
      title: "Premiados",
      description: "Reconhecidos pela excelência e qualidade"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-coffee-600" />,
      title: "Atendimento Personalizado",
      description: "Experiência única para cada cliente"
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
              <span className="block text-coffee-600 mt-1 sm:mt-2">Chocolate</span>
            </h1>
            <p className="text-coffee-700 mb-6 sm:mb-8 fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Desde 2017, transformando momentos em memórias doces e inesquecíveis com nossa chocolateria artesanal.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#produtos"
                className="bg-coffee-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-coffee-800 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
                onClick={(e) => handleNavClick(e, "produtos")}
              >
                <CakeSlice className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Conheça Nossos Produtos
              </a>
              <a
                href="#sobre"
                className="bg-white/90 backdrop-blur-sm text-coffee-700 border-2 border-coffee-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
                onClick={(e) => handleNavClick(e, "sobre")}
              >
                <Coffee className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Nossa História
              </a>
            </div>
            
            <div className="mt-12 sm:mt-16 fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-coffee-700 ml-1" />
                  <div className="absolute inset-0 rounded-full border-2 border-coffee-600/50 animate-ping"></div>
                </div>
              </div>
              <p className="text-coffee-700 mt-4 text-xs sm:text-sm md:text-base">Assista nosso vídeo</p>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-8 -left-8 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 opacity-20 sm:opacity-30 rotate-12 float-animation-slow">
          <img src="/lovable-uploads/c53ebb13-61ee-42c3-afc4-8f33659c4bca.png" alt="Decoração" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute -bottom-4 -right-8 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 opacity-20 sm:opacity-30 -rotate-12 float-animation-delay">
          <img src="/lovable-uploads/b5e32cbf-e35b-4914-a947-2feea0eca4c8.png" alt="Decoração" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section
        id="sobre"
        className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in" className="max-w-2xl mx-auto text-center">
            <h2 className="text-coffee-800 mb-4 sm:mb-6">Nossa História</h2>
            <p className="text-coffee-600 mb-8 sm:mb-10 leading-relaxed">
              Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
              momentos únicos através dos mais finos chocolates artesanais.
              Nossa paixão pela excelência e compromisso com a qualidade nos
              tornaram referência em delícias chocolatadas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="scale-in" 
                  threshold={0.2}
                  className="p-4 sm:p-6 bg-chocolate-50 rounded-xl card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-coffee-800 mb-1 sm:mb-2 text-lg sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-600 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </AnimateOnScroll>
              ))}
            </div>
            
            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
              <AnimateOnScroll animation="slide-in" threshold={0.1}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                      alt="Nossa História" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg sm:text-xl">Como Começamos</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-coffee-600 text-sm sm:text-base">
                      Tudo começou com uma pequena cozinha e um grande sonho. Nossa fundadora Maria compartilhava suas criações com amigos e familiares.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-in-bottom" threshold={0.1} style={{ animationDelay: "0.2s" }}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                      alt="Nossa Evolução" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg sm:text-xl">Nossa Evolução</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-coffee-600 text-sm sm:text-base">
                      Com o tempo, aprimoramos nossas técnicas e expandimos nosso cardápio, sempre mantendo o compromisso com a excelência.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-in-right" threshold={0.1} style={{ animationDelay: "0.4s" }}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542843137-8241da123908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                      alt="Hoje" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg sm:text-xl">Hoje</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-coffee-600 text-sm sm:text-base">
                      Atualmente, somos referência em chocolates artesanais, oferecendo experiências únicas e sabores inesquecíveis.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section
        id="produtos"
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-chocolate-50 relative"
      >
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <h2 className="text-coffee-800 text-center mb-10 sm:mb-16">
              Nossos Produtos
            </h2>
          </AnimateOnScroll>
          
          <div className="mb-10 sm:mb-16">
            <AnimateOnScroll animation="fade-in">
              <h3 className="text-coffee-700 mb-6 sm:mb-8 text-center">Doces e Tortas</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="scale-in" 
                  threshold={0.1}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover relative">
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-coffee-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {product.badge}
                        </span>
                      </div>
                    )}
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
                      <div className="mt-4 sm:mt-6 flex justify-between items-center">
                        <button className="text-coffee-700 hover:text-coffee-800 text-sm sm:text-base font-medium flex items-center transition-colors duration-300">
                          Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <div>
            <AnimateOnScroll animation="fade-in">
              <h3 className="text-coffee-700 mb-6 sm:mb-8 text-center">Bebidas Especiais</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {beverages.map((beverage, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="slide-in-bottom" 
                  threshold={0.1}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
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
                      <div className="mt-4 sm:mt-6 flex justify-between items-center">
                        <button className="text-coffee-700 hover:text-coffee-800 text-sm sm:text-base font-medium flex items-center transition-colors duration-300">
                          Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
              
              <AnimateOnScroll animation="slide-in-bottom" threshold={0.1} style={{ animationDelay: "0.3s" }}>
                <div className="bg-gradient-to-br from-coffee-700 to-coffee-800 rounded-2xl shadow-lg overflow-hidden text-white h-full flex flex-col justify-center items-center p-6 sm:p-8 card-hover">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 mb-4 opacity-90" />
                  <h3 className="text-xl sm:text-2xl text-center mb-2 sm:mb-4">
                    Conheça Nossa Loja
                  </h3>
                  <p className="text-sm sm:text-base text-center text-white/80 mb-4 sm:mb-6">
                    Visite nossa loja física e conheça todos os nossos produtos exclusivos
                  </p>
                  <button className="bg-white text-coffee-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/90 transition-colors duration-300 flex items-center text-sm sm:text-base">
                    Visitar Loja <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      <section
        id="depoimentos"
        className="py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <h2 className="text-coffee-800 text-center mb-10 sm:mb-16">
              O Que Nossos Clientes Dizem
            </h2>
          </AnimateOnScroll>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-chocolate-50 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-coffee-600 text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6">
                        "{testimonial.comment}"
                      </p>
                      <h4 className="text-coffee-800 text-base sm:text-lg md:text-xl font-medium">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 sm:mx-2 transition-all duration-300 ${
                    activeTestimonial === index ? "bg-coffee-700 w-4 sm:w-6" : "bg-coffee-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
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
            <AnimateOnScroll animation="slide-in" threshold={0.2}>
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
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" threshold={0.2}>
              <div className="relative mt-6 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
                  alt="Nosso Espaço"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-xl tilt-on-hover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <AnimateOnScroll animation="scale-in" threshold={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlJTIwY2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Café" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-coffee-800 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Área de Café</h3>
                  <p className="text-coffee-600 text-sm sm:text-base">Um espaço perfeito para relaxar com uma xícara de café premium e nossos chocolates artesanais.</p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="scale-in" threshold={0.1} style={{ animationDelay: "0.2s" }}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                    alt="Loja" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-coffee-800 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Vitrine de Chocolates</h3>
                  <p className="text-coffee-600 text-sm sm:text-base">Uma deslumbrante exposição de nossas criações artesanais para você escolher e levar para casa.</p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="scale-in" threshold={0.1} style={{ animationDelay: "0.4s" }}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622192069887-8bfb0d03ee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNob2NvbGF0ZSUyMHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-coffee-800 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Área de Workshops</h3>
                  <p className="text-coffee-600 text-sm sm:text-base">Espaço onde realizamos workshops e experiências de degustação para os amantes de chocolate.</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="py-16 sm:py-20 md:py-24 bg-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <h2 className="text-coffee-800 text-center mb-10 sm:mb-16">
              Localização
            </h2>
          </AnimateOnScroll>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <AnimateOnScroll animation="slide-in" threshold={0.2}>
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
                  
                  <form className="mt-6 sm:mt-8">
                    <h4 className="text-coffee-800 mb-4 text-lg sm:text-xl">Entre em contato</h4>
                    <div className="space-y-3 sm:space-y-4">
                      <input 
                        type="text" 
                        placeholder="Seu nome" 
                        className="w-full px-4 py-2 sm:py-3 rounded-lg border border-coffee-200 focus:border-coffee-600 focus:outline-none focus:ring-1 focus:ring-coffee-600 transition-all duration-200"
                      />
                      <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        className="w-full px-4 py-2 sm:py-3 rounded-lg border border-coffee-200 focus:border-coffee-600 focus:outline-none focus:ring-1 focus:ring-coffee-600 transition-all duration-200"
                      />
                      <textarea 
                        placeholder="Sua mensagem" 
                        rows={4}
                        className="w-full px-4 py-2 sm:py-3 rounded-lg border border-coffee-200 focus:border-coffee-600 focus:outline-none focus:ring-1 focus:ring-coffee-600 transition-all duration-200"
                      ></textarea>
                      <button 
                        type="button"
                        className="bg-coffee-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-coffee-800 transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="mr-2 w-4 h-4" />
                        Enviar Mensagem
                      </button>
                    </div>
                  </form>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-in-right" threshold={0.2}>
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
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-coffee-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <img 
                src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-16 sm:h-20 w-auto mb-4 sm:mb-6"
              />
              <p className="text-coffee-100 text-sm sm:text-base mb-4 sm:mb-6">
                Transformando momentos em doces memórias desde 2017.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Links Rápidos</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#home" className="text-coffee-100 hover:text-white transition-colors duration-200" onClick={(e) => handleNavClick(e, "home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-coffee-100 hover:text-white transition-colors duration-200" onClick={(e) => handleNavClick(e, "sobre")}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-coffee-100 hover:text-white transition-colors duration-200" onClick={(e) => handleNavClick(e, "produtos")}>
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-coffee-100 hover:text-white transition-colors duration-200" onClick={(e) => handleNavClick(e, "depoimentos")}>
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#espaco" className="text-coffee-100 hover:text-white transition-colors duration-200" onClick={(e) => handleNavClick(e, "espaco")}>
                    Nosso Espaço
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Produtos</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-coffee-100 hover:text-white transition-colors duration-200">
                    Chocolates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-coffee-100 hover:text-white transition-colors duration-200">
                    Tortas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-coffee-100 hover:text-white transition-colors duration-200">
                    Bebidas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-coffee-100 hover:text-white transition-colors duration-200">
                    Presentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-coffee-100 hover:text-white transition-colors duration-200">
                    Especiais
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Contato</h4>
              <div className="space-y-3 sm:space-y-4 text-coffee-100">
                <p>Email: contato@saboreprazer.com</p>
                <p>Tel: (11) 9999-9999</p>
                <p>
                  Rua das Delícias, 123
                  <br />
                  Bairro do Sabor
                  <br />
                  Cidade - Estado
                </p>
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
