
import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/6977c981-c31d-48f2-a304-7c2c508c6850.png" 
              alt="Chocolateria Sabor e Prazer"
              className="h-16 mb-4"
            />
            <p className="text-coffee-300 mb-4">
              Uma experiência única de sabor e prazer em cada pedaço de chocolate artesanal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-400 hover:text-white transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-coffee-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#sobre" className="text-coffee-300 hover:text-white transition-colors duration-200">Sobre</a></li>
              <li><a href="#produtos" className="text-coffee-300 hover:text-white transition-colors duration-200">Produtos</a></li>
              <li><a href="#eventos" className="text-coffee-300 hover:text-white transition-colors duration-200">Eventos</a></li>
              <li><a href="#galeria" className="text-coffee-300 hover:text-white transition-colors duration-200">Galeria</a></li>
              <li><a href="#contato" className="text-coffee-300 hover:text-white transition-colors duration-200">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-coffee-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-coffee-300">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-coffee-400 mr-2 flex-shrink-0" />
                <span className="text-coffee-300">(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-coffee-400 mr-2 flex-shrink-0" />
                <span className="text-coffee-300">contato@chocolateriasaboreprazer.com.br</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-coffee-300">Segunda a Sexta</span>
                <span className="text-coffee-400">10h às 22h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-coffee-300">Sábados</span>
                <span className="text-coffee-400">9h às 22h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-coffee-300">Domingos e Feriados</span>
                <span className="text-coffee-400">12h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-coffee-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Chocolateria Sabor e Prazer. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-coffee-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
