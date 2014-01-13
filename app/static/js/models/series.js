function Series(seriesJson) {
    var self = this;
    self.id = seriesJson.id;
    self.data = seriesJson.data;
    self.status = seriesJson.status;
    self.isComplete = function () {
        return self.status === "complete";
    };
    self.startFetchingData = function() {
        while(!self.isComplete()) {
            getSeriesData(self.id).then(function(data) {
                data.dataPoints.forEach(function(dataPoint) {
                    self.data.append(dataPoint);
                });
                self.status = data.seriesStatus;
            });
        }
    };
}