var session;

function prepareGraphCanvas() {
    var graphCanvas = $("#graphingArea");
    var visRows = $('.visRow');
    visRows.css('height', graphCanvas.height() / 2);
    var visPanes = $('.visPane');
    visPanes.css('height', visRows.height() - 27);
}

function relativesOfType(type, referenceElement) {
    return $("#" + referenceElement.attr('id') + type);
}

function activateClickables() {
    activateAddVisSigns();
    activateRemoveVisIcons();
    activateVisDataIcons();
    activateBackToVisIcons();
    activateAddSeriesIcons();
}

$(document).ready(function() {
    session = new Session();
    prepareGraphCanvas();
    createVisualisationObjectsForUiElements();
    copyVisIdsToAllDescendants();
    activateClickables();
    toggleObjectPropertyButtons();
});