
import React from "react";
import { Coffee, Clock } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
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
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
            <h3 className="text-coffee-800 text-xl mb-2">
              Chocolate Bean-to-Bar
            </h3>
            <p className="text-coffee-600 text-sm">
              Do grão à barra, controlamos todo o processo de fabricação de nossos chocolates
            </p>
          </div>
          <div className="p-6 bg-chocolate-50 rounded-xl card-hover border border-chocolate-100">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-700 mb-4" />
            <h3 className="text-coffee-800 text-xl mb-2">
              Sustentabilidade
            </h3>
            <p className="text-coffee-600 text-sm">
              Compromisso com práticas sustentáveis desde a aquisição do cacau até a embalagem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
