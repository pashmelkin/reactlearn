"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var { Router, Route, DefaultRoute, hashHistory } = require('react-router');
var Home = require('./components/homePage.js');

ReactDOM.render((
  <Router history = {hashHistory}>
       <Route name ="app" path="/" component={Home} >
      </Route>
  </Router>
    ),
document.getElementById('app')) ;
