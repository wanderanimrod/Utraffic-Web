function Series(seriesJson) {
    var self = this;
    self.id = seriesJson.id;
    self.data = seriesJson.dataPoints;
    if(self.data === undefined) self.data = [];
    self.status = seriesJson.status;
    self.isComplete = function() {
        return self.status === "complete";
    };

    self.startFetchingData = function() {
        getSeriesData(self.id).then(function(incomingData) {
            addDataPointsToSeries(incomingData.dataPoints);
            renderSeriesData(incomingData.dataPoints);
            self.status = incomingData.seriesStatus;
            fetchAgainIfIncomplete();
        });
    };

    function addDataPointsToSeries(dataPoints) {
        dataPoints.forEach(function(dataPoint) {
            self.data.push(dataPoint);
        });
    }

    function fetchAgainIfIncomplete() {
        if(!self.isComplete()) {
            setTimeout(self.startFetchingData(), 500);
        }
    }
}