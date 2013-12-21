function Session() {
    var self = this;
    self.visualisations = [];
    self.activeVisualisation = undefined;

    this.addNewVisualisation = function() {
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
        for (var i = 0; i < visualisations.length; i++) {
            var currentId = visualisations[i].id;
            if (currentId > maxId) maxId = currentId;
        }
        return maxId;
    };

    this.getVisualisation = function(visId) {
        var visualisation;
        var visualisations = self.visualisations;
        for (var i = 0; i < visualisations.length; i++) {
            visualisation = visualisations[i];
            if (visualisation.id = visId)
                return visualisation;
        }
        return visualisation;
    };

    this.hasActiveVisualisation = function() {
        return this.activeVisualisation != undefined;
    };

    this.getActiveVisualisation = function() {
        return this.activeVisualisation;
    }
}