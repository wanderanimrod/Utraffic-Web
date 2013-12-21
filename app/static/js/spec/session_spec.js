describe("Session", function() {

    var session;

    beforeEach(function() {
        session = new Session();
    });

    it("should have no visualisation upon instantiation", function() {
        expect(session.visualisations).toEqual([]);
    });

    it("should have the activeVisualisation as undefined upon instantiation", function() {
        expect(session.activeVisualisation).toBe(undefined);
    });

    it("should add visualisation to itself", function() {
        var visualisation = session.addNewVisualisation();
        expect(session.getVisualisation(visualisation.id))
    });

    it("should assign sequential ids to visualisation added", function() {
        var visualisation1 = session.addNewVisualisation();
        var visualisation2 = session.addNewVisualisation();
        var visualisation3 = session.addNewVisualisation();
        expect(visualisation2.id).toBe(visualisation1.id + 1);
        expect(visualisation3.id).toBe(visualisation2.id + 1);
    });

    it("should get visualisation by id", function() {
        var visualisation = session.addNewVisualisation();
        var returnedVisualisation = session.getVisualisation(visualisation.id);
        expect(returnedVisualisation).toBe(visualisation);
    });
});