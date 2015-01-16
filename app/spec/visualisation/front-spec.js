describe('Visualisation Pane Front', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/visualisation/front.js');
    });
    it('should have the front template', function() {
        var template = require('../../components/visualisation/front.html');
        expect(vm.template).toEqual(template);
    });
    it('should add object property to trackedProperties when track event is fired', function() {
        vm.trackedProperties = [];
        vm.events['tracked-status-changed'].call(vm, 'vel', 10);
        expect(vm.trackedProperties).toEqual([{object: 10, property: 'vel'}])
    });
});
