function createSeries() {
    return new RSVP.Promise(function(resolve) {
        $.post(buildCreateSeriesPostUrl(), function(response) {
            var series = new Series(response);
            resolve(series);
        });
    });
}

function getSeriesData(seriesId) {
    return new RSVP.Promise(function(resolve) {
        $.get(buildGetDataRequestUrl(seriesId), function(response) {
            resolve(response);
        });
    });
}

var baseUrl = appSettings.clientSimEngineUrl + '/series/';

function buildGetDataRequestUrl(seriesId) {
    if(appSettings.debug() === false)
        return baseUrl + seriesId + '/data/';
    else
        return baseUrl + seriesId + '/data/?persist_data=true&dummy_series=true';
}

function buildCreateSeriesPostUrl() {
    if(appSettings.debug() === false)
        return baseUrl;
    else
        return baseUrl + '?debug=true';
}