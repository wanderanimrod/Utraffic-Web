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
    methods: {
        print: function() {
            console.log(this.visualisation.trackedProperties.map(function(property) {
                return property.name + " " + property.object
            }));
        }
    },
    components: {
        'high-chart': require('../highchart/highchart.js')
    }
};