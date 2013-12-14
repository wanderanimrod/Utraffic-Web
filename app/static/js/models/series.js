function Series(seriesJson) {
    this.id = seriesJson.id;
    this.data = seriesJson.data;
    this.isComplete = function () {
        return seriesJson.status === "complete";
    };
}