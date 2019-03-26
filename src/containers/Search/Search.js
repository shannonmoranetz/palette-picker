import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form className="search-form">
          <label htmlFor="search" className="search-label">Search projects by hexcode:</label><br/>
          <input type="text" name="search" className="search-input"></input>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
