module.exports = {
    template: require('./visualisation-row.html'),
    components: {
        'visualisation-front': require('../visualisation-front/visualisation-front.js'),
        'visualisation-back': require('../visualisation-back/visualisation-back.js')
    }
};