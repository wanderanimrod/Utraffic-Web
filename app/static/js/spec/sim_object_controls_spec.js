describe("Sim Object Controls", function() {
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
            trackObjectProperty().then(function() {
                var visualisation2 = session.addNewVisualisation().activate();
                trackObjectProperty().then(function() {
                    done();
                    expect(visualisation1.series.length).toBe(1);
                    expect(visualisation2.series.length).toBe(1);
                });
            });
        });
    });
});