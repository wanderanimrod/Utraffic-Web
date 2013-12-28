var session = new Session();

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
        var visualisation = session.activeVisualisation;
        if(!session.hasActiveVisualisation()) {
            showErrorMessage("No active visualisation to add property series to.");
            return;
        }
        if($(this).hasClass('objectPropertyTracked')) {
            $(this).removeClass('objectPropertyTracked teal');
        }
        else {
            $(this).addClass('objectPropertyTracked teal');
            visualisation.addSeries().then(function(series) {
                addSeriesToVisualisation(visualisation, series);
            }, function(error) {
                showErrorMessage(Error(error));
            });
        }
    });
}

function toggleObjectPropertyButtons() {
    showUntrackedObjectPropertiesOnHover();
    enableTrackingOfObjectProperties();
}

$('.showsOnlyOnVis').css('display', 'none');
$('.visPaneControls').css('padding', '.25em .5em');

function relativesOfType(type, referenceElement) {
    return $("#" + referenceElement.attr('id') + type);
}

function visElementsOfType(visId, type) {
    return $("#" + visId + type);
}

function activateAddVisSigns() {
    $('.addVisSign').click(function() {
        $(this).css('display', 'none');
        relativesOfType(".vis.front", $(this)).css('background-image', 'url("/static/images/grey.png")');
        relativesOfType(".showsOnlyOnVis", $(this)).css('display', '');
    })
}

function activateRemoveVisIcons() {
    $('.removeVis').click(function() {
        relativesOfType(".showsOnlyOnVis", $(this)).css('display', 'none');
        relativesOfType(".vis.front", $(this)).css('background-image', '');
        relativesOfType('.addVisSign', $(this)).css('display', '');
    })
}

function activateVisDataIcons() {
    $('.visData').click(function() {
        relativesOfType('.vis.front', $(this)).css('z-index', -1);
        relativesOfType('.vis.back', $(this)).css('z-index', 1);
    })
}

function activateBackToVisIcons() {
    $('.backToVis').click(function() {
        relativesOfType('.vis.back', $(this)).css('z-index', -1);
        relativesOfType('.vis.front', $(this)).css('z-index', 1);
    })
}

function addSeriesToVisualisation(visualisation, series) {
    var visKeyElement = visElementsOfType(visualisation.id, '.ui.bottom.attached.label');
    insertVisKeyItem(series, visKeyElement);
}

function activateAddSeriesIcons() {
    $('.addSeries').click(function() {
        var visualisation = session.getVisualisation($(this).attr('id'));
        if(visualisation.state === visualisationState.IDLE)
            startAddingSeries(visualisation, $(this));
        else if(visualisation.state === visualisationState.ADDING_SERIES)
            finishAddingSeries(visualisation, $(this));
    });
}

function startAddingSeries(visualisation, addSeriesElement) {
    visualisation.activate();
    visualisation.state = visualisationState.ADDING_SERIES;
    addSeriesElement.closest('.ui.bottom.attached.label').css('background-color', 'lightyellow');
    addSeriesElement.children('.plus.icon')
        .removeClass('plus')
        .addClass('large checkmark')
        .css('color', 'darkgreen');
}

function finishAddingSeries(visualisation, addSeriesUiElement) {
    addSeriesUiElement.closest('.ui.bottom.attached.label').css('background-color', '');
    addSeriesUiElement.children('.checkmark.icon')
        .removeClass('large checkmark')
        .addClass('plus')
        .css('color', '');
    visualisation.state = visualisationState.IDLE;
}

function createVisualisationObjectsForUiElements() {
    var visualisation = null;
    $('.vis').each(function() {
        if($(this).hasClass('front')) {
            visualisation = session.addNewVisualisation();
        }
        $(this).attr('id', visualisation.id);
    });
}

function copyVisIdsToAllDescendants() {
    $('.vis').each(function() {
        propagateVisIdToAllDescendants($(this));
    })
}

function propagateVisIdToAllDescendants(object) {
    var objectId = object.attr('id');
    object.children().each(function() {
        $(this).attr('id', objectId);
        propagateVisIdToAllDescendants($(this));
    });
}

function activateClickables() {
    activateAddVisSigns();
    activateRemoveVisIcons();
    activateVisDataIcons();
    activateBackToVisIcons();
    activateAddSeriesIcons();
}

$(document).ready(function() {
    prepareGraphCanvas();
    createVisualisationObjectsForUiElements();
    copyVisIdsToAllDescendants();
    activateClickables();
    toggleObjectPropertyButtons();
});