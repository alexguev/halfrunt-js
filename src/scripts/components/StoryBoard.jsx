/**
 * @jsx React.DOM
 */

'use strict';

var _ = require("underscore/underscore.js");

var React = require('react');

var qajax = require('qajax');

var Bugs = React.createClass({

  render: function() {
    return (
      <div className="bugs">
        <div>P1: {this.props.p1.open}/{this.props.p1.total}</div>
        <div>P2: {this.props.p2.open}/{this.props.p2.total}</div>
        <div>P3: {this.props.p3.open}/{this.props.p3.total}</div>
      </div>
    );
  }
});

var Sonar = React.createClass({

  render: function() {
    return (
      <div className="sonar">
        <div>Blocker: {this.props.blocker.open}/{this.props.blocker.total}</div>
        <div>Critial: {this.props.critical.open}/{this.props.critical.total}</div>
        <div>Major: {this.props.major.open}/{this.props.major.total}</div>
      </div>
    );
  }
});

var Code = React.createClass({

  render: function() {
    return (
      <div className="code">
      <div>Size: {this.props.storySize}</div>
      <div>Lines: {this.props.linesAdded}/{this.props.linesDeleted}</div>
      <div>Ratio: 0.1</div>
      </div>
    );
  }
});


var Story = React.createClass({

  render: function() {
    return (
      <div className="story">
        <div className="story-id">{this.props.jiraId}</div>
        <div className="story-title">{this.props.title}</div>
        <div className="story-body">
          <Bugs p1={this.props.bugs.p1} p2={this.props.bugs.p2} p3={this.props.bugs.p3}/>
          <Sonar blocker={this.props.sonar.blocker} critical={this.props.sonar.critical} major={this.props.sonar.major}/>
          <Code storySize={this.props.size} linesAdded={this.props.code.linesAdded} linesDeleted={this.props.code.linesDeleted}/>
        </div>
      </div>
    );
  }
});


var StoryBoard = React.createClass({

  getInitialState: function() {
    return {stories: []};
  },

  render: function() {
    var that = this;
    return (
        <div>
          {_.map(this.state.stories, function (story) {
            return (
              <Story key={story.jiraId} jiraId={story.jiraId} title={story.title} size={story.size} bugs={story.bugs} sonar={story.sonar} code={story.code}/>
            );
          })}
          <div className="new-story" onClick={this.onNewStory}>+</div>
        </div>
    );
  },

  onNewStory: function() {
    this.addNewStory();
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

  componentDidMount: function() {
    var that = this;

    qajax('/data/stories.json').then(qajax.toJSON).then(function(response) {
      if (that.isMounted()) {
        that.setState({stories: response});
      }
    });
  },


});

module.exports = StoryBoard;
