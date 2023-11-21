'use strict';
$(document).ready(function () {

    $('#checkout-form-wizard').steps({
        headerTag: 'h3',
        bodyTag: 'section',
        autoFocus: true,
        titleTemplate: '<span class="wizard-index">#index#</span> #title#'
    });

    $(document).on('click', '.accordion.accordion-with-radio .accordion-button', function () {
        $(this).find('input[type="radio"]').prop('checked', true);
    });
});
