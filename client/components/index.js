var Vue = require('vue');
Vue.config.debug = true;

var options = {
    el: '#index-page',
    components: {
        'main-component': require('./main/main.js')
    }
};

var vm = new Vue(options);

module.exports = options;
