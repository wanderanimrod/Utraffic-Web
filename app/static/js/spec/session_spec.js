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

    it("should assign sequential ids to visualisation added", function() {
        var session = createSession();
        var visualisation1 = session.addNewVisualisation();
        var visualisation2 = session.addNewVisualisation();
        var visualisation3 = session.addNewVisualisation();
        expect(visualisation2.id).toBe(visualisation1.id + 1);
        expect(visualisation3.id).toBe(visualisation2.id + 1);
    });
});

function createSession() {
    return new Session();
}