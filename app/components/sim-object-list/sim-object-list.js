module.exports = {
    template: require('./sim-object-list.html'),
    components: {
        'sim-object': require('../sim-object/sim-object.js')
    },
    data: function() {
        var simulationService = require('../../services/simulation-service.js');
        return {
            'simObjects': simulationService.fetchSimObjects()
        }
    }
};