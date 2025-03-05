
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import SpaceSection from "@/components/SpaceSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SpaceSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
