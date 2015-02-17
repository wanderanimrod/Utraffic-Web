var Visualisation = function() {
    this.trackedProperties = [];
};

Visualisation.PROPERTY_TRACKED_STATUS = {
    ON: 1,
    OFF: 0
};

Visualisation.prototype.togglePropertyTrackedStatus = function(property) {
    var propertyIndex = locate(property, this.trackedProperties);

    if(propertyIndex > -1) {
        this.trackedProperties.splice(propertyIndex, 1);
        return Visualisation.PROPERTY_TRACKED_STATUS.OFF;
    }
    else {
        this.trackedProperties.push(property);
        return Visualisation.PROPERTY_TRACKED_STATUS.ON;
    }
};

function locate(propertyToLocate, properties) {
    var propertyIndex = -1;
    properties.some(function(currentProperty, index) {
        var matchFound = propertyToLocate.objectId === currentProperty.objectId
            && propertyToLocate.name === currentProperty.name;
        if(matchFound) propertyIndex = index;
        return matchFound;
    });
    return propertyIndex;
}

module.exports = Visualisation;