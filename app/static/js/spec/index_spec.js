describe("index.js", function() {
    var session, visualisation, mockAddSeriesElement;
    beforeEach(function() {
        session = new Session();
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