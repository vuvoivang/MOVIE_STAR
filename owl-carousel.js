$(document).ready(function () {
    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
});