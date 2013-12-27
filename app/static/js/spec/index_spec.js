describe("index.js", function() {
    var session;
    beforeEach(function() {
        session = new Session();
        session.visualisations = [];
    });

    describe("Adding Series to Visualisations", function() {

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

    describe("createVisualisationObjectForUiElements", function() {
        var mockVisCanvas;
        beforeEach(function() {
            window.session = session;

            mockVisCanvas = jQuery('<div class="vis front"></div><div class="vis front"></div>');
            mockVisCanvas.visElement = function(position) {
                console.log($('.vis.front', mockVisCanvas)[position]);
                return jQuery($('.vis.front', mockVisCanvas)[position]);
            };
        });

        it("should create a visualisation for each element with 'vis' and 'front' classes", function() {
            spyOn(jQuery.fn, 'find').andReturn(mockVisCanvas);
            createVisualisationObjectsForUiElements();
            expect(session.visualisations.length).toBe(2);
        });
        it("should set the id of ui elements to the id of the visualisations created for them", function() {
            spyOn(jQuery.fn, 'find').andReturn(mockVisCanvas);
            createVisualisationObjectsForUiElements();
            var visElementId = parseInt(mockVisCanvas.visElement(0).attr('id'));
            expect(visElementId).toBe(session.visualisations[0].id);
        });
    });
});