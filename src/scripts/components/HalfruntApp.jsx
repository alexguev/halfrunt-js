/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

require("bootstrap/less/bootstrap.less");
require('../../styles/main.less');

var qajax = require('qajax');

var StoryBoard = require('./StoryBoard.jsx');

var HalfruntApp = React.createClass({

  render: function() {
    return (
      <this.props.activeRouteHandler />
    );
  }
});

var HalfruntAppRoutes = (
  <Routes>
    <Route path="/" handler={HalfruntApp}>
      <Route name="story" path="story/:jiraId" handler={StoryBoard}/>
      <DefaultRoute handler={StoryBoard} />
    </Route>
  </Routes>
);

React.renderComponent(HalfruntAppRoutes, document.getElementById('content')); // jshint ignore:line

//module.exports = HalfruntAppRoutes;
