
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  

      // Smooth scrolling (ensured for all anchor links)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener("click", function(event) {
              event.preventDefault();
              const targetId = this.getAttribute("href").substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
              }
          });
      });
      
      // Carousel functionality
    //   const container = document.querySelector(".carousel-container");
    //   const items = document.querySelectorAll(".carousel-item");
    //   let index = 0;

    //   document.querySelector(".next").addEventListener("click", () => {
    //       index = (index + 1) % items.length;
    //       container.style.transform = `translateX(-${index * 100}%)`;
    //   });

    //   document.querySelector(".prev").addEventListener("click", () => {
    //       index = (index - 1 + items.length) % items.length;
    //       container.style.transform = `translateX(-${index * 100}%)`;
    //   });
    // document.addEventListener("DOMContentLoaded", function () {
    //     const container = document.querySelector(".carousel-container");
    //     const items = document.querySelectorAll(".carousel-item");
    //     const totalItems = items.length;
    //     let index = 0;
    
    //     document.querySelector(".next").addEventListener("click", () => {
    //         index = (index + 1) % totalItems;
    //         container.style.transform = `translateX(-${index * 100}%)`;
    //     });
    
    //     document.querySelector(".prev").addEventListener("click", () => {
    //         index = (index - 1 + totalItems) % totalItems;
    //         container.style.transform = `translateX(-${index * 100}%)`;
    //     });
    // });

    // document.addEventListener("DOMContentLoaded", function () {
    //     const container = document.querySelector(".carousel-container");
    //     const items = document.querySelectorAll(".carousel-item");
    //     const totalItems = items.length;
    //     let index = 0;
    
    //     document.querySelector(".next").addEventListener("click", () => {
    //         if (index < totalItems - 1) {
    //             index++;
    //         } else {
    //             index = 0;
    //         }
    //         updateCarousel();
    //     });
    
    //     document.querySelector(".prev").addEventListener("click", () => {
    //         if (index > 0) {
    //             index--;
    //         } else {
    //             index = totalItems - 1;
    //         }
    //         updateCarousel();
    //     });
    
    //     function updateCarousel() {
    //         container.style.transform = `translateX(-${index * 100}%)`;
    //     }
    // });
    // document.addEventListener("DOMContentLoaded", function () {
    //     let currentIndex = 0;
    //     const items = document.querySelectorAll(".carousel-item");
    //     const totalItems = items.length;

    //     function updateCarousel() {
    //         items.forEach((item, index) => {
    //             item.classList.remove("active", "carousel-item-start", "carousel-item-end");
    //             if (index === currentIndex) {
    //                 item.classList.add("active");
    //             }
    //         });
    //     }

    //     window.nextSlide = function () {
    //         console.log("test next")
    //         currentIndex = (currentIndex + 1) % totalItems;
    //         updateCarousel();
    //     };

    //     window.prevSlide = function () {
    //         consoler.log("test prev")
    //         currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    //         updateCarousel();
    //     };
    // });

});
