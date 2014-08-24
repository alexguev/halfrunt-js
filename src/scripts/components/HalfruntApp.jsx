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

    this.intervalId = setInterval(function(){
      qajax('/data/stories.json').then(qajax.toJSON).then(function(response) {
        if (that.isMounted()) {
          that.setState({stories: response});
        }
      });
    }, 5000);

  },

  componentWillUnmount: function () {
    clearInterval(this.intervalId);
  },

  addNewStory: function () {
    var stories = this.state.stories;
    stories.push(
      {"jiraId":"KCA-" + stories.length,"title":"New Story","size":1,
       "bugs":{"p1":{"open": 0, "total": 1},
               "p2":{"open": 1, "total": 2},
               "p3":{"open": 0, "total": 5}},
       "sonar":{"blocker":{"open": 1, "total": 1},
                "critical":{"open": 2, "total": 2},
                "major":{"open": 0, "total": 6},
                "minor":{"open": 0, "total": 2},
                "info":{"open": 0, "total": 4}},
       "code":{"linesAdded":200,"linesDeleted":20}}
    );
    this.setState({stories: stories});
  },

  render: function() {
    return (
      <StoryBoard stories={this.state.stories} onNewStory={this.addNewStory}>
      </StoryBoard>
    );
  }
});

React.renderComponent(<HalfruntApp />, document.getElementById('content')); // jshint ignore:line

module.exports = HalfruntApp;
