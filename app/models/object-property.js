var ObjectProperty = function(propertyName, simObjectId) {
    this.name = propertyName;
    this.objectId = simObjectId;
};

ObjectProperty.prototype.stringify = function() {
    return this.name + " " + this.objectId;
};

module.exports = ObjectProperty;