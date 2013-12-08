function prepareGraphCanvas() {
    var graphCanvas = $("#graphingArea");
    var visRows = $('.visRow');
    visRows.css('height', graphCanvas.height() / 2);
    var visPanes = $('.visPane');
    visPanes.css('height', visRows.height() - 27);

    fadeVisPanes();
}

function fadeVisPanes() {
    var panes = $('.vis');
    panes.hover(function () {
        $(this).animate({opacity: 1}, 'slow');
    });
    panes.mouseleave(function () {
        $(this).animate({opacity: 0.5}, '0.1s');
    });
}

function silenceControlBarItems() {
    $('.objectProperty').css('font-size', 7);
    $('.objectProperties').css('visibility', 'hidden');
    $('.simObject').hover(function () {
        $(this).children('.objectProperties').css('visibility', 'visible');
    });
    $('.simObject').mouseleave(function () {
        $(this).children('.objectProperties').css('visibility', 'hidden');
    });
}

prepareGraphCanvas();
silenceControlBarItems();