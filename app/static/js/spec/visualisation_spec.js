describe("Visualisation", function() {
    it("should add series to itself", function(done) {
        var visualisation = new Visualisation(10);
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
});

describe("Visualisations", function() {
   it("should have independent series addition processes", function(done){
       makeVisualisationWithOneSeries().then(function(visualisation1){
           makeVisualisationWithOneSeries().then(function(visualisation2){
               done();
               expect(visualisation1.series.length).toBe(1);
               expect(visualisation2.series.length).toBe(1);
               expect(visualisation1.series[0].colour).toEqual(visualisation2.series[0].colour);
           });
       });
   })
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