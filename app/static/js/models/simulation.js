function Simulation() {
    var self = this;
    self.start = function() {
        return new RSVP.Promise(function(resolve, reject) {
            //TODO Make API call to simulation to start
            self.status = SimulationStatus.RUNNING;
            resolve();
        });
    };

    self.stop = function() {
        return new RSVP.Promise(function(resolve, reject) {
            //TODO Make API calls to simulation to stop
            self.status = SimulationStatus.STOPPED;
            resolve();
        });
    };

    function windowSimulationOrMe() {
        if(window.simulation === undefined) {
            window.simulation = self;
            return self;
        }
        else return window.simulation;
    }
    return windowSimulationOrMe();
}

SimulationStatus = {
    RUNNING: 0,
    STOPPED: 1
};