module.exports = {
    template: require('./live-chart.html'),
    ready: function() {
        var element = this.$el;
        new Highcharts.Chart({
            chart: {
                renderTo: element,
                type: 'line',
                events: {
                    load: function () {
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(),
                                y = Math.random();
                            series.addPoint([x, y], true, false);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Simulation data'
            },
            xAxis: {
                type: 'time',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                enabled: true
            },
            series: [{
                name: 'vel 0',
                data: (function () {
                    var data = [];
                    var time = (new Date()).getTime();
                    for (var i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        })
    }
};