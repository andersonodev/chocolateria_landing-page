
import { Coffee, Clock, CakeSlice } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-coffee-800 mb-4 md:mb-6">Nossa História</h2>
          <p className="text-sm md:text-base lg:text-lg text-coffee-600 mb-6 md:mb-10 leading-relaxed">
            Desde 2017, a Chocolateria Sabor e Prazer tem se dedicado a criar
            momentos únicos através dos mais finos chocolates artesanais.
            Nossa paixão pela excelência e compromisso com a qualidade nos
            tornaram referência em delícias chocolatadas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-chocolate-50 rounded-xl card-hover">
              <Coffee className="w-8 h-8 md:w-10 md:h-10 text-coffee-700 mx-auto mb-2 md:mb-3" />
              <h3 className="text-base md:text-lg font-serif text-coffee-800 mb-1 md:mb-2">
                Qualidade Premium
              </h3>
              <p className="text-coffee-600 text-xs md:text-sm">
                Ingredientes selecionados e processos artesanais
              </p>
            </div>
            <div className="p-4 md:p-6 bg-chocolate-50 rounded-xl card-hover">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-coffee-700 mx-auto mb-2 md:mb-3" />
              <h3 className="text-base md:text-lg font-serif text-coffee-800 mb-1 md:mb-2">
                Tradição
              </h3>
              <p className="text-coffee-600 text-xs md:text-sm">
                Anos de experiência em chocolate artesanal
              </p>
            </div>
            <div className="p-4 md:p-6 bg-chocolate-50 rounded-xl card-hover sm:col-span-2 md:col-span-1">
              <CakeSlice className="w-8 h-8 md:w-10 md:h-10 text-coffee-700 mx-auto mb-2 md:mb-3" />
              <h3 className="text-base md:text-lg font-serif text-coffee-800 mb-1 md:mb-2">
                Inovação
              </h3>
              <p className="text-coffee-600 text-xs md:text-sm">
                Criações únicas e sabores exclusivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
