function createSeries() {
    return new RSVP.Promise(function(resolve, reject) {
        $.post('http://127.0.0.1:5000/series/?debug=true', function(response) {
            var series = new Series(response);
            resolve(series);
        });
    });
}

function getSeriesData(seriesId) {
    return new RSVP.Promise(function(resolve, reject) {
        $.get('http://127.0.0.1:5000/series/' + seriesId + '/data/', function(response) {
            resolve(response);
        });
    });

}