describe("Visualisation", function() {

    var visualisation;

    beforeEach(function() {
        visualisation = new Visualisation(10);
        visualisation.series = [];
    });

    it("should have and idle state when it is created", function() {
        expect(visualisation.state).toBe(visualisationState.IDLE);
    });
    it("should add series to itself", function(done) {
        visualisation.addSeries().then(function(series) {
            done();
            expect(visualisation.series[0]).toEqual(series);
        });
    });
    it("should assign a colour to any series added", function(done) {
        makeVisualisationWithOneSeries().then(function(visualisation) {
            done();
            expect(visualisation.series[0].colour).not.toBe(undefined);
        });
    });
    it("should assign different colours to different series added", function(done) {
        makeVisualisationWithOneSeries().then(function(visualisation) {
            visualisation.addSeries().then(function(series2) {
                done();
                var series1 = visualisation.series[0];
                expect(series1.colour).not.toEqual(series2.colour);
            });
        });
    });
    it("should make itself the active visualisation of the session", function() {
        var session = new Session();
        visualisation.activate();
        expect(session.activeVisualisation).toEqual(visualisation);
    });
    it("should begin fetching data for all series in it when started", function(done) {
        visualisation.addSeries().then(function() {
            visualisation.addSeries().then(function() {
                done();
                var series1Spy = spyOn(visualisation.series[0], 'startFetchingData');
                var series2Spy = spyOn(visualisation.series[1], 'startFetchingData');
                visualisation.start();
                expect(series1Spy).toHaveBeenCalled();
                expect(series2Spy).toHaveBeenCalled();
            });
        });
    });
});

describe("Visualisations", function() {
    it("should have independent series addition processes", function(done) {
        makeVisualisationWithOneSeries().then(function(visualisation1) {
            makeVisualisationWithOneSeries().then(function(visualisation2) {
                done();
                expect(visualisation1.series.length).toBe(1);
                expect(visualisation2.series.length).toBe(1);
                expect(visualisation1.series[0].colour).toEqual(visualisation2.series[0].colour);
            });
        });
    });
});

function makeVisualisationWithOneSeries() {
    var visualisation = new Visualisation(10);
    return new RSVP.Promise(function(resolve, reject) {
        visualisation.addSeries().then(function() {
            resolve(visualisation);
        }, function(error) {
            reject(Error(error))
        });
    });
}