function drawGraphCanvas() {
    var graphCanvas = $("#graphingArea");
    var visRows = $('.visRow');
    visRows.css('height', graphCanvas.height() / 2);
    var visPanes = $('.visPane');
    visPanes.css('height', visRows.height() - 27);

    var visualisations = $('.vis');

    visualisations
        .css('height', 320)
        .css('background-color', 'teal')
        .css('opacity', 0.5);

    visualisations.hover(function() {
        $(this).animate({opacity: 1}, 'slow');
    });

    visualisations.mouseleave(function() {
        $(this).animate({opacity: 0.5}, '0.1s');
    });
}



function silenceControlBarItems() {
    $('.objectProperty').css('font-size', 7);
    $('.objectProperties').css('visibility', 'hidden');
    $('.simObject').hover(function() {
       $(this).children('.objectProperties').css('visibility', 'visible');
    });
    $('.simObject').mouseleave(function() {
       $(this).children('.objectProperties').css('visibility', 'hidden');
    });
}

drawGraphCanvas();
silenceControlBarItems();