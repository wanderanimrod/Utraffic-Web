function prepareGraphCanvas() {
    var graphCanvas = $("#graphingArea");
    var visRows = $('.visRow');
    visRows.css('height', graphCanvas.height() / 2);
    var visPanes = $('.visPane');
    visPanes.css('height', visRows.height() - 27);
}

function toggleObjectPropertyButtons() {
    var simObjects = $('.simObject');
    simObjects.hover(function () {
        $(this).children('.objectProperty').css('visibility', 'visible');
    });
    simObjects.mouseleave(function () {
        $(this).children('.objectProperty').each(function () {
            if (!$(this).hasClass('objectPropertyTracked')) {
                $(this).css('visibility', 'hidden');
            }
        });
    });

    var objectProperties = $('.objectProperty');
    objectProperties.css('font-size', 7);
    objectProperties.click(function () {
        if ($(this).hasClass('objectPropertyTracked')) {
            $(this).removeClass('objectPropertyTracked teal');
        }
        else {
            $(this).addClass('objectPropertyTracked teal');
        }
    });
}

$('.showsOnlyOnVis').css('display', 'none');
$('.visPaneControls').css('padding', '.25em .5em');

function relativesOfType(type, referenceElement) {
    return $("#" + referenceElement.attr('id') + type);
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

function assignVisIds() {
    $('.vis').each(function () {
        var visId;
        if($(this).hasClass('front'))
            visId = getNextVisId();
        else if($(this).hasClass('back'))
            visId = getMaxVisId();
        $(this).attr('id', visId);
        visualisations.push(new Visualisation(visId));
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
    })
}

function assignObjectIds() {
    assignVisIds();
    copyVisIdsToAllDescendants();
}

function activateClickables() {
    activateAddVisSigns();
    activateRemoveVisIcons();
    activateVisDataIcons();
    activateBackToVisIcons();
}

prepareGraphCanvas();
assignObjectIds();
activateClickables();
toggleObjectPropertyButtons();