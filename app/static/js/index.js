var session;

function prepareGraphCanvas() {
    var graphCanvas = $("#graphingArea");
    var visRows = $('.visRow');
    visRows.css('height', graphCanvas.height() / 2);
    var visPanes = $('.visPane');
    visPanes.css('height', visRows.height() - 27);
}

function showUntrackedObjectPropertiesOnHover() {
    var simObjects = $('.simObject');
    simObjects.hover(function() {
        $(this).children('.objectProperty').css('visibility', 'visible');
    });
    simObjects.mouseleave(function() {
        $(this).children('.objectProperty').each(function() {
            if(!$(this).hasClass('objectPropertyTracked')) {
                $(this).css('visibility', 'hidden');
            }
        });
    });
}

function enableTrackingOfObjectProperties() {
    var objectProperties = $('.objectProperty');
    objectProperties.css('font-size', 7);
    objectProperties.click(function() {
        if(!session.hasActiveVisualisation()) {
            showErrorMessage("No active visualisation to add property series to.");
            return;
        }
        if($(this).hasClass('objectPropertyTracked')) {
            $(this).removeClass('objectPropertyTracked teal');
        }
        else {
            trackObjectProperty().then(function(){
                    $(this).addClass('objectPropertyTracked teal');
                });
        }
    });
}

function toggleObjectPropertyButtons() {
    showUntrackedObjectPropertiesOnHover();
    enableTrackingOfObjectProperties();
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