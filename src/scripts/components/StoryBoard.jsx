/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var ReactBoostrap = require('react-bootstrap'),
    Alert = ReactBoostrap.Alert,
    Button = ReactBoostrap.Button;

var StoryBoard = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Button bsStyle="primary">Primary1</Button>
        <Button bsStyle="primary">Primary2</Button>
        <Alert bsStyle="success">
          <strong>Holy guacamoles!</strong> Best check yo self, you're not looking too good.
        </Alert>
      </div>
    );
  }
});

module.exports = StoryBoard;
