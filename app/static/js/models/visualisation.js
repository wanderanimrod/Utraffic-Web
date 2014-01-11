var Visualisation = function(id) {
    var self = this;

    self.id = id;
    self.series = [];
    self.state = visualisationState.IDLE;

    self.activate = function() {
        session.activeVisualisation = self;
        return self;
    };

    self.addSeries = function() {
        return new RSVP.Promise(function(resolve, reject) {
            createSeries().then(function(series) {
                series.colour = self.getNextSeriesColor();
                self.series.push(series);
                resolve(series);
            }, function(error) {
                reject(Error(error));
            });
        });
    };

    self.maxColorIndex = -1;
    self.seriesColors = d3.scale.category10();
    self.getNextSeriesColor = function() {
        self.maxColorIndex += 1;
        return self.seriesColors(self.maxColorIndex);
    };

    self.start = function() {
        self.series.forEach(function(series) {
            series.startFetchingData();
        });
    };
};

var visualisationState = {
    IDLE: 0,
    ADDING_SERIES: 1
};