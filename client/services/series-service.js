var request = require('request-promise');
var conf = require('../conf.js');

module.exports = {
    fetchSeriesData: function(objectProperty) {
        var options = {
            uri: conf.BASE_URL + '/series?objectId=' + objectProperty.objectId + '&name=' + objectProperty.name,
            resolveWithFullResponse: true
        };
        return request.get(options).then(function(response) {
            return response.body;
        });
    }
};
