function toggleObjectPropertyButtons() {
    showUntrackedObjectPropertiesOnHover();
    enableTrackingOfObjectProperties();
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
            var button = $(this);
            trackObjectProperty().then(function() {
                button.addClass('objectPropertyTracked teal');
            });
        }
    });
}

function trackObjectProperty() {
    return new RSVP.Promise(function(resolve, reject) {
        addSeriesToActiveVisualisation()
            .then(function() {
                resolve();
            }, function(error) {
                throw error;
            });
    });
}