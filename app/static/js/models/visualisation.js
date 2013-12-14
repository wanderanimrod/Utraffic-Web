function Visualisation(id) {
    this.id = id;
    this.state = visualisationState.IDLE;
    this.activate = function() {
        activeVisualisation = this;
    }
}

var visualisationState = {
    ADDING_SERIES: 0,
    IDLE: 1
};