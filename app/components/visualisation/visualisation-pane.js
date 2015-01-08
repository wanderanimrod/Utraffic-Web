module.exports = {
    template: require('./visualisation-pane.html'),
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    },
    data: function(){
        return {
            side: 'back'
        }
    },
    events: {
        'tracked-status-changed': function(property, objectId) {
            this.$broadcast('tracked-status-changed', property, objectId);
        }
    }
};