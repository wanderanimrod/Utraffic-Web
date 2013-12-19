describe("Series", function () {
    it("should say it is complete when its status is 'complete'", function() {
        var series = new Series({"status": "complete"});
        expect(series.isComplete()).toBe(true);
    });

    it("should say it is not complete when its status is 'active'", function() {
        var series = new Series({"status": "active"});
        expect(series.isComplete()).toBe(false);
    });
});
