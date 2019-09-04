import React, { Component } from "react";

class SortPapers extends Component {
  render() {
    return (
      <select onChange={e => this.props.sortPapers(e.target.value)}>
        <option value="Ascending">ascending</option>
        <option value="Descending">descending</option>
        <option value="Rating">rating</option>
        <option value="Debated">debated</option>
      </select>
    );
  }
}

export default SortPapers;
