
import React from 'react';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in',
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  style = {},
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
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
