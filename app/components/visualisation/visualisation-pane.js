module.exports = {
    template: require('./visualisation-pane.html'),
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    },
    created: function() {
        this.$on('tracked-status-changed', function(property, objectId) {
            this.$data.trackedProperties.push({object: objectId, property: property})
        });
    },
    data: {
        side: 'back',
        trackedProperties: []
    }
};