/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

require("bootstrap/less/bootstrap.less");

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({
  render: function() {
    return (
        <StoryBoard>
        </StoryBoard>
    );
  }
});

React.renderComponent(<HalfruntApp />, document.getElementById('content')); // jshint ignore:line

module.exports = HalfruntApp;
