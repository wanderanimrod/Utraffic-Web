describe("Session", function() {
    it("should have no visualisation upon instantiation", function() {
        var session = createSession();
        expect(session.visualisations).toEqual([]);
    });

    it("should have the activeVisualisation as undefined upon instantiation", function() {
        var session = createSession();
        expect(session.activeVisualisation).toBe(undefined);
    });

    it("should add visualisation to itself", function() {
        var session = createSession();
        var visualisation = session.addNewVisualisation();
        expect(session.getVisualisation(visualisation.id))
    });
});

function createSession() {
    return new Session();
}