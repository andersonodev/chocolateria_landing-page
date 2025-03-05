
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Contato</h4>
            <div className="text-coffee-100 space-y-1 md:space-y-2 text-sm md:text-lg">
              <p>Email: contato@saboreprazer.com</p>
              <p>Tel: (11) 9999-9999</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Siga-nos</h4>
            <div className="flex space-x-4 md:space-x-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-coffee-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Youtube className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-coffee-700/50 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-coffee-100">
          <p className="text-sm md:text-lg">&copy; 2024 Chocolateria Sabor e Prazer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
