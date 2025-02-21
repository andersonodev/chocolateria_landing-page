
import { useState, useEffect } from "react";
import { Menu, X, Coffee, MapPin } from "lucide-react";
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

  return (
    <div className="min-h-screen">
      {/* Navbar */}
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
            <a href="#" className="font-serif text-2xl text-coffee-800">
              Sabor e Prazer
            </a>

            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-coffee-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-chocolate-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative">
          <h1 className="font-serif text-5xl md:text-7xl text-coffee-800 mb-6 fade-in">
            Chocolateria
            <br />
            Sabor e Prazer
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 mb-8 fade-in" style={{ animationDelay: "0.2s" }}>
            Experiências únicas desde 2017
          </p>
          <div className="flex justify-center space-x-4 fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#produtos"
              className="bg-coffee-700 text-white px-8 py-3 rounded-full hover:bg-coffee-800 transition-colors duration-300"
            >
              Nossos Produtos
            </a>
            <a
              href="#sobre"
              className="border-2 border-coffee-700 text-coffee-700 px-8 py-3 rounded-full hover:bg-coffee-50 transition-colors duration-300"
            >
              Conheça-nos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Products Section */}
      <section
        id="produtos"
        className="py-20 bg-gradient-to-b from-white to-chocolate-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-coffee-800 text-center mb-12">
            Nossos Produtos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Trufas Especiais"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl text-coffee-800 mb-2">
                  Trufas Especiais
                </h3>
                <p className="text-coffee-600">
                  Deliciosas trufas artesanais com sabores únicos
                </p>
              </div>
            </div>
            {/* More product cards... */}
          </div>
        </div>
      </section>

      {/* Our Space Section */}
      <section
        id="espaco"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-coffee-800 text-center mb-12">
            Nosso Espaço
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Nosso Espaço"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-coffee-800">
                Um Ambiente Acolhedor
              </h3>
              <p className="text-coffee-600 leading-relaxed">
                Nosso espaço foi cuidadosamente projetado para proporcionar
                momentos únicos de prazer e conforto. Venha nos visitar e
                desfrute de nossas delícias em um ambiente acolhedor e
                sofisticado.
              </p>
              <a
                href="#localizacao"
                className="inline-flex items-center text-coffee-700 hover:text-coffee-800 transition-colors duration-200"
              >
                <MapPin className="mr-2" />
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
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

      {/* Footer */}
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
                {/* Add social media links here */}
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
