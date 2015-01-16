describe('Visualisation Pane Front', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/visualisation/front.js');
    });
    it('should have the front template', function() {
        var template = require('../../components/visualisation/front.html');
        expect(vm.template).toEqual(template);
    });
    it('should attach a fresh visualisation to itself on create', function() {
        var vis = require('../../models/visualisation.js');
        vm.created.call(vm);
        expect(vm.visualisation).toEqual(vis);
    });
    it('should add object property to visualisation when track event is fired', function() {
        var instantiatedVm = {};
        vm.created.call(instantiatedVm);
        vm.events['tracked-status-changed'].call(vm, 'vel', 10);
        expect(instantiatedVm.visualisation.trackedProperties).toEqual([{object: 10, name: 'vel'}])
    });
    it('should have highchart component', function() {
        var highchart = require('../../components/highchart/highchart.js');
        expect(vm.components['high-chart']).toEqual(highchart);
    });
});