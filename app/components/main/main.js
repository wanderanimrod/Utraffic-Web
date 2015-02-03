module.exports = {
    template: require('./main.html'),
    events: {
        'start': function() {
            this.$broadcast('start');
        }
    },
    components: {
        'sim-controls': require('../sim-controls/sim-controls.js'),
        'visualisation-pane': require('../visualisation/visualisation-pane.js')
    }
};
