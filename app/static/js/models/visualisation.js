var Visualisation = function(id) {
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function() {
        session.activeVisualisation = this;
    };
    this.series = [];

    this.addSeries = function(onSeriesAdded) {
        createSeries().then(addSeriesToVis);
    };

    this.seriesColors = d3.scale.category10();
    this.maxColorIndex = -1;
    this.getNextSeriesColor = function() {
        this.maxColorIndex += 1;
        return this.seriesColors(this.maxColorIndex);
    };

//    var onSeriesCreated = (function (series, onSeriesAdded) {
//        series.color = this.getNextSeriesColor();
//        this.series.push(series);
//        onSeriesAdded(this, series);
//    }).bind(this);
};

var visualisationState = {
    IDLE: 0,
    ADDING_SERIES: 1
};