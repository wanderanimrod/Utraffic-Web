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
            incomingData.dataPoints.forEach(function(dataPoint) {
                self.data.push(dataPoint);
            });
            self.status = incomingData.seriesStatus;
            if(!self.isComplete()) {
                setTimeout(self.startFetchingData(), 200);
            }
        });
    };
}