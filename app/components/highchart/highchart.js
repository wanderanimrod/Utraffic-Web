module.exports = {
    template: require('./highchart.html'),
    ready: function() {
        var element = this.$el;
        console.log(element);
        new Highcharts.Chart({
            chart: {
                renderTo: element,
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [
                {name: 'Jane', data: [1, 0, 4]},
                {name: 'John', data: [5, 7, 3]}
            ]
        })
    }
};
