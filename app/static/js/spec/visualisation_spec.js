describe("Visualisation", function() {
    it("should create series in the client-sim-engine", function(done) {
        var visualisation = new Visualisation(10);
        visualisation.createNewSeries().then(function(series) {
            done();
            var seriesIsValid = seriesIsValid(series);
            expect(seriesIsValid).toBe(true);
        });
    });
});

function seriesIsValid(series) {
    return typeof series.id === "number" && series.status === "active"
}