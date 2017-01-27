$ = jQuery = require('jquery');
var ReactDOM = require('react-dom');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');


class App extends React.Component {
  render() {
    var Child;

    switch(this.props.route) {
      case 'about': Child = About; break;
      default: Child = Home;
    }
    return (
      <div>
          <Header/>
          <Child/>
      </div>
    );
  }
}

function render() {
  var route = window.location.hash.substr(1);
  console.log('route ' + route);
  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
console.log('line 30');
render();

ReactDOM.render(<App />, document.getElementById('app'));
