function showErrorMessage(message) {
    var messageHtml = '<div class="ui small error message"><i class="close icon closeMessage"></i>'+ message + '</div>'
    $('body').prepend(messageHtml);
    activateCloseMessageIcon();
}

function activateCloseMessageIcon() {
    $('.closeMessage').click(function() {
        $(this).parent().remove();
    })
}

function insertVisKeyItem(series, visKeyElement) {
    visKeyElement.append('<div style="display: inline; padding-right: 20px">' +
            '<div class="ui circular label" ' +
                'style="margin-right: 5px; background-color:'
                + series.colour + '">' +
            '</div>' + series.id
        + '</div>');
}