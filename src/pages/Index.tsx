
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
      image: "https://images.unsplash.com/photo-1518057111178-44a106bad149?ixlib=rb-1.2.1&w=500",
      price: "R$ 9,90"
    },
    {
      name: "Chocolate com Menta",
      description: "Bebida quente de chocolate com toque de menta",
      image: "https://images.unsplash.com/photo-1514508985285-52fa488e199a?ixlib=rb-1.2.1&w=500",
      price: "R$ 17,90",
      tag: "Novidade"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Cliente Frequente",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&w=150",
      content: "A melhor chocolateria que já visitei! O chocolate quente especial é simplesmente divino, e o ambiente é super aconchegante."
    },
    {
      name: "João Pereira",
      role: "Confeiteiro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&w=150",
      content: "Como profissional da área, posso afirmar que os chocolates são de altíssima qualidade. Os processos artesanais fazem toda a diferença no sabor."
    },
    {
      name: "Mariana Costa",
      role: "Influenciadora Gastronômica",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&w=150",
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
    "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-1.2.1&w=600",
    "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&w=600"
  ];

  return (
    <div className="min-h-screen">
      {/* Menu fixo atualizado */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-coffee-800/95 backdrop-blur-sm shadow-md"
            : "bg-coffee-800",
          hideNav && "transform -translate-y-full"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a 
              href="#" 
              className="group flex items-center space-x-2"
              onClick={(e) => handleNavClick(e, "home")}
            >
              <img 
                src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-12 sm:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>

            {/* Menu de navegação para desktop */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {["home", "sobre", "produtos", "eventos", "galeria", "depoimentos", "espaco", "localizacao"].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="nav-link text-white px-3 py-2 text-sm font-medium hover:text-coffee-200 rounded-md transition-all duration-300" 
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("localizacao", "Localização").replace("espaco", "Nosso Espaço")}
                </a>
              ))}
            </div>

            {/* Botão de menu mobile */}
            <button
              className="md:hidden text-white hover:text-coffee-200 transition-all duration-300 p-2 rounded-md focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-coffee-800 bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300",
            isMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-coffee-700">
              <a href="#" onClick={(e) => handleNavClick(e, "home")}>
                <img 
                  src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
                  alt="Chocolateria Sabor e Prazer"
                  className="h-12 w-auto"
                />
              </a>
              <button
                className="text-white hover:text-coffee-200 transition-all duration-300 p-2 rounded-md focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-6 p-4">
              {["home", "sobre", "produtos", "eventos", "galeria", "depoimentos", "espaco", "localizacao"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-white text-xl font-medium hover:text-coffee-200 transition-all duration-300 transform hover:scale-105"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("localizacao", "Localização").replace("espaco", "Nosso Espaço")}
                </a>
              ))}
            </div>

            <div className="p-4 border-t border-coffee-700">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Botão de voltar ao topo */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 right-4 p-3 bg-coffee-700 text-white rounded-full shadow-lg z-40 transition-all duration-300",
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        )}
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={20} />
      </button>

      {/* Resto das seções continuam inalteradas */}
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
                      <h3 className="text-xl sm:text-2xl text-coffee-800 font-serif">
                        {beverage.name}
                      </h3>
                      <div className="text-lg sm:text-xl text-coffee-700 font-bold">
                        {beverage.price}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-coffee-600 mb-4">
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
    </div>
  );
};

export default Index;
