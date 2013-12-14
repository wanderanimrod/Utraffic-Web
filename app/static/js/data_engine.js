function Session() {
    var visualisations = [];
    var activeVisualisation = undefined;

    this.addNewVisualisation = function(visualisation) {
        visualisations.push(visualisation);
    };

    this.getNextVisId = function() {
        return this.getMaxVisId() + 1;
    };

    this.getMaxVisId = function() {
        var maxId = -1;
        for (var i = 0; i < visualisations.length; i++) {
            var currentId = visualisations[i].id;
            if (currentId > maxId) maxId = currentId;
        }
        return maxId;
    };

    this.getVisualisation = function(visId) {
        var visualisation;
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