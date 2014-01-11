describe("Sim API", function() {
    it("should create series in the client-sim-engine", function(done) {
        createSeries().then(function(series) {
            done();
            expect(seriesIsValid(series)).toBe(true);
        });
    });
    it("should get series data given a valid series Id", function(done) {
        createSeries().then(function(series) {
            getSeriesData(series.id).then(function(data) {
                done();
                expect(data.seriesId).toEqual(series.id);
                expect(data.dataPoints.length).toBe(11);
            });
        });
    });
    it("should get only fresh series data", function(done) {
        createSeries().then(function(series) {
            var dataFetchedFirst;
            getSeriesData(series.id).then(function(data) {
                dataFetchedFirst = data;
                getSeriesData(series.id).then(function(data) {
                    done();
                    expect(dataFetchedFirst.dataPoints.length).toBe(11);
                    expect(data.dataPoints).toEqual([]);
                });
            });
        });
    });
});

function seriesIsValid(series) {
    return typeof series.id === "number" && series.isComplete() === false
}