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
        self.visualisations.forEach(function(visualisation) {
            var currentId = visualisation.id;
            if(currentId > maxId) maxId = currentId;
        });
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
        self.visualisations.forEach(function(visualisation) {
            visualisation.start();
        });
    };

    self.getParentVisualisation = function(series) {
        var visualisations = self.visualisations;
        for(var i = 0; i < visualisations.length; i++) {
            var visualisation = visualisations[i];
            if(visualisation.hasSeries(series))
                return visualisation;
        }
        throw new Error("Parent visualisation for series '" + series.id + "' not found.");
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