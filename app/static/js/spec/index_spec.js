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
//        it("should add series to active visualisation when an object's property is selected for tracking", function() {
//            var visualisation = createVisualisationAndAddASeries();
//            var addSeriesToActiveVisualisationSpy = spyOn(window, 'addSeriesToActiveVisualisation').andCallThrough();
//            waitsFor(function() {
//                return visualisation.series.length > 0;
//            }, "series to be added to the visualisation", 500);
//            runs(function() {
////                expect(visualisation.series.length).toBe(1);
//                expect(addSeriesToActiveVisualisationSpy).toHaveBeenCalled();
//            });
//
//        });
//        it("should add series only to active visualisation when an object's property is selected for tracking", function() {
//            var visualisation1 = createVisualisationAndAddASeries();
//            var visualisation2 = createVisualisationAndAddASeries();
//            waitsFor(function() {
//                return visualisation1.series.length > 0 && visualisation2.series.length > 0
//            }, "a series to be added to both visualisations", 1000);
//            runs(function() {
//                expect(visualisation1.series.length).toBe(1);
//                expect(visualisation2.series.length).toBe(1);
//            })
//        });

        function createVisualisationAndAddASeries() {
            var visualisation = session.addNewVisualisation();
            visualisation.activate();
            enableTrackingOfObjectProperties();
            mockPropertyButton.click();
            return visualisation;
        }
    });

    describe("addSeriesToActiveVisualisation", function() {
        it("should add a series to active visualisation", function(done) {
            session.addNewVisualisation().activate();
            addSeriesToActiveVisualisation().then(function(visualisation) {
                done();
                expect(visualisation.series.length).toBe(1);
            });
        });
    });
});