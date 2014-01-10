describe("Simulation", function() {
    it("should be monotone", function() {
        var sim1 = new Simulation();
        var sim2 = new Simulation();
        expect(sim1).toEqual(sim2);
    });
});