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