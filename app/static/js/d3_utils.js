d3.visElementOfType = function(visId, type) {
    return d3.select("#" + elementIdFromVisId(visId) + type);
};