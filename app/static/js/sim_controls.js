function enableStartButton() {
    var startPauseButton = $('#playPause');
    startPauseButton.click(function() {
        window.simulation.start();
    });
}

enableStartButton();



