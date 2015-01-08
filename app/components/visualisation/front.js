module.exports = {
    template: require('./front.html'),
    data: function() {
        return {
            trackedProperties: []
        }
    },
    events: {
        'tracked-status-changed': function(property, objectId) {
            this.trackedProperties.push({object: objectId, property: property})
        }
    }
};
