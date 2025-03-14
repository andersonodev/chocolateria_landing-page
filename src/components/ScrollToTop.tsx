
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-2 sm:p-3 bg-coffee-700 text-white rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110",
        showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={20} className="sm:w-6 sm:h-6" />
    </button>
  );
};

export default ScrollToTop;
