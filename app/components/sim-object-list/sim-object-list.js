module.exports = {
    template: require('./sim-object-list.html'),
    components: {
        'sim-object': require('../sim-object/sim-object.js')
    },
    data: {
        simObjects: [
            {id: 0},
            {id: 1}
        ]
    }
};
