module.exports = {
    template: require('./front.html'),
    created: function() {
        this.visualisation = require('../../models/visualisation.js');
    },
    data: function() {
        return {
            trackedProperties: []
        }
    },
    events: {
        'tracked-status-changed': function(property, objectId) {
            this.visualisation.togglePropertyTrackedStatus({name: property, object: objectId})
        }
    },
    components: {
        'high-chart': require('../highchart/highchart.js')
    }
};