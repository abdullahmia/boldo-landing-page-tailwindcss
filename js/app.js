//Javascript to toggle the menu
document.getElementById("nav-toggle").onclick = function () {
    document
        .getElementById("nav-content")
        .classList.toggle("hidden");
};




// testimonial
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
        nextEl: "#nextBtn",
        prevEl: "#previousBtn"
    }

    // And if we need scrollbar
    /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});
