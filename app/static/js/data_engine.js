dataOut = $("#data");

var fetchData = function() {
    var requestUrl = "http://127.0.0.1:5000/series/";
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
            var dataJson = JSON.parse(request.responseText);
            plugDataIntoPage(dataJson);
        }
        else {
            console.log(request.responseText);
            dataJson = JSON.parse(request.responseText);
            plugDataIntoPage(dataJson)
        }
    };

    request.open("POST", requestUrl, true);
    request.send();
};

var plugDataIntoPage = function(dataJson) {
    dataOut.text(JSON.stringify(dataJson))
};

fetchData();