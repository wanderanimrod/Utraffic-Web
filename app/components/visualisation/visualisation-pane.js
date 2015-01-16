module.exports = {
    template: require('./visualisation-pane.html'),
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    },
    data: function(){
        return {
            side: 'front'
        }
    },
    events: {
        'tracked-status-changed': function(property, objectId) {
            this.$broadcast('tracked-status-changed', property, objectId);
        },
        'switch-vis-face': function() {
            var currentlyVisibleSide = this.side;
            if(currentlyVisibleSide === 'front')
                this.side = 'back';
            else
                this.side = 'front';
        }
    }
};