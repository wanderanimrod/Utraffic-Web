describe("Session", function() {

    var session;
    beforeEach(function() {
        session = new Session();
    });
    afterEach(function() {
        session.visualisations = [];
        session.activeVisualisation = null;
    });

    it("should add visualisation to itself", function() {
        var visualisation = session.addNewVisualisation();
        expect(session.getVisualisation(visualisation.id))
    });
    it("should assign sequential ids to visualisation added", function() {
        var visualisation1 = session.addNewVisualisation();
        var visualisation2 = session.addNewVisualisation();
        var visualisation3 = session.addNewVisualisation();
        expect(visualisation3.id).toBe(visualisation2.id + 1);
        expect(visualisation2.id).toBe(visualisation1.id + 1);
    });
    it("should get visualisation by id", function() {
        var visualisation1 = session.addNewVisualisation();
        var visualisation2 = session.addNewVisualisation();
        var returnedVisualisation2 = session.getVisualisation(visualisation2.id);
        var returnedVisualisation1 = session.getVisualisation(visualisation1.id);
        expect(returnedVisualisation2).toBe(visualisation2);
        expect(returnedVisualisation1).toBe(visualisation1);
    });
    it("should throw an error when a visualisation that does not exist is requested", function() {
        var visualisation = session.addNewVisualisation();
        var inexistentVisId = visualisation.id + 1;
        expect(function() {
            session.getVisualisation(inexistentVisId)
        }).toThrow(Error("Visualisation with id " + inexistentVisId + " not Found"));
    });
    it("should know if it has an active visualisation or not", function() {
        expect(session.hasActiveVisualisation()).toBe(false);
        var visualisation = session.addNewVisualisation();
        visualisation.activate();
        expect(session.hasActiveVisualisation()).toBe(true);
    });
    it("should only be one instance, i.e. Monotone", function() {
        var session2 = new Session();
        expect(session2).toEqual(session);
    });
    it("should attach a getSession() method on the global object that returns the session", function() {
        var sessionFromGlobalObject = window.getSession();
        expect(session).toEqual(sessionFromGlobalObject);
    });

    describe("startVisualising", function() {
        it("should call 'start' on each visualisation in the session", function() {
            var vis1 = session.addNewVisualisation();
            var vis2 = session.addNewVisualisation();
            var vis1StartSpy = spyOn(vis1, 'start');
            var vis2StartSpy = spyOn(vis2, 'start');
            session.startVisualising();
            expect(vis1StartSpy).toHaveBeenCalled();
            expect(vis2StartSpy).toHaveBeenCalled();
        });
    });
});