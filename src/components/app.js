/*eslint-disable react/jsx-sort-prop-types*/

"use strict";

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          <div className="container-fluid">
            <RouteHandler/>
          </div>
      </div>
    );
  }
}

module.exports = App;
