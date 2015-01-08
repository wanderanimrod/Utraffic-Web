module.exports = {
    template: require('./front.html'),
    created: function() {
        this.$on('tracked-status-changed', function(property, objectId) {
            console.log('received in child');
            this.trackedProperties.push({object: objectId, property: property})
        });
    },
    data: {
        trackedProperties: []
    }
};
