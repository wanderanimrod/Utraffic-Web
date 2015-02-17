describe('Sim Object', function() {
    var vm, ObjectProperty;
    beforeEach(function() {
        vm = require('../../components/sim-object/sim-object.js');
        ObjectProperty = require('../../models/object-property.js');
    });
    it('should have the sim-object template', function() {
        var template = require('../../components/sim-object/sim-object.html');
        expect(vm.template).toEqual(template);
    });
    it('should fire tracked-status-changed event with ObjectProperty instance when a property is tracked', function() {
        var instantiatedVm = {$dispatch: function() {}};
        var dispatchSpy = spyOn(instantiatedVm, '$dispatch');
        var objectProperty = new ObjectProperty('vel', 10);

        vm.methods.trackProperty.call(instantiatedVm, objectProperty.name, objectProperty.objectId);

        expect(dispatchSpy).toHaveBeenCalledWith('tracked-status-changed', objectProperty);
    });
});