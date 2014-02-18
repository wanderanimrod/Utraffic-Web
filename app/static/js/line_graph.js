function drawLineGraphAxes(visId) {
    var canvas = d3.visElementOfType(visId, '.visCanvas')
        .append('svg:svg');
    var yAxis = canvas.append("svg:line")
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 40)
        .attr('y2', 40)
        .style('stroke', 'rgb(6,120,155)');


    console.log('**************', canvas, '**************');
}