$('.main-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.next-arrow',
    prevArrow: '.prev-arrow',
    dots: false,
});

$('.main-choose__slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    dots: true, 
});

$(document).ready(function(){
    $('.accardion__title').click(function(event){
        if($('.accardion__body').hasClass('.one')){
            $('.accardion__title').not($(this)).removeClass('active');
            $('.accardion__txt').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});