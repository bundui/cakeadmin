$(function () {
    $(document).on('click', '.select-all', function () {
        let that = $(this),
            target = $(that.data('select-all-target')),
            checkbox = target.find('input[type="checkbox"]');

        if (that.prop('checked')) {
            checkbox.closest('tr').addClass('tr-selected');
            checkbox.prop('checked', true);
        } else {
            checkbox.closest('tr').removeClass('tr-selected');
            checkbox.prop('checked', false);
        }
    });

    $(document).on('click', '#products input[type="checkbox"]', function () {
        let that = $(this);

        if (that.prop('checked')) {
            that.closest('tr').addClass('tr-selected');
        } else {
            that.closest('tr').removeClass('tr-selected');
        }
    });

    $("#price-filter").ionRangeSlider({
        type: "double",
        min: 1,
        max: 1000,
        from: 300,
        to: 500,
        grid: true,
        skin: "round",
        prefix: "$",
    });
});
