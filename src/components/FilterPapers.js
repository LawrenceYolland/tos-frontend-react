import React from "react";

const FilterPapers = ({ setFilterType }) => {
  return (
    <div className="paper-sort-btn-collection filter-papers">
      <a className="paper-filter-btn">
        <span onClick={() => setFilterType(1)}>day</span>
      </a>
      <a className="paper-filter-btn">
        <span onClick={() => setFilterType(2)}>week</span>
      </a>
    </div>
  );
};

export default FilterPapers;
