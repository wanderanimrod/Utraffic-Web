var visualisations = [];

function getNextVisId() {
    return getMaxVisId() + 1;
}

function getMaxVisId() {
    var maxId = -1;
    for(var i=0; i < visualisations.length; i++) {
        var currentId = visualisations[i].id;
        if(currentId > maxId) maxId = currentId;
    }
    return maxId;
}

function createSeries() {
    var request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:5000/series/?debug=true", true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 201) {
            var responseJson = JSON.parse(request.responseText);
            var series = new Series(responseJson);
            console.log(series);
            return series;
        }
    };
    request.send();
}

createSeries();