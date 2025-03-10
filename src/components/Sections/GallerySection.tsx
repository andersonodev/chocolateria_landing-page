
import React from "react";

interface GallerySectionProps {
  galleryImages: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryImages }) => {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-coffee-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-coffee-800 mb-4">Nossa Galeria</h2>
          <p className="text-coffee-600">
            Confira um pouco do nosso universo de chocolate
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={`gallery-${index}`}
              className={`rounded-xl overflow-hidden shadow-lg card-hover ${
                index === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-1" : ""
              }`}
            >
              <img 
                src={image} 
                alt={`Galeria imagem ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=600";
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-white text-coffee-700 border border-coffee-700 px-6 py-3 rounded-full hover:bg-coffee-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Mais Fotos
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
