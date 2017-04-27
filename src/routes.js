$ = jQuery = require('jquery');
var React = require('react');

var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var App = require('./components/app');


var { Router, Route, IndexRoute, hashHistory } = require('react-router');


var routes = (
    <Router history = {hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route name="authors" path="authors" component={Authors} />
            <Route name="about" path= "about" component={About} />
        </Route>
    </Router>);

module.exports = routes;


