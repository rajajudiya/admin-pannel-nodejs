<script>
var options = {
        series: [{
            name: 'User',
            data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }],
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                // columnWidth: '55%',
                // endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        stroke: {
            show: false,
            width: 2,
            colors: ['transparent'],
            curve: 'smooth',
        },
        xaxis: {
            show: false,
            labels: {
                show: false,    
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            show: false,
            x: {
                show: true,
            },
            y: {
                show: false
            },
        },
        grid: {
            show: false,
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
</script>