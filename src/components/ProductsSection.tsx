
import { CakeSlice, Coffee } from "lucide-react";

const ProductsSection = () => {
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
    <section
      id="produtos"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-chocolate-50 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-coffee-800 text-center mb-10 md:mb-16">
          Nossos Produtos
        </h2>
        
        <div className="mb-10 md:mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-coffee-700 mb-6 md:mb-8 text-center">Doces e Tortas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative overflow-hidden group aspect-video">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 md:p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <CakeSlice className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 mx-auto" />
                      <p className="text-sm md:text-base font-medium">Ver Detalhes</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-coffee-800 mb-1 md:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-coffee-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-coffee-700 mb-6 md:mb-8 text-center">Bebidas Especiais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {beverages.map((beverage, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative overflow-hidden group aspect-video">
                  <img
                    src={beverage.image}
                    alt={beverage.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 md:p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Coffee className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 mx-auto" />
                      <p className="text-sm md:text-base font-medium">Ver Detalhes</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-serif text-coffee-800 mb-1 md:mb-2">
                    {beverage.name}
                  </h3>
                  <p className="text-sm md:text-base text-coffee-600">
                    {beverage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
