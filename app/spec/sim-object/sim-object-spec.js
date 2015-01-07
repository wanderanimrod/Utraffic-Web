describe('Sim Object', function() {
    var vm;
     beforeEach(function() {
        vm = require('../../components/sim-object/sim-object.js')
    });
    it('should have the sim-object template', function() {
        var template = require('../../components/sim-object/sim-object.html');
        expect(vm.template).toEqual(template);
    })
});

