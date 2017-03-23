"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var { Router, Route, DefaultRoute, hashHistory } = require('react-router');
var routes = require('./routes');

ReactDOM.render((
  <Router history = {hashHistory}>
      <Route name ="app" path="/" component={require('./components/app')}>
          <Route name="authors" path="/authors" component={require('./components/authors/authorPage')} />
          <Route name="about" path= "/about" component={require('./components/about/aboutPage')} />
      </Route>
  </Router>),document.getElementById('app')) ;
