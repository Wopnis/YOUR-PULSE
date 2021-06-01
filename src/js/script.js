$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
              }
        ]
    });
  });