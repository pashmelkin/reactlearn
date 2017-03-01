/*eslint-disable react/jsx-sort-prop-types*/

"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var AuthorAPi = require('../../api/authorApi');
var AuthorList = require('./authorsList');

class AuthorPage extends React.Component {
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

AuthorPage.propTypes = {
  authors: React.PropTypes.array.isRequired
};

module.exports = AuthorPage;
