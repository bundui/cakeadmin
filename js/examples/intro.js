'use strict';
$(document).ready(function () {

    $(document).on('click', '.tour-start', function () {
        introJs().setOptions({
            steps: [
                {
                    title: 'Header',
                    element: document.querySelector('.header'),
                    intro: 'This is header.'
                },
                {
                    title: 'Menu',
                    element: document.querySelector('.menu'),
                    intro: 'This is menu.'
                },
                {
                    title: 'Content',
                    element: document.querySelector('.content'),
                    intro: 'This is content.'
                }
            ]
        }).start();
    });

});
