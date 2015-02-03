var ObjectProperty = require('../../models/object-property.js');
var Visualisation = require('../../models/visualisation.js');

module.exports = {
    template: require('./live-chart.html'),
    created: function() {
        this.visualisation = new Visualisation();
    },
    ready: function() {
        var element = this.$el;
        this.highChart = new Highcharts.Chart(makeChartOptions(element))
    },
    events: {
        'start': function() {
            this.highChart.series.forEach(function(series) {
                setInterval(function() {
                    var x = (new Date()).getTime(),
                        y = Math.random();
                    series.addPoint([x, y], true, false);
                }, 1000);
            });
        },
        'tracked-status-changed': function(objectProperty) {
            var status = this.visualisation.togglePropertyTrackedStatus(objectProperty);
            if(status === Visualisation.PROPERTY_TRACKED_STATUS.ON) {
                this.highChart.addSeries({name: objectProperty.stringify()}, true, false);
            }
            else if(status === Visualisation.PROPERTY_TRACKED_STATUS.OFF) {
                removeSeries.call(this.highChart, objectProperty.stringify());
            }
        }
    }
};

var removeSeries = function(nameOfSeriesToRemove) {
    var chart = this;
    chart.series.some(function(currentSeries, index) {
        if(currentSeries.name === nameOfSeriesToRemove) {
            chart.series[index].remove();
            return true;
        }
    });
};

var makeChartOptions = function(element) {
    return {
        chart: {
            renderTo: element,
            type: 'line'
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
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },
        legend: {
            enabled: true
        }
    }
};
