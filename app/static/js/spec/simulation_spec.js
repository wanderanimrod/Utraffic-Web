describe("Simulation", function() {
    it("should be monotone", function() {
        var sim1 = new Simulation();
        var sim2 = new Simulation();
        expect(sim1).toEqual(sim2);
    });
    it("should have status 'RUNNING' when started", function(done) {
        var simulation = new Simulation();
        simulation.start().then(function() {
            done();
            expect(simulation.status).toBe(SimulationStatus.RUNNING);
        });
    });
});