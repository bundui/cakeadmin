'use strict';
$(document).ready(function () {

    $('.dd').nestable().on('change', function (e) {
        let list = e.length ? e : $(e.target);
        $('.dd-output').text(JSON.stringify(list.nestable('serialize'), null, 2));
    });

    $('[data-action="expand-all"]').on('click', function (e) {
        $('.dd').nestable('expandAll');
    });

    $('[data-action="collapse-all"]').on('click', function (e) {
        $('.dd').nestable('collapseAll');
    });

});
