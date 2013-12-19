var Visualisation = function(id) {
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function() {
        session.activeVisualisation = this;
    };
    this.series = [];

    this.addSeries = function(onSeriesAdded) {
        this.createNewSeries().then(addSeriesToVis);
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

    this.createNewSeries = function() {
        return new RSVP.Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("POST", "http://127.0.0.1:5000/series/?debug=true", true);
            request.onload = function() {
                if(request.status === 201) {
                    var responseJson = JSON.parse(request.responseText);
                    var series = new Series(responseJson);
                    resolve(series);
                }
                else {
                    reject(Error(request.responseText));
                }
            };
            request.send();
        });
    }
};

var visualisationState = {
    IDLE: 0,
    ADDING_SERIES: 1
};