describe("Simulation", function() {
    var simulation, session;
    beforeEach(function() {
        session = getSession();
        session.simulation = simulation = new Simulation();
    });
    it("should be monotone", function() {
        var sim1 = new Simulation();
        var sim2 = new Simulation();
        expect(sim1).toEqual(sim2);
    });
    it("should have status 'RUNNING' when started", function(done) {
        simulation.start().then(function() {
            done();
            expect(simulation.status).toBe(SimulationStatus.RUNNING);
        });
    });
    it("should have status 'STOPPED' when stopped", function(done) {
        simulation.stop().then(function() {
            done();
            expect(simulation.status).toBe(SimulationStatus.STOPPED);
        });
    });
});