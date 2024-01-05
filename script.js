document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(function (carousel) {
        const innerCarousel = carousel.querySelector('.carousel');
        const nextBtn = carousel.querySelector('.next-btn');
        const prevBtn = carousel.querySelector('.prev-btn');

        let currentIndex = 0;

        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % innerCarousel.children.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + innerCarousel.children.length) % innerCarousel.children.length;
            updateCarousel();
        });

        function updateCarousel() {
            const translateValue = -currentIndex * 100 + '%';
            innerCarousel.style.transform = 'translateX(' + translateValue + ')';
        }
    });
});

