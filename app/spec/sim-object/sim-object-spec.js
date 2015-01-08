describe('Sim Object', function() {
    var vm;
     beforeEach(function() {
        vm = require('../../components/sim-object/sim-object.js')
    });
    it('should have the sim-object template', function() {
        var template = require('../../components/sim-object/sim-object.html');
        expect(vm.template).toEqual(template);
    });
    it('should fire tracked-status-changed event when a property is tracked', function() {
        var instantiatedVm = {$dispatch: function() {}};
        var dispatchSpy = spyOn(instantiatedVm, '$dispatch');

        vm.methods.trackProperty.call(instantiatedVm, 'vel', 10);

        expect(dispatchSpy).toHaveBeenCalledWith('tracked-status-changed', 'vel', 10);
    });
});