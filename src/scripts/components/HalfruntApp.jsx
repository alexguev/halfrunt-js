/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({
  getInitialState: function() {
    return {stories: [{jiraId: 'KCA-1101AA',
                       title: 'Pay by credit card',
                       bugs: [{p1: 0, p2: 1, p3: 5}],
                       sonar: {blocker: 0, critial: 0, major: 5, minor: 5, info: 10},
                       code: {linesAdded: 100, linesRemoved: 20}},
                      {jiraId: 'KCA-1104',
                       title: 'Pay by credit card',
                       bugs: [{p1: 0, p2: 1, p3: 5}],
                       sonar: {blocker: 0, critial: 0, major: 5, minor: 5, info: 10},
                       code: {linesAdded: 100, linesRemoved: 20}},
                      {jiraId: 'KCA-110422112211',
                       title: 'Pay by credit card',
                       bugs: [{p1: 0, p2: 1, p3: 5}],
                       sonar: {blocker: 0, critial: 0, major: 5, minor: 5, info: 10},
                       code: {linesAdded: 100, linesRemoved: 20}},
                      {jiraId: 'KCA-11022',
                       title: 'Pay by credit card',
                       bugs: [{p1: 0, p2: 1, p3: 5}],
                       sonar: {blocker: 0, critial: 0, major: 5, minor: 5, info: 10},
                       code: {linesAdded: 100, linesRemoved: 20}},
                      {jiraId: 'KCA-1105',
                       title: 'Pay by credit card',
                       bugs: [{p1: 0, p2: 1, p3: 5}],
                       sonar: {blocker: 0, critial: 0, major: 5, minor: 5, info: 10},
                       code: {linesAdded: 100, linesRemoved: 20}},]};
  },

//   componentDidMount: function() {
//     $.get('/data/stories.json', function(stories) {
//       if (this.isMounted()) {
//         alert(stories);
//         this.setState(stories);
//       }
//     }.bind(this));
//   },

  render: function() {
    return (
        <StoryBoard stories={this.state.stories}>
        </StoryBoard>
    );
  }
});

React.renderComponent(<HalfruntApp />, document.getElementById('content')); // jshint ignore:line

module.exports = HalfruntApp;
