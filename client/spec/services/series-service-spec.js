describe('Series Service Spec', function() {
    var service = require('../../services/series-service.js');
    var request = require('request-promise');
    var ObjectProperty = require('../../models/object-property.js');
    var conf = require('../../conf.js');

    it('should fetch series data from backend', function(done) {
        var objectProperty = new ObjectProperty('vel', 10);
        var expectedResponse = {body: {key: 'Some value'}};
        var expectedRequestUri = conf.BASE_URL + '/series?objectId=10&name=vel';
        var requestSpy = spyOn(request, 'get').and.returnValue(fakeResponsePromise(expectedResponse));

        service.fetchSeriesData(objectProperty).then(function(data) {
            expect(data).toEqual(expectedResponse.body);
            expect(requestSpy).toHaveBeenCalledWith({uri: expectedRequestUri, resolveWithFullResponse: true});
            done();
        })
    }); 
});

var Promise = require('bluebird');
var fakeResponsePromise = function(response) {
    return new Promise(function(resolve) {
        resolve(response);
    });
};