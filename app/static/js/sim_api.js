function createSeries() {
    return new RSVP.Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://127.0.0.1:5000/series/?debug=true", true);
        request.onload = function() {
            if(request.status === 201) {
                var responseJson = JSON.parse(request.responseText);
                var series = new Series(responseJson);
                resolve(series);
            }
            else {
                reject(Error(request.responseText));
            }
        };
        request.send();
    });
}