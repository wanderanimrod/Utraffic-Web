$('.showsOnlyOnVis').css('display', 'none');
$('.visPaneControls').css('padding', '.25em .5em');

function visElementsOfType(visId, type) {
    return $("#" + elementIdFromVisId(visId) + type);
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

function createVisualisationObjectsForUiElements() {
    var visualisation = null;
    $('.vis').each(function() {
        if($(this).hasClass('front')) {
            visualisation = session.addNewVisualisation();
        }
        $(this).attr('id', elementIdFromVisId(visualisation.id));
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