'use strict';
$(function () {
    $(document).on('click', '[name="priceChangeSwitch"]', function (e) {
        let prices = {
            'monthly': [99, 199],
            'yearly': [199, 399]
        };

        if ($(e.currentTarget).val() == 1) {
            $('[data-price1-text]').text('$' + prices.monthly[0]);
            $('[data-price2-text]').text('$' + prices.monthly[1]);
            $('[data-price1-label], [data-price2-label]').text('Monthly');
        } else if ($(e.currentTarget).val() == 2) {
            $('[data-price1-text]').text('$' + prices.yearly[0]);
            $('[data-price2-text]').text('$' + prices.yearly[1]);
            $('[data-price1-label], [data-price2-label]').text('Yearly');
        }
    });
});
