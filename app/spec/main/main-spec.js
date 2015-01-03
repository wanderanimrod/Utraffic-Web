describe('Main Component', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/main/main.js')
    });
    it('should have the visualisation pane component', function() {
        var pane = require('../../components/visualisation/visualisation-pane.js');
        expect(vm.components['visualisation-pane']).toEqual(pane);
    });
    it('should have the sim controls component', function() {
        var simControls = require('../../components/sim-controls/sim-controls.js');
        expect(vm.components['sim-controls']).toEqual(simControls);
    });
    it('should have the main template', function() {
        var template = require('../../components/main/main.html');
        expect(vm.template).toEqual(template);
    });
});
