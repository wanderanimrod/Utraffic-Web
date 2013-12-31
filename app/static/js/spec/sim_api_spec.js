describe("Sim API:", function() {
    describe("createSeries", function() {
        it("should create series in the client-sim-engine", function(done) {
            createSeries().then(function(series) {
                done();
                var seriesIsValid = seriesIsValid(series);
                expect(seriesIsValid).toBe(true);
            });
        });
    });
});

function seriesIsValid(series) {
    return typeof series.id === "number" && series.status === "active"
}