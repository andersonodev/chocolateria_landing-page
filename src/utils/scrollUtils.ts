
/**
 * Utility function to handle smooth scrolling to elements
 * with offset for the fixed header
 */
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Get the header height for offset calculation
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate the element's position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Scroll to element with offset for the header plus any additional offset
    window.scrollTo({
      top: elementPosition - headerHeight - offset,
      behavior: 'smooth',
    });
  }
};

/**
 * Smooth scroll to top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * Create an observer for lazy loading elements
 */
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
) => {
  return new IntersectionObserver(callback, options);
};
