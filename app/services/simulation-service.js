module.exports = {
    fetchSimObjects: function() {
        var objects = [{id: 0}, {id: 1}];

        return objects.map(function(object) {
            object.properties = [{name: 'vel'}, {name: 'acc'}, {name: 'pos'}, {name: 'lane'}];
            return object;
        });
    }
};

