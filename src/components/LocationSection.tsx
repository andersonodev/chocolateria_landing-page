
const LocationSection = () => {
  return (
    <section
      id="localizacao"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-chocolate-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-coffee-800 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
          Localização
        </h2>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-coffee-800">
                Visite-nos
              </h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-coffee-600">
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
            <div className="rounded-xl overflow-hidden w-full h-[200px] sm:h-[250px] md:h-full shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5615608572666!2d-43.70549392468627!3d-22.74453203209242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99574176ddaa05%3A0x75f1362fa8ff43bd!2sChocolateria%20Sabor%20e%20Prazer!5e0!3m2!1spt-BR!2sbr!4v1740412609192!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "200px" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Chocolateria Sabor e Prazer"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
