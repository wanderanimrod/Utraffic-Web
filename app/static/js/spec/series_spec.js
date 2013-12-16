describe("Series", function () {
    it("Should say it is complete when its status is 'complete'", function () {
        var series = new Series({"id": 100, "data": [], "status": "complete"});
        expect(series.isComplete()).toBe(true);
    });
});
