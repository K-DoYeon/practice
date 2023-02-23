$(function(){
    $('.slick-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerMode: true,
                cneterPadding: '30px',
                slideToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerMode: true,
                cneterPadding: '30px',
                slideToShow: 1
            }
        }
    ]
    });
});