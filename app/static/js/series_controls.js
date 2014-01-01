function addSeriesToActiveVisualisation() {
    return new RSVP.Promise(function(resolve, reject) {
        var visualisation = session.activeVisualisation;
        visualisation.addSeries().then(function(series) {
            addSeriesToVisKey(visualisation, series);
            resolve(visualisation);
        }, function(error) {
            reject(Error(error));
        });
    });
}

function addSeriesToVisKey(visualisation, series) {
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