function Simulation() {
    var self = this;
    self.start = function() {
        return new RSVP.Promise(function(resolve, reject) {
            //TODO Make API call to simulation to start
            self.status = SimulationStatus.RUNNING;
            resolve();
        });
    }
}

SimulationStatus = {
    RUNNING: 0
};