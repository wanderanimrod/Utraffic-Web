describe("Sim API:", function() {
    describe("createSeries", function() {
        it("should create series in the client-sim-engine", function(done) {
            createSeries().then(function(series) {
                done();
                expect(seriesIsValid(series)).toBe(true);
            });
        });
    });
});

function seriesIsValid(series) {
    return typeof series.id === "number" && series.isComplete() === false
}