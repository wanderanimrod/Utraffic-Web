var Visualisation = function (id) {
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function () {
        session.activeVisualisation = this;
    };
    this.series = [];

    this.addSeries = function(onSeriesAdded) {
        this.createNewSeries(onSeriesCreated, onSeriesAdded);
    };

    this.seriesColors = d3.scale.category10();
    this.maxColorIndex = -1;
    this.getNextSeriesColor = function () {
        this.maxColorIndex += 1;
        return this.seriesColors(this.maxColorIndex);
    };

    var onSeriesCreated = (function(series, onSeriesAdded) {
        series.color = this.getNextSeriesColor();
        this.series.push(series);
        onSeriesAdded(this, series);
    }).bind(this);

    this.createNewSeries = function(onSeriesCreated, onSeriesAdded) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:5000/series/?debug=true", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 201) {
                var responseJson = JSON.parse(request.responseText);
                var series = new Series(responseJson);
                console.log(series);
                onSeriesCreated(series, onSeriesAdded);
            }
        };
        request.send();
    }
};

var visualisationState = {
    IDLE: 0,
    ADDING_SERIES: 1
};