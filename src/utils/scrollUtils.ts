
/**
 * Utility function to handle smooth scrolling to elements
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Scroll to element with smooth behavior
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
