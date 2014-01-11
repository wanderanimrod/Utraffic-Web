describe("Start Button", function() {
    var mockStartButton;
    beforeEach(function() {
        window.simulation = new Simulation();
        mockStartButton = jQuery('<div id="SomeID"></div>');
        spyOn(window, '$').andReturn(mockStartButton);
    });

    it("should start the simulation when clicked", function() {
        var startSimSpy = spyOn(window.simulation, 'start');
        enableStartButton();
        mockStartButton.click();
        expect(startSimSpy).toHaveBeenCalled();
    });
});