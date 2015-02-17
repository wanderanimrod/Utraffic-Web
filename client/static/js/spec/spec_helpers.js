function createSeriesFake() {
    return new RSVP.Promise(function(resolve) {
        resolve(new Series({"id": 3}));
    });
}