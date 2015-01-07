module.exports = {
    template: require('./sim-object-list.html'),
    created: function() {
        var simulationService = require('../../services/simulation-service.js');
        this.simObjects = simulationService.fetchSimObjects();
    },
    components: {
        'sim-object': require('../sim-object/sim-object.js')
    }
};