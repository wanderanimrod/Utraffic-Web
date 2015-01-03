module.exports = {
    template: require('./main.html'),
    components: {
        'sim-controls': require('../sim-controls/sim-controls.js'),
        'visualisation-pane': require('../visualisation/visualisation-pane.js'),
        'sim-object-control-menu': require('../sim-object-control-menu/sim-object-control-menu.js'),
        'sim-object-list': require('../sim-object-list/sim-object-list.js')
    }
};
