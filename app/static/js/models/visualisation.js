var Visualisation = function(id) {
    var self = this;
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function() {
        session.activeVisualisation = this;
    };
    this.series = [];

    this.addSeries = function() {
        return new RSVP.Promise(function(resolve, reject) {
            createSeries().then(function(series) {
                self.series.push(series);
                resolve(series);
            }, function(error) {
                reject(error);
            });
        });

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