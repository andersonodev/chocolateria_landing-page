
import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-coffee-50/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-coffee-800 mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-coffee-600">
            A satisfação de nossos clientes é o que nos motiva a continuar criando experiências únicas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${index}`}
                className={`transition-opacity duration-500 absolute inset-0 ${
                  index === activeTestimonial ? "opacity-100 z-10" : "opacity-0 -z-10"
                }`}
              >
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-coffee-100 flex flex-col items-center text-center">
                  <Quote size={40} className="text-coffee-300 mb-4" />
                  <p className="text-coffee-700 text-lg sm:text-xl mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-coffee-300 mb-3"
                    />
                    <h4 className="text-coffee-800 font-medium">{testimonial.name}</h4>
                    <p className="text-coffee-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-coffee-100 flex flex-col items-center text-center opacity-0 pointer-events-none">
              <Quote size={40} className="text-coffee-300 mb-4" />
              <p className="text-coffee-700 text-lg sm:text-xl mb-8 italic">
                "Placeholder"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full mb-3"></div>
                <h4 className="text-coffee-800 font-medium">Placeholder</h4>
                <p className="text-coffee-600 text-sm">Placeholder</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={`testimonial-dot-${index}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? "bg-coffee-700 w-6" 
                    : "bg-coffee-300 hover:bg-coffee-400"
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
