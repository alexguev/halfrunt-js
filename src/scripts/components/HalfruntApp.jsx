/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

require("bootstrap/less/bootstrap.less");
require('../../styles/main.less');

var qajax = require('qajax');

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({

  render: function() {
    return (
      <StoryBoard/>
    );
  }
});

React.renderComponent(<HalfruntApp/>, document.getElementById('content')); // jshint ignore:line

module.exports = HalfruntApp;
