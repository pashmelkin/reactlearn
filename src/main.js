"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

ReactDOM.render(
  <Router>{routes}</Router>, document.getElementById('app')) ;
