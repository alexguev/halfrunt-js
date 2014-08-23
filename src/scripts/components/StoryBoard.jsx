/**
 * @jsx React.DOM
 */

'use strict';

var _ = require("underscore/underscore.js");

var React = require('react');

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
        <div>Ratio: 0.384</div>
      </div>
    );
  }
});


var Story = React.createClass({

  render: function() {
    return (
      <div className="story">
        <div className="story-id"><p>{this.props.jiraId}</p></div>
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

  render: function() {
    return (
        <div>
          {_.map(this.props.stories, function (story) {
            return (
              <Story key={story.jiraId} jiraId={story.jiraId} title={story.title} size={story.size} bugs={story.bugs} sonar={story.sonar} code={story.code}/>
            );
          })}
          <div className="new-story" onClick={this.onNewStory}>+</div>
        </div>
    );
  },

  onNewStory: function() {
    this.props.onNewStory();
  }
});

module.exports = StoryBoard;
