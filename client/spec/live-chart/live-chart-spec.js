describe("Live Chart Component", function() {
    var vm, instantiatedVm = {}, Visualisation;
    beforeEach(function() {
        vm = require('../../components/live-chart/live-chart.js');
        vm.created.call(instantiatedVm);
    });
    it('should attach a fresh visualisation to itself on create', function() {
        Visualisation = require('../../models/visualisation.js');
        expect(instantiatedVm.visualisation).toEqual(new Visualisation());
    });

    describe("when 'tracked-status-changed' event is fired, ", function() {
        var ObjectProperty, objectProperty;

        beforeEach(function() {
            ObjectProperty = require('../../models/object-property.js');
            objectProperty = new ObjectProperty('vel', 10);
            instantiatedVm.highChart = {
                addSeries: function(options) {
                    this.series.push({name: options.name})
                },
                series: []
            }
        });

        it('should toggle object property tracked status in visualisation', function() {
            vm.events['tracked-status-changed'].call(instantiatedVm, objectProperty);
            expect(instantiatedVm.visualisation.trackedProperties).toEqual([objectProperty])
        });

        it('should add series to chart if the property tracked status is ON', function() {
            spyOn(instantiatedVm.visualisation, 'togglePropertyTrackedStatus')
                .and.returnValue(Visualisation.PROPERTY_TRACKED_STATUS.ON);

            vm.events['tracked-status-changed'].call(instantiatedVm, objectProperty);

            expect(instantiatedVm.highChart.series).toEqual([
                {name: objectProperty.stringify(), objectProperty: objectProperty}
            ])
        });

        it('should remove series from chart if the property tracked status is OFF', function() {
            var series = {
                name: objectProperty.stringify(),
                remove: function() {
                }
            };
            instantiatedVm.highChart.series = [series];

            spyOn(instantiatedVm.visualisation, 'togglePropertyTrackedStatus')
                .and.returnValue(Visualisation.PROPERTY_TRACKED_STATUS.OFF);
            var removeSeriesSpy = spyOn(series, 'remove');

            vm.events['tracked-status-changed'].call(instantiatedVm, objectProperty);

            expect(removeSeriesSpy).toHaveBeenCalled();
        });

    })
});
