var scrollToTopBtn = document.getElementById("topButton");
var rootElement = document.documentElement;
function scrollToTop() {
    // scroll to top logic
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
