"use strict";

var React = require('react');

class About extends React.Component {
  render() {
    return (
      <div>
          <h1> About</h1>
          <p>We use the following technologies </p>
          <ul>
            <li> React </li>
            <li> React router</li>
            <li> flux </li>
            <li> Gulp </li>
          </ul>        
      </div>
    );
  }
}

module.exports = About;
