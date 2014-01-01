describe("Visualisation Controls", function() {
    var session = new Session();
    beforeEach(function() {
        session.visualisations = [];
        session.activeVisualisation = null;
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
});