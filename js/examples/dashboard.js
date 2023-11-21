$(function () {

    // Dashboard chart colors
    const body_styles = window.getComputedStyle(document.body);
    const colors = {
        primary: $.trim(body_styles.getPropertyValue('--bs-primary')),
        secondary: $.trim(body_styles.getPropertyValue('--bs-secondary')),
        info: $.trim(body_styles.getPropertyValue('--bs-info')),
        success: $.trim(body_styles.getPropertyValue('--bs-success')),
        danger: $.trim(body_styles.getPropertyValue('--bs-danger')),
        warning: $.trim(body_styles.getPropertyValue('--bs-warning')),
        light: $.trim(body_styles.getPropertyValue('--bs-light')),
        dark: $.trim(body_styles.getPropertyValue('--bs-dark')),
        blue: $.trim(body_styles.getPropertyValue('--bs-blue')),
        indigo: $.trim(body_styles.getPropertyValue('--bs-indigo')),
        purple: $.trim(body_styles.getPropertyValue('--bs-purple')),
        pink: $.trim(body_styles.getPropertyValue('--bs-pink')),
        red: $.trim(body_styles.getPropertyValue('--bs-red')),
        orange: $.trim(body_styles.getPropertyValue('--bs-orange')),
        yellow: $.trim(body_styles.getPropertyValue('--bs-yellow')),
        green: $.trim(body_styles.getPropertyValue('--bs-green')),
        teal: $.trim(body_styles.getPropertyValue('--bs-teal')),
        cyan: $.trim(body_styles.getPropertyValue('--bs-cyan')),
        chartTextColor: $('body').hasClass('dark') ? '#6c6c6c' : '#b8b8b8',
        chartBorderColor: $('body').hasClass('dark') ? '#444444' : '#ededed',
    };

    $(document).on('click', '.select-all', function () {
        const that = $(this),
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

    $(document).on('click', '#recent-products input[type="checkbox"]', function () {
        const that = $(this);

        if (that.prop('checked')) {
            that.closest('tr').addClass('tr-selected');
        } else {
            that.closest('tr').removeClass('tr-selected');
        }
    });

    function totalSales() {
        if ($('#total-sales').length) {
            const options = {
                series: [{
                    data: [25, 66, 41, 89, 63, 30, 50]
                }],
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                theme: {
                    mode: $('body').hasClass('dark') ? 'dark' : 'light',
                },
                colors: [colors.indigo],
                stroke: {
                    width: 4,
                    curve: 'smooth',
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            };

            new ApexCharts(document.querySelector("#total-sales"), options).render();
        }
    }

    totalSales();

    function totalOrders() {
        if ($('#total-orders').length) {
            const options = {
                series: [{
                    data: [25, 66, 41, 89, 63, 30, 50]
                }],
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                theme: {
                    mode: $('body').hasClass('dark') ? 'dark' : 'light',
                },
                colors: [colors.pink],
                stroke: {
                    width: 4,
                    curve: 'smooth',
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            };

            new ApexCharts(document.querySelector("#total-orders"), options).render();
        }
    }

    totalOrders();

    function customerRating() {
        if ($('#customer-rating').length) {
            const options = {
                series: [{
                    name: 'Rate',
                    data: [25, 66, 41, 89, 63, 25, 44, 12, 36]
                }],
                chart: {
                    type: 'line',
                    height: 50,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 4,
                    curve: 'smooth',
                },
                theme: {
                    mode: $('body').hasClass('dark') ? 'dark' : 'light',
                },
                colors: [colors.success],
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return seriesName;
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            };

            new ApexCharts(document.querySelector("#customer-rating"), options).render();
        }
    }

    customerRating();

    function salesChart() {
        if ($('#sales-chart').length) {
            const options = {
                series: [
                    {
                        name: "Sales",
                        data: [65, 60, 62, 69, 71, 65, 68, 67, 60, 61, 59, 64]
                    },
                    {
                        name: 'Orders',
                        data: [78, 75, 73, 78, 75, 73, 77, 74, 75, 77, 71, 75]
                    }
                ],
                theme: {
                    mode: $('body').hasClass('dark') ? 'dark' : 'light',
                },
                chart: {
                    height: 350,
                    type: 'line',
                    foreColor: colors.chartTextColor,
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: [colors.primary, colors.success],
                stroke: {
                    width: 4,
                    curve: 'smooth',
                },
                legend: {
                    show: false
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['01 May', '02 May', '03 May', '04 May', '05 May', '06 May', '07 May', '08 May', '09 May', '10 May', '11 May', '12 May'],
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                grid: {
                    borderColor: colors.chartBorderColor,
                }
            };

            new ApexCharts(document.querySelector("#sales-chart"), options).render();
        }
    }

    salesChart();

    function salesChannels() {
        if ($('#sales-channels').length) {
            const options = {
                chart: {
                    height: 250,
                    type: 'donut',
                    offsetY: 0
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '40%',
                        }
                    }
                },
                stroke: {
                    show: false,
                    width: 0
                },
                colors: [colors.orange, colors.cyan, colors.indigo],
                series: [48, 30, 22],
                labels: ['Social Media', 'Google', 'Email'],
                legend: {
                    show: false
                }
            }

            new ApexCharts(document.querySelector('#sales-channels'), options).render();
        }
    }

    salesChannels();

    function productsSold() {
        if ($('#products-sold').length) {
            const options = {
                series: [{
                    name: 'Sales',
                    data: [30, 25, 35, 25, 35, 20, 30]
                }],
                chart: {
                    type: 'bar',
                    height: 180,
                    foreColor: 'rgba(255,255,255,55%)',
                    toolbar: {
                        show: false
                    }
                },
                theme: {
                    mode: $('body').hasClass('dark') ? 'dark' : 'light',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 6,
                        columnWidth: '35%',
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                colors: ['rgba(255,255,255,60%)'],
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return "$" + val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ['rgba(255,255,255,55%)']
                    }
                },
                xaxis: {
                    show: false,
                    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Fri", "Sun"],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return "$" + val;
                        }
                    }

                },
                grid: {
                    show: false
                }
            };

            new ApexCharts(document.querySelector('#products-sold'), options).render();
        }
    }

    productsSold();

    if ($('.summary-cards').length) {
        $('.summary-cards').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            rtl: $('body').hasClass('rtl') ? true : false
        });
    }

});
