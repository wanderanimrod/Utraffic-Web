describe('Visualisation Pane Front', function() {
    var vm;
     beforeEach(function() {
        vm = require('../../components/visualisation/front.js')
    });
    it('should have the front template', function() {
        var template = require('../../components/visualisation/front.html');
        expect(vm.template).toEqual(template);
    })
});
