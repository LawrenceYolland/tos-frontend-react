import React from "react";

const FilterPapers = ({ setFilterType }) => {
  return (
    <div className="paper-sort-btn-collection filter-papers">
      <a className="paper-sort-btn">
        <button onClick={() => setFilterType(1)}>day</button>
      </a>
      <a className="paper-sort-btn">
        <button onClick={() => setFilterType(2)}>week</button>
      </a>
      <a className="paper-sort-btn">
        <button onClick={() => setFilterType(3)}>yesterday</button>
      </a>
    </div>
  );
};

export default FilterPapers;
