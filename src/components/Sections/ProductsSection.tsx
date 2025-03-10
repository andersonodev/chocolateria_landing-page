
import React from "react";
import { Star } from "lucide-react";

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  tag?: string;
}

interface ProductsSectionProps {
  products: Product[];
  beverages: Product[];
  specialProducts: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, beverages, specialProducts }) => {
  return (
    <section id="produtos" className="py-16 sm:py-24 bg-coffee-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-coffee-800 mb-4">Nossas Delícias</h2>
          <p className="text-coffee-600">
            Conheça nossas criações artesanais elaboradas com os melhores chocolates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={`product-${index}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=600";
                  }}
                />
                {product.tag && (
                  <div className="absolute top-4 right-4 bg-coffee-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-coffee-800 font-serif text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-coffee-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-coffee-800 font-semibold">{product.price}</div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-coffee-800 mb-4">Bebidas Especiais</h2>
            <p className="text-coffee-600">
              Combinações perfeitas para acompanhar nossas delícias de chocolate
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {beverages.map((beverage, index) => (
              <div 
                key={`beverage-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative">
                  <img 
                    src={beverage.image} 
                    alt={beverage.name}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  {beverage.tag && (
                    <div className="absolute top-4 right-4 bg-coffee-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {beverage.tag}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-coffee-800 font-serif text-lg font-semibold mb-2">{beverage.name}</h3>
                  <p className="text-coffee-600 text-sm mb-4">{beverage.description}</p>
                  <div className="text-coffee-800 font-semibold">{beverage.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-coffee-800 mb-4">Produtos Especiais</h2>
            <p className="text-coffee-600">
              Experimente nossas criações exclusivas, perfeitas para presentear ou se deliciar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialProducts.map((product, index) => (
              <div 
                key={`special-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-xl card-hover flex flex-col sm:flex-row"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full sm:w-1/2 h-48 sm:h-auto object-cover"
                />
                <div className="p-6 sm:w-1/2 flex flex-col justify-center">
                  <h3 className="text-coffee-800 font-serif text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-coffee-600 text-sm mb-4">{product.description}</p>
                  <div className="text-coffee-800 font-semibold">{product.price}</div>
                  {product.tag && (
                    <div className="mt-3 inline-block bg-coffee-100 text-coffee-700 px-3 py-1 rounded-full text-xs font-medium self-start">
                      {product.tag}
                    </div>
                  )}
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
