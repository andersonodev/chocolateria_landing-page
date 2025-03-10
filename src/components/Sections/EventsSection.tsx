import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
}

interface EventsSectionProps {
  events: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section id="eventos" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-coffee-800 mb-4">Próximos Eventos</h2>
          <p className="text-coffee-600">
            Participe de experiências únicas e descubra os segredos do chocolate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={`event-${index}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-coffee-100 card-hover"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm">
                      <Calendar size={14} className="mr-1" />
                      {event.date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-coffee-600 text-sm mb-4">
                  {event.description}
                </p>
                <a href="#" className="inline-flex items-center text-coffee-700 font-medium text-sm hover:text-coffee-800 transition-colors duration-200">
                  Saiba mais <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-coffee-700 text-white px-6 py-3 rounded-full hover:bg-coffee-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Todos os Eventos
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
