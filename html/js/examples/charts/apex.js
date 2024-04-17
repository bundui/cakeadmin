'use strict';
$(document).ready(function () {

    // apex_chart_demo_2 data
    let series = {
        "monthDataSeries1": {
            "prices": [
                8107.85,
                8128.0,
                8122.9,
                8165.5,
                8340.7,
                8423.7,
                8423.5,
                8514.3,
                8481.85,
                8487.7,
                8506.9,
                8626.2,
                8668.95,
                8602.3,
                8607.55,
                8512.9,
                8496.25,
                8600.65,
                8881.1,
                9340.85
            ],
            "dates": [
                "13 Nov 2017",
                "14 Nov 2017",
                "15 Nov 2017",
                "16 Nov 2017",
                "17 Nov 2017",
                "20 Nov 2017",
                "21 Nov 2017",
                "22 Nov 2017",
                "23 Nov 2017",
                "24 Nov 2017",
                "27 Nov 2017",
                "28 Nov 2017",
                "29 Nov 2017",
                "30 Nov 2017",
                "01 Dec 2017",
                "04 Dec 2017",
                "05 Dec 2017",
                "06 Dec 2017",
                "07 Dec 2017",
                "08 Dec 2017"
            ]
        },
        "monthDataSeries2": {
            "prices": [
                8423.7,
                8423.5,
                8514.3,
                8481.85,
                8487.7,
                8506.9,
                8626.2,
                8668.95,
                8602.3,
                8607.55,
                8512.9,
                8496.25,
                8600.65,
                8881.1,
                9040.85,
                8340.7,
                8165.5,
                8122.9,
                8107.85,
                8128.0
            ],
            "dates": [
                "13 Nov 2017",
                "14 Nov 2017",
                "15 Nov 2017",
                "16 Nov 2017",
                "17 Nov 2017",
                "20 Nov 2017",
                "21 Nov 2017",
                "22 Nov 2017",
                "23 Nov 2017",
                "24 Nov 2017",
                "27 Nov 2017",
                "28 Nov 2017",
                "29 Nov 2017",
                "30 Nov 2017",
                "01 Dec 2017",
                "04 Dec 2017",
                "05 Dec 2017",
                "06 Dec 2017",
                "07 Dec 2017",
                "08 Dec 2017"
            ]
        },
        "monthDataSeries3": {
            "prices": [
                7114.25,
                7126.6,
                7116.95,
                7203.7,
                7233.75,
                7451.0,
                7381.15,
                7348.95,
                7347.75,
                7311.25,
                7266.4,
                7253.25,
                7215.45,
                7266.35,
                7315.25,
                7237.2,
                7191.4,
                7238.95,
                7222.6,
                7217.9,
                7359.3,
                7371.55,
                7371.15,
                7469.2,
                7429.25,
                7434.65,
                7451.1,
                7475.25,
                7566.25,
                7556.8,
                7525.55,
                7555.45,
                7560.9,
                7490.7,
                7527.6,
                7551.9,
                7514.85,
                7577.95,
                7592.3,
                7621.95,
                7707.95,
                7859.1,
                7815.7,
                7739.0,
                7778.7,
                7839.45,
                7756.45,
                7669.2,
                7580.45,
                7452.85,
                7617.25,
                7701.6,
                7606.8,
                7620.05,
                7513.85,
                7498.45,
                7575.45,
                7601.95,
                7589.1,
                7525.85,
                7569.5,
                7702.5,
                7812.7,
                7803.75,
                7816.3,
                7851.15,
                7912.2,
                7972.8,
                8145.0,
                8161.1,
                8121.05,
                8071.25,
                8088.2,
                8154.45,
                8148.3,
                8122.05,
                8132.65,
                8074.55,
                7952.8,
                7885.55,
                7733.9,
                7897.15,
                7973.15,
                7888.5,
                7842.8,
                7838.4,
                7909.85,
                7892.75,
                7897.75,
                7820.05,
                7904.4,
                7872.2,
                7847.5,
                7849.55,
                7789.6,
                7736.35,
                7819.4,
                7875.35,
                7871.8,
                8076.5,
                8114.8,
                8193.55,
                8217.1,
                8235.05,
                8215.3,
                8216.4,
                8301.55,
                8235.25,
                8229.75,
                8201.95,
                8164.95,
                8107.85,
                8128.0,
                8122.9,
                8165.5,
                8340.7,
                8423.7,
                8423.5,
                8514.3,
                8481.85,
                8487.7,
                8506.9,
                8626.2
            ],
            "dates": [
                "02 Jun 2017",
                "05 Jun 2017",
                "06 Jun 2017",
                "07 Jun 2017",
                "08 Jun 2017",
                "09 Jun 2017",
                "12 Jun 2017",
                "13 Jun 2017",
                "14 Jun 2017",
                "15 Jun 2017",
                "16 Jun 2017",
                "19 Jun 2017",
                "20 Jun 2017",
                "21 Jun 2017",
                "22 Jun 2017",
                "23 Jun 2017",
                "27 Jun 2017",
                "28 Jun 2017",
                "29 Jun 2017",
                "30 Jun 2017",
                "03 Jul 2017",
                "04 Jul 2017",
                "05 Jul 2017",
                "06 Jul 2017",
                "07 Jul 2017",
                "10 Jul 2017",
                "11 Jul 2017",
                "12 Jul 2017",
                "13 Jul 2017",
                "14 Jul 2017",
                "17 Jul 2017",
                "18 Jul 2017",
                "19 Jul 2017",
                "20 Jul 2017",
                "21 Jul 2017",
                "24 Jul 2017",
                "25 Jul 2017",
                "26 Jul 2017",
                "27 Jul 2017",
                "28 Jul 2017",
                "31 Jul 2017",
                "01 Aug 2017",
                "02 Aug 2017",
                "03 Aug 2017",
                "04 Aug 2017",
                "07 Aug 2017",
                "08 Aug 2017",
                "09 Aug 2017",
                "10 Aug 2017",
                "11 Aug 2017",
                "14 Aug 2017",
                "16 Aug 2017",
                "17 Aug 2017",
                "18 Aug 2017",
                "21 Aug 2017",
                "22 Aug 2017",
                "23 Aug 2017",
                "24 Aug 2017",
                "28 Aug 2017",
                "29 Aug 2017",
                "30 Aug 2017",
                "31 Aug 2017",
                "01 Sep 2017",
                "04 Sep 2017",
                "05 Sep 2017",
                "06 Sep 2017",
                "07 Sep 2017",
                "08 Sep 2017",
                "11 Sep 2017",
                "12 Sep 2017",
                "13 Sep 2017",
                "14 Sep 2017",
                "15 Sep 2017",
                "18 Sep 2017",
                "19 Sep 2017",
                "20 Sep 2017",
                "21 Sep 2017",
                "22 Sep 2017",
                "25 Sep 2017",
                "26 Sep 2017",
                "27 Sep 2017",
                "28 Sep 2017",
                "29 Sep 2017",
                "03 Oct 2017",
                "04 Oct 2017",
                "05 Oct 2017",
                "06 Oct 2017",
                "09 Oct 2017",
                "10 Oct 2017",
                "11 Oct 2017",
                "12 Oct 2017",
                "13 Oct 2017",
                "16 Oct 2017",
                "17 Oct 2017",
                "18 Oct 2017",
                "19 Oct 2017",
                "23 Oct 2017",
                "24 Oct 2017",
                "25 Oct 2017",
                "26 Oct 2017",
                "27 Oct 2017",
                "30 Oct 2017",
                "31 Oct 2017",
                "01 Nov 2017",
                "02 Nov 2017",
                "03 Nov 2017",
                "06 Nov 2017",
                "07 Nov 2017",
                "08 Nov 2017",
                "09 Nov 2017",
                "10 Nov 2017",
                "13 Nov 2017",
                "14 Nov 2017",
                "15 Nov 2017",
                "16 Nov 2017",
                "17 Nov 2017",
                "20 Nov 2017",
                "21 Nov 2017",
                "22 Nov 2017",
                "23 Nov 2017",
                "24 Nov 2017",
                "27 Nov 2017",
                "28 Nov 2017"
            ]
        }
    }

    // Dashboard chart colors
    let body_styles = window.getComputedStyle(document.body),
        colors = {
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

    function apex_chart_demo_1() {
        let ts2 = 1484418600000;
        let dates = [];
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;
            let innerArr = [ts2, dataSeries[1][i].value];
            dates.push(innerArr)
        }

        let options = {
            series: [{
                name: 'XYZ MOTORS',
                data: dates
            }],
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                foreColor: colors.chartTextColor,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: false
            },
            theme: {
                mode: $('body').hasClass('dark') ? 'dark' : 'light',
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },
            },
            colors: [colors.primary],
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Price'
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0)
                    }
                }
            },
            grid: {
                borderColor: colors.chartBorderColor,
            }
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_1"), options).render();
    }

    apex_chart_demo_1();

    function apex_chart_demo_2() {
        let options = {
            series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
            chart: {
                type: 'area',
                height: 350,
                foreColor: colors.chartTextColor,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            colors: [colors.secondary],
            theme: {
                mode: $('body').hasClass('dark') ? 'dark' : 'light',
            },
            labels: series.monthDataSeries1.dates,
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            },
            grid: {
                borderColor: colors.chartBorderColor,
            }
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_2"), options).render();
    }

    apex_chart_demo_2();

    function apex_chart_demo_3() {
        let options = {
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            chart: {
                type: 'bar',
                foreColor: colors.chartTextColor,
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            colors: [colors.primary, colors.secondary, colors.info],
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            theme: {
                mode: $('body').hasClass('dark') ? 'dark' : 'light',
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            },
            grid: {
                borderColor: colors.chartBorderColor,
            }
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_3"), options).render();
    }

    apex_chart_demo_3();

    function apex_chart_demo_4() {
        let options = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            chart: {
                type: 'bar',
                foreColor: colors.chartTextColor,
                height: 350
            },
            theme: {
                mode: $('body').hasClass('dark') ? 'dark' : 'light',
            },
            colors: [colors.success],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
            },
            grid: {
                borderColor: colors.chartBorderColor,
            }
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_4"), options).render();
    }

    apex_chart_demo_4();

    function apex_chart_demo_5() {
        var options = {
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            chart: {
                height: 350,
                type: 'line',
                foreColor: colors.chartTextColor,
            },
            theme: {
                mode: $('body').hasClass('dark') ? 'dark' : 'light',
            },
            colors: [colors.info],
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Traffic Sources'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            yaxis: [{
                title: {
                    text: 'Website Blog',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Social Media'
                }
            }],
            grid: {
                borderColor: colors.chartBorderColor,
            }
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_5"), options).render();
    }

    apex_chart_demo_5();

    function apex_chart_demo_6(){
        let options = {
            series: [44, 55, 13, 43, 22],
            chart: {
                width: '100%',
                type: 'pie',
                foreColor: colors.chartTextColor,
            },
            stroke: {
                show: false,
                width: 0
            },
            colors: [colors.primary, colors.secondary, colors.success, colors.info, colors.warning, colors.danger],
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_6"), options).render();
    }

    apex_chart_demo_6();

    function apex_chart_demo_7(){
        var options = {
            series: [70],
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: ['Cricket'],
        };

        new ApexCharts(document.querySelector("#apex_chart_demo_7"), options).render();
    }

    apex_chart_demo_7();

});
