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
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center">
              <span className="font-serif text-2xl text-coffee-800 hover:text-coffee-600 transition-colors duration-300">
                Chocolateria Sabor e Prazer
              </span>
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#sobre" className="nav-link">
                Sobre
              </a>
              <a href="#produtos" className="nav-link">
                Produtos
              </a>
              <a href="#espaco" className="nav-link">
                Nosso Espaço
              </a>
              <a href="#localizacao" className="nav-link">
                Localização
              </a>
            </div>

            <button
              className="md:hidden text-coffee-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#home"
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#espaco"
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Espaço
            </a>
            <a
              href="#localizacao"
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-chocolate-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl text-coffee-800 mb-6 fade-in">
              Chocolateria
              <br />
              <span className="text-coffee-600">Sabor e Prazer</span>
            </h1>
            <p className="text-xl md:text-2xl text-coffee-600 mb-8 fade-in max-w-2xl" style={{ animationDelay: "0.2s" }}>
              Onde cada momento é uma explosão de sabores únicos. Desde 2017, 
              transformando chocolate em experiências inesquecíveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#produtos"
                className="bg-coffee-700 text-white px-8 py-3 rounded-full hover:bg-coffee-800 transition-colors duration-300 flex items-center transform hover:scale-105"
              >
                <CakeSlice className="mr-2" />
                Nossos Produtos
              </a>
              <a
                href="#sobre"
                className="border-2 border-coffee-700 text-coffee-700 px-8 py-3 rounded-full hover:bg-coffee-50 transition-colors duration-300 flex items-center transform hover:scale-105"
              >
                <Coffee className="mr-2" />
                Conheça-nos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-coffee-800 mb-8">Nossa História</h2>
            <p className="text-coffee-600 mb-8 leading-relaxed">
              Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
              momentos únicos através dos mais finos chocolates artesanais.
              Nossa paixão pela excelência e compromisso com a qualidade nos
              tornaram referência em delícias chocolatadas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-chocolate-50 rounded-lg">
                <Coffee className="w-12 h-12 text-coffee-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-coffee-800 mb-2">
                  Qualidade Premium
                </h3>
                <p className="text-coffee-600">
                  Ingredientes selecionados e processos artesanais
                </p>
              </div>
              <div className="p-6 bg-chocolate-50 rounded-lg">
                <Coffee className="w-12 h-12 text-coffee-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-coffee-800 mb-2">
                  Tradição
                </h3>
                <p className="text-coffee-600">
                  Anos de experiência em chocolate artesanal
                </p>
              </div>
              <div className="p-6 bg-chocolate-50 rounded-lg">
                <Coffee className="w-12 h-12 text-coffee-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-coffee-800 mb-2">
                  Inovação
                </h3>
                <p className="text-coffee-600">
                  Criações únicas e sabores exclusivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="py-20 bg-gradient-to-b from-white to-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-coffee-800 text-center mb-12">
            Nossos Produtos
          </h2>
          
          <h3 className="font-serif text-2xl text-coffee-700 mb-8">Doces e Tortas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <CakeSlice className="text-white w-8 h-8 mb-2 mx-auto" />
                      <p className="text-white text-sm font-medium">Ver Detalhes</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-coffee-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-coffee-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-2xl text-coffee-700 mb-8">Bebidas Especiais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beverages.map((beverage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden group">
                  <img
                    src={beverage.image}
                    alt={beverage.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Coffee className="text-white w-8 h-8 mb-2 mx-auto" />
                      <p className="text-white text-sm font-medium">Ver Detalhes</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-coffee-800 mb-2">
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
      </section>

      <section
        id="espaco"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-coffee-800 text-center mb-12">
            Nosso Espaço
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-coffee-800">
                Um Ambiente Acolhedor
              </h3>
              <p className="text-coffee-600 leading-relaxed">
                Nossa chocolateria foi cuidadosamente projetada para proporcionar
                momentos únicos de prazer e conforto. Em um ambiente que combina
                elegância e aconchego, você pode desfrutar de nossas delícias
                enquanto se perde em conversas agradáveis.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2 text-coffee-700">
                  <Coffee className="w-5 h-5" />
                  <span>Café Premium</span>
                </div>
                <div className="flex items-center space-x-2 text-coffee-700">
                  <Clock className="w-5 h-5" />
                  <span>Ambiente Climatizado</span>
                </div>
                <div className="flex items-center space-x-2 text-coffee-700">
                  <GlassWater className="w-5 h-5" />
                  <span>Menu Exclusivo</span>
                </div>
                <div className="flex items-center space-x-2 text-coffee-700">
                  <MapPin className="w-5 h-5" />
                  <span>Localização Prime</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
                alt="Nosso Espaço"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="py-20 bg-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-coffee-800 text-center mb-12">
            Localização
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-coffee-800 mb-4">
                  Visite-nos
                </h3>
                <p className="text-coffee-600 mb-4">
                  Rua das Delícias, 123
                  <br />
                  Bairro do Sabor
                  <br />
                  Cidade - Estado
                </p>
                <p className="text-coffee-600 mb-4">
                  <strong>Horário de Funcionamento:</strong>
                  <br />
                  Segunda a Sábado: 9h às 20h
                  <br />
                  Domingo: 10h às 18h
                </p>
                <a
                  href="tel:+551199999999"
                  className="text-coffee-700 hover:text-coffee-800 transition-colors duration-200"
                >
                  (11) 9999-9999
                </a>
              </div>
              <div className="bg-chocolate-100 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-coffee-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Sabor e Prazer</h3>
              <p className="text-coffee-100">
                Chocolateria artesanal desde 2017
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Contato</h4>
              <p className="text-coffee-100">
                Email: contato@saboreprazer.com
                <br />
                Tel: (11) 9999-9999
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-coffee-200 transition-colors duration-200"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-coffee-100">
            <p>&copy; 2024 Chocolateria Sabor e Prazer. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
