import { useState, useEffect } from "react";
import { Menu, X, Coffee, MapPin, CakeSlice, Clock, GlassWater, Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            ? "bg-coffee-800/95 backdrop-blur-md shadow-md"
            : "bg-coffee-800/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#" 
              className="group flex items-center"
            >
              <img 
                src="/lovable-uploads/958b4a27-5aea-49bb-bf36-6764a52b1834.png" 
                alt="Chocolateria Sabor e Prazer"
                className="h-14 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </a>

            <div className="hidden md:flex space-x-6">
              <a href="#home" className="nav-link text-white text-base hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5">
                Home
              </a>
              <a href="#sobre" className="nav-link text-white text-base hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5">
                Sobre
              </a>
              <a href="#produtos" className="nav-link text-white text-base hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5">
                Produtos
              </a>
              <a href="#espaco" className="nav-link text-white text-base hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5">
                Nosso Espaço
              </a>
              <a href="#localizacao" className="nav-link text-white text-base hover:text-coffee-200 transition-all duration-300 transform hover:-translate-y-0.5">
                Localização
              </a>
            </div>

            <button
              className="md:hidden text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden absolute w-full bg-coffee-800/95 backdrop-blur-md transition-all duration-300",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#home"
              className="block text-white hover:text-coffee-200 text-base transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="block text-white hover:text-coffee-200 text-base transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="block text-white hover:text-coffee-200 text-base transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#espaco"
              className="block text-white hover:text-coffee-200 text-base transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Espaço
            </a>
            <a
              href="#localizacao"
              className="block text-white hover:text-coffee-200 text-base transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-[90vh] hero-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10 px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-coffee-800 mb-4 fade-in leading-tight">
              Arte em Forma de
              <span className="block text-coffee-600 mt-2">Chocolate</span>
            </h1>
            <p className="text-lg md:text-xl text-coffee-700 mb-8 fade-in max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Desde 2017, transformando momentos em memórias doces e inesquecíveis com nossa chocolateria artesanal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#produtos"
                className="bg-coffee-700 text-white px-6 py-3 rounded-full hover:bg-coffee-800 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <CakeSlice className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Conheça Nossos Produtos
              </a>
              <a
                href="#sobre"
                className="bg-white/90 backdrop-blur-sm text-coffee-700 border-2 border-coffee-700 px-6 py-3 rounded-full hover:bg-coffee-50 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <Coffee className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Nossa História
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section
        id="sobre"
        className="py-16 md:py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-800 mb-6">Nossa História</h2>
            <p className="text-base md:text-lg text-coffee-600 mb-10 leading-relaxed">
              Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
              momentos únicos através dos mais finos chocolates artesanais.
              Nossa paixão pela excelência e compromisso com a qualidade nos
              tornaram referência em delícias chocolatadas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 bg-chocolate-50 rounded-xl card-hover">
                <Coffee className="w-10 h-10 text-coffee-700 mx-auto mb-3" />
                <h3 className="font-serif text-lg text-coffee-800 mb-2">
                  Qualidade Premium
                </h3>
                <p className="text-coffee-600 text-sm">
                  Ingredientes selecionados e processos artesanais
                </p>
              </div>
              <div className="p-6 bg-chocolate-50 rounded-xl card-hover">
                <Clock className="w-10 h-10 text-coffee-700 mx-auto mb-3" />
                <h3 className="font-serif text-lg text-coffee-800 mb-2">
                  Tradição
                </h3>
                <p className="text-coffee-600 text-sm">
                  Anos de experiência em chocolate artesanal
                </p>
              </div>
              <div className="p-6 bg-chocolate-50 rounded-xl card-hover sm:col-span-2 md:col-span-1">
                <CakeSlice className="w-10 h-10 text-coffee-700 mx-auto mb-3" />
                <h3 className="font-serif text-lg text-coffee-800 mb-2">
                  Inovação
                </h3>
                <p className="text-coffee-600 text-sm">
                  Criações únicas e sabores exclusivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="py-24 bg-gradient-to-b from-white to-chocolate-50 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-5xl text-coffee-800 text-center mb-16">
            Nossos Produtos
          </h2>
          
          <div className="mb-16">
            <h3 className="font-serif text-3xl text-coffee-700 mb-8 text-center">Doces e Tortas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative overflow-hidden group aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <CakeSlice className="w-8 h-8 mb-2 mx-auto" />
                        <p className="font-medium">Ver Detalhes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-coffee-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-coffee-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-coffee-700 mb-8 text-center">Bebidas Especiais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beverages.map((beverage, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative overflow-hidden group aspect-[4/3]">
                    <img
                      src={beverage.image}
                      alt={beverage.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Coffee className="w-8 h-8 mb-2 mx-auto" />
                        <p className="font-medium">Ver Detalhes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-coffee-800 mb-2">
                      {beverage.name}
                    </h3>
                    <p className="text-coffee-600">
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
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-5xl text-coffee-800 mb-6">
                Um Ambiente Acolhedor
              </h2>
              <p className="text-lg text-coffee-600 leading-relaxed">
                Nossa chocolateria foi cuidadosamente projetada para proporcionar
                momentos únicos de prazer e conforto. Em um ambiente que combina
                elegância e aconchego, você pode desfrutar de nossas delícias
                enquanto se perde em conversas agradáveis.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3 text-coffee-700">
                  <Coffee className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Café Premium</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Ambiente Climatizado</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <GlassWater className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Menu Exclusivo</span>
                </div>
                <div className="flex items-center space-x-3 text-coffee-700">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Localização Prime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
                alt="Nosso Espaço"
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="py-24 bg-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-5xl text-coffee-800 text-center mb-16">
            Localização
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl text-coffee-800">
                  Visite-nos
                </h3>
                <div className="space-y-4 text-lg text-coffee-600">
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
              <div className="bg-chocolate-100 h-64 rounded-xl shadow-inner"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-coffee-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl mb-4">Contato</h4>
              <div className="text-coffee-100 space-y-2 text-lg">
                <p>Email: contato@saboreprazer.com</p>
                <p>Tel: (11) 9999-9999</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl mb-4">Siga-nos</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Youtube className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-700/50 mt-12 pt-8 text-center text-coffee-100">
            <p className="text-lg">&copy; 2024 Chocolateria Sabor e Prazer. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
