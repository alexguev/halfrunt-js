/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

//var rest = require('rest/client/xhr.js');

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({
  getInitialState: function() {
    return {stories: [{jiraId: 'asdas'}]};
  },

  componentDidMount: function() {
//     var that = this;
//     rest('/data/stories.json').then(function(response) {
//       if (that.isMounted()) {
//         that.setState({stories: JSON.parse(response.entity)});
//       }
//     });
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
