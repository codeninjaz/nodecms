'use strict';

describe('NodecmsApp', function() {
    var React = require('react/addons');
    var NodecmsApp, component;

    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'content';
        document.body.appendChild(container);

        NodecmsApp = require('components/NodecmsApp.js');
        component = React.createElement(NodecmsApp);
    });

    it('should create a new instance of NodecmsApp', function() {
        expect(component).toBeDefined();
    });
});
