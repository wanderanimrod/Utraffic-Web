describe("Sim API", function() {
    var debugSpy;
    beforeEach(function() {
        debugSpy = spyOn(appSettings, 'debug').andReturn(false); //Test against the real api
    });

    it("should create series in the client-sim-engine", function(done) {
        createSeries().then(function(series) {
            done();
            expect(seriesIsValid(series)).toBe(true);
        });
    });
    it("should get series data given a valid series Id", function(done) {
        debugSpy.andReturn(true); //Test against dummy series so we can have some data
        createSeries().then(function(series) {
            getSeriesData(series.id).then(function(data) {
                done();
                expect(data.dataPoints.length).toBe(11);
            });
        });
    });
    it("should get only fresh series data", function(done) {
        createSeries().then(function(series) {
            getSeriesData(series.id).then(function() {
                getSeriesData(series.id).then(function(dataOnSecondFetch) {
                    done();
                    expect(dataOnSecondFetch.dataPoints).toEqual([]);
                });
            });
        });
    });
    describe("Series Data", function() {
        it("should contain series id", function(done) {
            createSeries().then(function(series) {
                getSeriesData(series.id).then(function(data) {
                    done();
                    expect(data.seriesId).toEqual(series.id);
                });
            });
        });
        it("should contain series status", function(done) {
             createSeries().then(function(series) {
                getSeriesData(series.id).then(function(data) {
                    done();
                    expect(data.seriesStatus).toEqual("active");
                });
            });
        });
    });
});

function seriesIsValid(series) {
    return typeof series.id === "number" && series.isComplete() === false
}