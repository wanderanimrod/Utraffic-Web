describe("Series Controls", function() {
    describe("Start/Stop Adding series", function() {
        var visualisation, mockAddSeriesElement;
        beforeEach(function() {
            visualisation = session.addNewVisualisation();
            mockAddSeriesElement = jQuery("<div></div>");
        });

        describe("startAddingSeries", function() {
            it("should make the series the active series of the session", function() {
                startAddingSeries(visualisation, mockAddSeriesElement);
                expect(session.activeVisualisation).toEqual(visualisation);
            });
            it("should set the state of the passed visualisation to 'ADDING_SERIES'", function() {
                expect(visualisation.state).toBe(visualisationState.IDLE);
                startAddingSeries(visualisation, mockAddSeriesElement);
                expect(visualisation.state).toBe(visualisationState.ADDING_SERIES);
            });
        });
        describe("finishAddingSeries", function() {
            it("should set the state of the passed visualisation to 'IDLE'", function() {
                finishAddingSeries(visualisation, mockAddSeriesElement);
                expect(visualisation.state).toBe(visualisationState.IDLE);
            });
        });
    });

    describe("addSeriesToActiveVisualisation", function() {
        beforeEach(function() {
            session.addNewVisualisation().activate();
        });

        it("should add a series to visualisation", function(done) {
            addSeriesToActiveVisualisation().then(function(visualisation) {
                done();
                expect(visualisation.series.length).toBe(1);
            });
        });
        it("should add series only to the active visualisation", function(done) {
            addSeriesToActiveVisualisation().then(function(visualisation) {
                done();
                expect(visualisation.id).toBe(session.activeVisualisation.id);
            });
        });
        it("should add the series to the UI visualisation key", function(done) {
            var addSeriesToVisKeySpy = spyOn(window, 'addSeriesToVisKey');
            addSeriesToActiveVisualisation().then(function() {
                done();
                expect(addSeriesToVisKeySpy).toHaveBeenCalled();
            });
        })
    });
});