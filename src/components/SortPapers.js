import React from "react";

const SortPapers = ({ sortPapers }) => {
  return (
    <select onChange={e => sortPapers(e.target.value)}>
      {/* <option value="Ascending">title ascending</option>
      <option value="Descending">title descending</option> */}
      <option value="Rating">rating</option>
      <option value="Debated">debated</option>
      <option value="Latest">latest</option>
    </select>
  );
};

export default SortPapers;
