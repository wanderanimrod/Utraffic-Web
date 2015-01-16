module.exports = {
    trackedProperties: [],
    togglePropertyTrackedStatus: function(property) {
        var propertyIndex = locate(property, this.trackedProperties);
        propertyIndex > -1 ? this.trackedProperties.splice(propertyIndex, 1) : this.trackedProperties.push(property);
    }
};

function locate(propertyToLocate, properties) {
    var propertyIndex = -1;
    properties.some(function(currentProperty, index) {
        var matchFound = propertyToLocate.object === currentProperty.object
            && propertyToLocate.name === currentProperty.name;
        if (matchFound) propertyIndex = index;
        return matchFound;
    });
    return propertyIndex;

}