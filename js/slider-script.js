var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-nextt",
        prevEl: ".swiper-button-prevv",
    },
    breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        300: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10, // Espacio entre los slides
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 768px
        790: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10,
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 1024px
        1200: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
        }
    }
});

    
  