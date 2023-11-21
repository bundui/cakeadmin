'use strict';
$(document).ready(function () {

    // Default
    $('.repeater-1').repeater();

    // Approval mechanism
    $('.repeater-2').repeater({
        hide: function (deleteElement) {
            Swal.fire({
                title: "Are you sure?",
                text: "Are you sure you want to delete this element?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    $(this).slideUp(deleteElement);
                }
            })
        }
    });

    // Nested
    $('.nested-repeater').repeater({
        repeaters: [{
            selector: '.inner-repeater'
        }]
    });

});
