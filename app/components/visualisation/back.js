module.exports = {
    template: require('./back.html'),
    components: {
        'sim-object-list': require('../sim-object-list/sim-object-list.js')
    },
    methods: {
        done: function() {
            this.$dispatch('vis-setup-done')
        }
    }
};