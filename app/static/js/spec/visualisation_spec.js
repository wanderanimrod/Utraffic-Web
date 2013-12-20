describe("Visualisation", function() {
    it("should add series to itself", function(done) {
        var visualisation = new Visualisation(10);
        visualisation.addSeries().then(function(series) {
            done();
            expect(visualisation.series[0]).toEqual(series);
        });
    });
});