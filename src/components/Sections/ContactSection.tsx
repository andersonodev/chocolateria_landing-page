
import React, { useState } from "react";
import { MapPin, MessageCircle, Mail, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-coffee-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-white mb-4">Visite Nossa Chocolateria</h2>
          <p className="text-coffee-200">
            Estamos esperando você para uma experiência inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.332679468082!2d-46.66366388502326!3d-23.556728784684644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbfc3389%3A0x4ca229e41fecf731!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1631045154028!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="rounded-xl shadow-lg"
              title="Mapa da Localização"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-coffee-300 mt-1 mr-3 flex-shrink-0" />
                  <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-coffee-300 mt-1 mr-3 flex-shrink-0" />
                  <p>(11) 3456-7890</p>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-coffee-300 mt-1 mr-3 flex-shrink-0" />
                  <p>contato@chocolateriasaboreprazer.com.br</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>10h às 22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>9h às 22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos e Feriados</span>
                  <span>12h às 20h</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="mt-8">
              <h3 className="text-xl font-serif mb-4">Receba Nossas Novidades</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow px-4 py-3 rounded-l-lg text-coffee-800 focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="bg-coffee-600 hover:bg-coffee-700 px-4 py-3 rounded-r-lg transition-colors duration-300"
                >
                  Inscrever
                </button>
              </div>
              {subscribed && (
                <div className="mt-2 text-coffee-300">
                  Obrigado! Você foi inscrito em nossa newsletter.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
