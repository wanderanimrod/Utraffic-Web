function Session() {

    var self = this;
    self.visualisations = [];
    self.activeVisualisation = null;

    self.addNewVisualisation = function() {
        var visualisation = new Visualisation(self.getNextVisId());
        self.visualisations.push(visualisation);
        return visualisation;
    };

    self.getNextVisId = function() {
        return self.getMaxVisId() + 1;
    };

    self.getMaxVisId = function() {
        var maxId = -1;
        var visualisations = self.visualisations;
        for(var i = 0; i < visualisations.length; i++) {
            var currentId = visualisations[i].id;
            if(currentId > maxId) maxId = currentId;
        }
        return maxId;
    };

    self.getVisualisation = function(visId) {
        var visualisations = self.visualisations;
        for(var i = 0; i < visualisations.length; i++) {
            var visualisation = visualisations[i];
            if(visualisation.id === visId) {
                return visualisation;
            }
        }
        throw new Error("Visualisation with id " + visId + " not Found");
    };

    self.hasActiveVisualisation = function() {
        return self.activeVisualisation !== null;
    };

    self.startVisualising = function() {

    };

    function windowSessionOrMe() {
        if(window.session === undefined) {
            window.session = self;
            return self;
        }
        else return window.session;
    }

    window.getSession = function() {
        return windowSessionOrMe();
    };

    return windowSessionOrMe();
}