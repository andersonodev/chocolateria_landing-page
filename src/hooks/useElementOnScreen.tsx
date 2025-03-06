
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
  }, [options]);

  return { containerRef, isVisible };
};
