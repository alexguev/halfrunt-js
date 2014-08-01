/**
 * @jsx React.DOM
 */

'use strict';

var _ = require("underscore/underscore.js");

var React = require('react');

var Story = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.jiraId}ZZZ

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
              <Story key={story.jiraId} jiraId={story.jiraId} title={story.title} bugs={story.bugs} sonar={story.sonar} code={story.code}/>
            );
          })}
        </div>
    );
  }
});

module.exports = StoryBoard;
