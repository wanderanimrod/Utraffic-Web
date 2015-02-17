var ObjectProperty = require('../../models/object-property.js');

module.exports = {
    template: require('./sim-object.html'),
    methods: {
        trackProperty: function(property, objectId) {
            var objectProperty = new ObjectProperty(property, objectId);
            this.$dispatch('tracked-status-changed', objectProperty);
        }
    },
    components: {
        'object-property': require('../object-property/object-property.js')
    }
};