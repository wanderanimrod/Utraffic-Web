describe('Visualisation', function() {
    var vis, ObjectProperty, Visualisation;
    beforeEach(function() {
        Visualisation = require('../../models/visualisation.js');
        vis = new Visualisation();
        ObjectProperty = require('../../models/object-property.js');
    });

    afterEach(function() {
        vis.trackedProperties = [];
    });

    it('should add new property to tracked properties if it is not already tracked', function() {
        var property = new ObjectProperty('vel', 1);
        var status = vis.togglePropertyTrackedStatus(property);
        expect(vis.trackedProperties).toEqual([property]);
        expect(status).toEqual(Visualisation.PROPERTY_TRACKED_STATUS.ON)
    });

    it('should remove property from tracked properties if it is already tracked', function() {
        var velocityCarOne = new ObjectProperty('vel', 1);
        vis.togglePropertyTrackedStatus(velocityCarOne);

        var accelerationCarTwo = new ObjectProperty('acc', 2);
        vis.togglePropertyTrackedStatus(accelerationCarTwo);

        var status = vis.togglePropertyTrackedStatus(velocityCarOne);
        expect(vis.trackedProperties).toEqual([accelerationCarTwo]);
        expect(status).toEqual(Visualisation.PROPERTY_TRACKED_STATUS.OFF)
    });
});
