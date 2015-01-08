module.exports = {
    template: require('./visualisation-pane.html'),
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    },
    created: function() {
        this.$on('tracked-status-changed', function(property, objectId) {
            console.log('received in parent');
            this.$broadcast('tracked-status-changed', property, objectId);
        });
    },
    data: function(){
        return {
            side: 'back'
        }
    }
};