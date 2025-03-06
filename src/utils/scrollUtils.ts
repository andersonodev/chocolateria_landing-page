
/**
 * Utility function to handle smooth scrolling to elements
 * with offset for the fixed header
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Get the header height for offset calculation
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate the element's position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Scroll to element with offset for the header
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth',
    });
  }
};
