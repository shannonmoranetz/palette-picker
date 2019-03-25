import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form className="search-form">
          <label htmlFor="search" className="search-label">Search by hexcode, palette, or project:</label>
          <input type="text" name="search" className="search-input"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
