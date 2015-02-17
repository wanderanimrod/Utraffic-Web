module.exports = {
    template: require('./front.html'),
    created: function() {
        this.visualisation = require('../../models/visualisation.js');
    },
    events: {
        'tracked-status-changed': function(property, objectId) {
//            this.visualisation.togglePropertyTrackedStatus({name: property, object: objectId})
        }
    },
    components: {
        'live-chart': require('../live-chart/live-chart.js')
    }
};