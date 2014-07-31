/**
 * @jsx React.DOM
 */

'use strict';

var _ = require("underscore/underscore.js");

var React = require('react');

var ReactBoostrap = require('react-bootstrap'),
    Panel = ReactBoostrap.Panel,
    Grid = ReactBoostrap.Grid,
    Row = ReactBoostrap.Row,
    Col = ReactBoostrap.Col;

require("bootstrap/less/bootstrap.less");

var Story = React.createClass({

  render: function() {
    return (
      <Panel header={this.props.jiraId} bsStyle="primary">
        <Row>
          <Col md={12}>{this.props.title}</Col>
          <Col md={4}>Bugs</Col>
          <Col md={4}>Sonar</Col>
          <Col md={4}>Code</Col>
        </Row>
      </Panel>
    );
  }
});


var StoryBoard = React.createClass({

  render: function() {
    var storyNodes = _.map(this.props.stories, function (story) {
      return (
        <Story jiraId={story.jiraId} title={story.title} bugs={story.bugs} sonar={story.sonar} code={story.code}/>
      );
    });

    var groups = _.reduce(storyNodes, function (result, story) {
      if (_.last(result).length < 3) {
        _.last(result).push(story)
      } else {
        result.push([story]);
      }
      return result;
    }, [[]]);

    return (
        <Grid>
          {_.map(groups, function (group) {
            return (
                <Row>
                  {_.map(group, function (story) {
                    return (
                      <Col key={story.jiraId} md={4}>
                        {story}
                      </Col>
                    );
                  })}
                </Row>
            );
          })}
        </Grid>
    );
  }
});

module.exports = StoryBoard;
