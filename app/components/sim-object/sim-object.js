module.exports = {
    template: require('./sim-object.html'),
    methods: {
        trackProperty: function(property, objectId) {
            console.log("fired");
            this.$dispatch('tracked-status-changed', property, objectId);
        }
    },
    components: {
        'object-property': require('../object-property/object-property.js')
    }
};
