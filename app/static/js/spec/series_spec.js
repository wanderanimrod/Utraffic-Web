describe("Series", function() {
    it("should say it is complete when its status is 'complete'", function() {
        var series = new Series({"status": "complete"});
        expect(series.isComplete()).toBe(true);
    });
    it("should say it is not complete when its status is 'active'", function() {
        var series = new Series({"status": "active"});
        expect(series.isComplete()).toBe(false);
    });
    it("should make series data an empty array when no data is passed in construction json", function() {
        var series = new Series({"status": "incomplete"});
        expect(series.data).toEqual([]);
    });
    it("should complete series once data from api specifies that series is complete", function() {
        var series = null;
        createSeries().then(function(seriesCreated) {
            series = seriesCreated;
            expect(seriesCreated.isComplete()).toBe(false);
            spyOn(window, 'getSeriesData').andCallFake(fakeSeriesDataPromise);
            seriesCreated.startFetchingData();
        });
        waitsFor(function() {
            return series !== null;
        }, "series to be constructed", 1500);
        runs(function() {
            expect(series.status).toBe("complete");
        });
    });

    var fakeDataForCompleteSeries = {
        "dataPoints": [
            {"time": 0, "value": 3},
            {"time": 1, "value": 10}
        ],
        "seriesId": 0,
        "seriesStatus": "complete"
    };

    function fakeSeriesDataPromise() {
        console.log("FAKE getSeriesData called");
        return new RSVP.Promise(function(resolve) {
            resolve(fakeDataForCompleteSeries);
        });
    }
});
