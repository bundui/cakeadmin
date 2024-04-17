$(function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        rtl: $('body').hasClass('rtl') ? true : false,
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        rtl: $('body').hasClass('rtl') ? true : false,
    });

    $(".rating-example").starRating({
        initialRating: 5,
        disableAfterRate: false,
        useGradient: false,
        starSize: 22,
        onHover: function(currentIndex, currentRating, $el){
            $('.live-rating').text(currentIndex);
        },
        onLeave: function(currentIndex, currentRating, $el){
            $('.live-rating').text(currentRating);
        }
    });

});
