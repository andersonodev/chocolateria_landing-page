
import { Coffee, Clock, GlassWater, MapPin } from "lucide-react";

const SpaceSection = () => {
  return (
    <section
      id="espaco"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-coffee-800 mb-2 sm:mb-3 md:mb-6">
              Um Ambiente Acolhedor
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-coffee-600 leading-relaxed">
              Nossa chocolateria foi cuidadosamente projetada para proporcionar
              momentos únicos de prazer e conforto. Em um ambiente que combina
              elegância e aconchego, você pode desfrutar de nossas delícias
              enquanto se perde em conversas agradáveis.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-8">
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-coffee-700">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">Café Premium</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-coffee-700">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">Ambiente Climatizado</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-coffee-700">
                <GlassWater className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">Menu Exclusivo</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 text-coffee-700">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">Localização Prime</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvbGF0ZSUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80"
              alt="Nosso Espaço"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
