function Simulation() {
    var self = this;
    self.start = function() {
        return new RSVP.Promise(function(resolve, reject) {
            //TODO Make API call to simulation to start
            self.status = SimulationStatus.RUNNING;
            getSession().startVisualising();
            resolve();
        });
    };

    self.stop = function() {
        return new RSVP.Promise(function(resolve, reject) {
            //TODO Make API call to simulation to stop
            self.status = SimulationStatus.STOPPED;
            resolve();
        });
    };

    function sessionSimulationOrMe() {
        var session = getSession();
        if(session.simulation === undefined) {
            session.simulation = self;
            return session.simulation;
        }
        else return session.simulation;
    }
    return sessionSimulationOrMe();
}

SimulationStatus = {
    RUNNING: 0,
    STOPPED: 1
};