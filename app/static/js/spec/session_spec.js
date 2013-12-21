describe("Session", function() {
    it("should have no visualisation upon instantiation", function() {
        var session = createSession();
        expect(session.visualisations).toEqual([]);
    })
});

function createSession() {
    return new Session();
}