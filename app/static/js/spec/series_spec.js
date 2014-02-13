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

    describe("startFetchingData", function() {
        it("should add all data fetched from api to the series object", function() {
            var series = null;
            createSeriesAndStartFetchingData().then(function(runningSeries) {
                series = runningSeries;
            });
            waitsFor(function() {
                return series !== null;
            }, "series to be constructed", 500);
            runs(function() {
                expect(series.data).toEqual([
                    {"time": 0, "value": 3},
                    {"time": 1, "value": 10}
                ]);
            });
        });
        it("should complete series once data from api specifies that series is complete", function() {
            var series = null;
            createSeriesAndStartFetchingData().then(function(runningSeries) {
                series = runningSeries;
            });
            waitsFor(function() {
                return series !== null;
            }, "series to be constructed", 500);
            runs(function() {
                expect(series.status).toBe("complete");
            });
        });

        it("should call data renderer when new data is fetched from API", function() {
            var series = null;
            var renderDataSpy = spyOn(window, 'renderSeriesData');
            createSeriesAndStartFetchingData().then(function(runningSeries) {
                series = runningSeries;
            });
            waitsFor(function() {
                return series !== null;
            }, "series to be constructed", 500);
            runs(function() {
                expect(renderDataSpy).toHaveBeenCalledWith(fakeDataForCompleteSeries.dataPoints);
            })
        });

        function createSeriesAndStartFetchingData() {
            return new RSVP.Promise(function(resolve) {
                createSeries().then(function(seriesCreated) {
                    expect(seriesCreated.isComplete()).toBe(false);
                    spyOn(window, 'getSeriesData').andCallFake(fakeSeriesDataPromise);
                    seriesCreated.startFetchingData();
                    resolve(seriesCreated);
                });
            });
        }
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
        return new RSVP.Promise(function(resolve) {
            resolve(fakeDataForCompleteSeries);
        });
    }
});
