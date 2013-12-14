function Visualisation(id) {
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function () {
        session.activeVisualisation = this;
    };
    this.series = [];
    this.seriesColors = d3.scale.category10();
    this.addSeries = function () {
        var series = createNewSeries(this);

        this.series.push(series);
    };

    function createNewSeries(onSeriesCreated) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:5000/series/?debug=true", true);
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 201) {
                var responseJson = JSON.parse(request.responseText);
                var series = new Series(responseJson);
                console.log(series);
                onSeriesCreated(series);
            }
        };
        request.send();
    }
}

var visualisationState = {
    IDLE: 0,
    ADDING_SERIES: 1
};