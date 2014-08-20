/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

var qajax = require('qajax');

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({
  getInitialState: function() {
    return {stories: []};
  },

  componentDidMount: function() {
    var that = this;
    qajax('/data/stories.json').then(qajax.toJSON).then(function(response) {
      if (that.isMounted()) {
        that.setState({stories: response});
      }
    });
  },

  render: function() {
    return (
        <StoryBoard stories={this.state.stories}>
        </StoryBoard>
    );
  }
});

React.renderComponent(<HalfruntApp />, document.getElementById('content')); // jshint ignore:line

module.exports = HalfruntApp;
