describe("Session", function() {
    it("should have no visualisation upon instantiation", function() {
        var session = createSession();
        expect(session.visualisations).toEqual([]);
    });

    it("should have the activeVisualisation as undefined upon instantiation", function() {
        var session = createSession();
        expect(session.activeVisualisation).toBe(undefined);
    });
});

function createSession() {
    return new Session();
}