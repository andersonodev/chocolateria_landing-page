
import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element is visible in the viewport
 * to trigger animations
 */
export const useElementOnScreen = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentRef = containerRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};

/**
 * Component to wrap elements with animation on scroll
 */
export const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
}: { 
  children: React.ReactNode; 
  animation?: string;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}) => {
  const { containerRef, isVisible } = useElementOnScreen({
    threshold,
    rootMargin
  });

  return (
    <div 
      ref={containerRef} 
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{ 
        transition: 'opacity 0.4s ease-out', 
        willChange: 'opacity, transform' 
      }}
    >
      {children}
    </div>
  );
};
