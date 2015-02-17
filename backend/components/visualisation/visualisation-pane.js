module.exports = {
    template: require('./visualisation-pane.html'),
    data: function(){
        return {
            side: 'back'
        }
    },
    events: {
        'tracked-status-changed': function(objectProperty) {
            this.$broadcast('tracked-status-changed', objectProperty);
        },
        'switch-vis-face': function() {
            var currentlyVisibleSide = this.side;
            if(currentlyVisibleSide === 'front')
                this.side = 'back';
            else
                this.side = 'front';
        }
    },
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    }
};