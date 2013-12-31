describe("index.js", function() {
    var session = getSession();
    beforeEach(function() {
        session.visualisations = [];
        session.activeVisualisation = null;
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
            mockVisCanvas = jQuery('<div class="vis front"></div><div class="vis front"></div>');
            mockVisCanvas.visElement = function(position) {
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

    describe("enableTrackingOfObjectProperties", function() {
        var mockPropertyButton;
        beforeEach(function() {
            mockPropertyButton = jQuery('<div><div>');
            spyOn(jQuery.fn, 'find').andReturn(mockPropertyButton);
        });

        it("should throw an error if there is no active visualisation when a property is selected for tracking", function() {
            var showErrorSpy = spyOn(window, 'showErrorMessage');
            enableTrackingOfObjectProperties();
            mockPropertyButton.click();
            expect(showErrorSpy).toHaveBeenCalled();
        });
        it("should make a call to trackObjectProperty when an object's property is tracked", function() {
            session.addNewVisualisation().activate();
            var trackPropertySpy = spyOn(window, 'trackObjectProperty').andCallThrough();
            enableTrackingOfObjectProperties();
            mockPropertyButton.click();
            expect(trackPropertySpy).toHaveBeenCalled();
        });
    });

    describe("trackObjectProperty", function() {
        it("should make a call to addSeriesToActiveVisualisation when called", function() {
            var addSeriesSpy = spyOn(window, 'addSeriesToActiveVisualisation').andCallThrough();
            trackObjectProperty();
            expect(addSeriesSpy).toHaveBeenCalled();
        });
        it("should add series only to active visualisation when an object's property is selected for tracking", function(done) {
            var visualisation1 = session.addNewVisualisation().activate();
            spyOn(window, 'addSeriesToVisKey');
            trackObjectProperty().then(function() {done();});
            var visualisation2 = session.addNewVisualisation().activate();
            trackObjectProperty().then(function() {
                done();
                expect(visualisation1.series.length).toBe(1);
                expect(visualisation2.series.length).toBe(1);
            });
        });
    });

    describe("addSeriesToActiveVisualisation", function() {
        beforeEach(function() {
            session.addNewVisualisation().activate();
        });

        it("should add a series to active visualisation", function(done) {
            addSeriesToActiveVisualisation().then(function(visualisation) {
                done();
                expect(visualisation.series.length).toBe(1);
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