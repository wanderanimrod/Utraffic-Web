describe('Visualisation Pane Back', function() {
    var vm;
     beforeEach(function() {
        vm = require('../../components/visualisation/back.js')
    });
    it('should have the back template', function() {
        var template = require('../../components/visualisation/back.html');
        expect(vm.template).toEqual(template);
    });
    it('should have the sim-object-list component', function() {
        var simObjectList = require('../../components/sim-object-list/sim-object-list.js');
        expect(vm.components['sim-object-list']).toEqual(simObjectList);
    });
    it('should')
});

