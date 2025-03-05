
/**
 * Utility function to handle smooth scrolling to elements
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Calculate offset to account for fixed header
    const headerOffset = window.innerWidth >= 768 ? 90 : 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    // Scroll to element with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
