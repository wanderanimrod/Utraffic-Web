describe('Visualisation Pane', function() {
    var vm;
    beforeEach(function() {
        vm = require('../../components/visualisation/visualisation-pane.js')
    });
    it('should have a front component', function() {
        var front = require('../../components/visualisation/front.js');
        expect(vm.components['visualisation-front']).toEqual(front);
    });
    it('should have a back component', function() {
        var back = require('../../components/visualisation/back.js');
        expect(vm.components['visualisation-back']).toEqual(back);
    });
    it('should have the visualisation pane template', function() {
        var template = require('../../components/visualisation/visualisation-pane.html');
        expect(vm.template).toEqual(template);
    });
    it('should show the back side by default', function() {
        expect(vm.data().side).toBe('back');
    });
    it('should reflect the tracked-status-changed event down to child vms when the same is received', function() {
        var instantiatedVm = {$broadcast: function() {}};
        var broadcastSpy = spyOn(instantiatedVm, '$broadcast');
        vm.events['tracked-status-changed'].call(instantiatedVm, 'vel', 10);
        expect(broadcastSpy).toHaveBeenCalledWith('tracked-status-changed', 'vel', 10);
    });
    it('should toggle visible side when switch-vis-face event is fired', function() {
        var instantiatedVm = {side: 'back'};

        vm.events['switch-vis-face'].call(instantiatedVm);
        expect(instantiatedVm.side).toBe('front');

        vm.events['switch-vis-face'].call(instantiatedVm);
        expect(instantiatedVm.side).toBe('back');
    });
});
