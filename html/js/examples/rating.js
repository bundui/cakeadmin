'use strict';
$(function() {

    $(".rating-example-1").starRating({
        initialRating: 3.5
    });

    $(".rating-example-2").starRating({
        initialRating: 3.5,
        starShape: 'rounded',
    });

    $(".rating-example-3").starRating({
        initialRating: 3.5,
        useGradient: false,
    });

    $(".rating-example-4").starRating({
        initialRating: 3.5,
        readOnly: true
    });

    $(".rating-example-5").starRating({
        initialRating: 3,
        useFullStars: true
    });

    $(".rating-example-6").starRating({
        initialRating: 3.5,
        disableAfterRate: false,
        onHover: function(currentIndex, currentRating, $el){
            $('.live-rating').text(currentIndex);
        },
        onLeave: function(currentIndex, currentRating, $el){
            $('.live-rating').text(currentRating);
        }
    });

});
