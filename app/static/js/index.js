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

function activateAddVisSigns() {
    $('.addVisSign').click(function() {
        $(this).closest('.visPlaceholder').css('z-index', -2);
    })
}

function assignVisIds() {
    $('.vis').each(function () {
        var visId = getNextVisId();
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
    objectId = object.attr('id');
    object.children().each(function() {
        $(this).attr('id', objectId);
        propagateVisIdToAllDescendants($(this));
    })
}

function assignObjectIds() {
    assignVisIds();
    copyVisIdsToAllDescendants();
}

prepareGraphCanvas();
assignObjectIds();
activateAddVisSigns();
toggleObjectPropertyButtons();