describe('Visualisation Pane Back', function() {
    var vm;
     beforeEach(function() {
        vm = require('../../components/visualisation/back.js')
    });
    it('should have the back template', function() {
        var template = require('../../components/visualisation/back.html');
        expect(vm.template).toEqual(template);
    })
});

