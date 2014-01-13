describe("Series", function() {
    it("should say it is complete when its status is 'complete'", function() {
        var series = new Series({"status": "complete"});
        expect(series.isComplete()).toBe(true);
    });
    it("should say it is not complete when its status is 'active'", function() {
        var series = new Series({"status": "active"});
        expect(series.isComplete()).toBe(false);
    });
    it("should complete series once data from api specifies that series is complete", function(done) {
        createSeries().then(function(series) {
            done();
            expect(series.isComplete()).toBe(false);
            spyOn(window, 'getSeriesData').andReturn(fakeDataForCompleteSeries);
            series.startFetchingData();
            expect(series.status).toBe("complete");
        });
    });
    var fakeDataForCompleteSeries = {
        "dataPoints": [
            {"time": 0, "value": 0},
            {"time": 1, "value": 10},
        ],
        "seriesId": 0,
        "seriesStatus": "complete"
    }
});
