$ = jQuery = require('jquery');
var ReactDOM = require('react-dom');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

var { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');


class App extends React.Component {
  render() {

    return (
      <div>
          <Header/>
          {this.props.children}
      </div>
    );
  }
}


ReactDOM.render((
    <Router history = {hashHistory}>
        <Route path="/" component={App} >
        <IndexRoute component={Home} />
         <Route name="authors" path="authors" component={require('./components/authors/authorPage')} />
         <Route name="about" path= "about" component={require('./components/about/aboutPage')} />
        </Route>
    </Router>),document.getElementById('app')) ;
