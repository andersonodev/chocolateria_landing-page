
import React from "react";

import Navbar from "@/components/Header/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ProductsSection from "@/components/Sections/ProductsSection";
import EventsSection from "@/components/Sections/EventsSection";
import GallerySection from "@/components/Sections/GallerySection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Footer/Footer";

import { 
  products, 
  beverages, 
  testimonials, 
  events, 
  galleryImages,
  specialProducts
} from "@/data/siteData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <ProductsSection 
        products={products} 
        beverages={beverages} 
        specialProducts={specialProducts} 
      />
      <EventsSection events={events} />
      <GallerySection galleryImages={galleryImages} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
