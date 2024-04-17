'use strict';
$(document).ready(function () {

    $("#demo_1").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
        skin: "round",
    });

    $("#demo_2").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$",
        skin: "round"
    });

    $("#demo_3").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        skin: "round",
        step: 100
    });

    $("#demo_4").ionRangeSlider({
        type: "double",
        grid: true,
        min: -12.8,
        max: 12.8,
        from: -3.2,
        to: 3.2,
        step: 0.1,
        skin: "round"
    });

    $("#demo_5").ionRangeSlider({
        grid: true,
        from: new Date().getMonth(),
        values: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        skin: "round"
    });

});
