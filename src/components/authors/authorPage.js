"use strict";

var React = require('react');
var AuthorAPi = require('../../api/authorApi');
var AuthorList = require('./authorsList');

class Authors extends React.Component {
  constructor(props) {
    super(props);
        this.authors = [];
  }
  componentWillMount() {
//    if(this.isMounted()) {
      console.log('componentWilllMount');
      this.setState({authors: AuthorAPi.getAllAuthors() });
//    }
  }
  componentDidMount() {
//    if(this.isMounted()) {
      console.log('componentDidMount');
    //  this.setState({authors: AuthorAPi.getAllAuthors() });
//    }
  }
  render() {
      return (
          <div>
            <h1>Authors</h1>
            <AuthorList authors = {this.state.authors} />
          </div>
      );
    }
}

module.exports = Authors;
