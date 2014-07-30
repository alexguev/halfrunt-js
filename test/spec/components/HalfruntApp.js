'use strict';

describe('Main', function () {
  var HalfruntApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    HalfruntApp = require('../../../src/scripts/components/HalfruntApp.jsx');
    component = HalfruntApp();
  });

  it('should create a new instance of HalfruntApp', function () {
    expect(component).toBeDefined();
  });
});
