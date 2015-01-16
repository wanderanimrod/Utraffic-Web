describe('Visualisation', function() {
    var visualisation;
    beforeEach(function() {
        visualisation = require('../../models/visualisation.js');
    });

    afterEach(function() {
        visualisation.trackedProperties = [];
    });

    it('should add new property to tracked properties if it is not already tracked', function() {
        var property = {object: 1, name: 'vel'};
        visualisation.togglePropertyTrackedStatus(property);
        expect(visualisation.trackedProperties).toContain(property)
    });

    it('should remove property from tracked properties if it is already tracked', function() {
        var property = {object: 1, name: 'vel'};
        visualisation.togglePropertyTrackedStatus(property);

        visualisation.togglePropertyTrackedStatus({object: 2, name: 'acc'});

        visualisation.togglePropertyTrackedStatus(property);
        expect(visualisation.trackedProperties).toEqual([{object: 2, name: 'acc'}]);
    });
});
