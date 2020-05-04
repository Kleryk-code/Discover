//Открытие бургер меню

$(function () {
    $('.nav__button').click(function() {
        if ($('.nav__list').css('display') == 'none') {
            $('.nav__list').slideDown();
        } else {
            $('.nav__list').slideUp();
        }
    });

    //Слайдер

    $('.slider').slick({
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 720,
            settings: {
            dots: false,
            centerMode: true,
            centerPadding: '40px',
            },
            breakpoint: 420,
            settings: {
            dots: false,
            centerMode: true,
            centerPadding: '10px',
            }
        }]
    });

    //Аниматор
    AOS.init();
});