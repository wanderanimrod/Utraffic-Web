function Series(seriesJson) {
    var self = this;
    self.id = seriesJson.id;
    self.data = seriesJson.data;
    self.isComplete = function () {
        return seriesJson.status === "complete";
    };
    self.startFetchingData = function() {

    };
}