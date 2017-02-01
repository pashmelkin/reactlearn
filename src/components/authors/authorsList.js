"use strict";

var React = require('react');
var ReactDom = require('react-dom');

class AuthorList extends React.Component {

  render() {
    console.log('AuthorList : render');
    function createAuthorRow(author) {
      return(
        <tr key={author.id}>
          <td><a href={"/#authors" +  author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    }

      return (
          <div>
          <table className="table">
            <tbody>
              <tr>
                <th> ID</th>
                <th> Name</th>
              </tr>
                {this.props.authors.map(createAuthorRow, this)}
            </tbody>
          </table>
          </div>
      );
    }
}

module.exports = AuthorList;
