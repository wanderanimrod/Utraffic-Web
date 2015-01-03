module.exports = {
    template: require('./visualisation-pane.html'),
    components: {
        'visualisation-front': require('./front.js'),
        'visualisation-back': require('./back.js')
    },
    data: {
        side: 'back'
    }
};