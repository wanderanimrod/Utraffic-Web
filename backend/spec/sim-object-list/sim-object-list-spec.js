describe('Sim Object List ', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/sim-object-list/sim-object-list.js')
    });
    it('should have the sim-object-list template', function() {
        var template = require('../../components/sim-object-list/sim-object-list.html');
        expect(vm.template).toEqual(template);
    });
    it('should have the sim-object component', function() {
        var simObject = require('../../components/sim-object/sim-object.js');
        expect(vm.components['sim-object']).toEqual(simObject);
    });
    it('should have two cars as sim objects', function() {
        var expectedObjects = [
            {id: 0, properties : [ { name : 'vel' }, { name : 'acc' }, { name : 'pos' }, { name : 'lane' } ]},
            {id: 1, properties : [ { name : 'vel' }, { name : 'acc' }, { name : 'pos' }, { name : 'lane' } ]}
        ];
        expect(vm.data().simObjects).toEqual(expectedObjects);
    });
});