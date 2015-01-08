describe('Visualisation Pane Front', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/visualisation/front.js')
    });
    it('should have the front template', function() {
        var template = require('../../components/visualisation/front.html');
        expect(vm.template).toEqual(template);
    });
    xdescribe('when instantiated, ', function() {
        var instantiatedVm = {};

        beforeEach(function() {
            vm.created.call(instantiatedVm);
        });
        it('should add object property to trackedProperties when track even is fired', function() {
            var Vue = require('vue');
            var child = new Vue({});
            child.$dispatch('tracked-status-changed', 1, 2);
        });
    });
});
