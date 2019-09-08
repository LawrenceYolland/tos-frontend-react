import React from "react";

const FilterPapers = ({ setFilterType }) => {
  return (
    <div className="paper-sort-btn-collection filter-papers">
      <button
        className="paper-sort-btn"
        onClick={()=>setFilterType(1)}
      >
       day
      </button>
      <button
        className="paper-sort-btn"
        onClick={()=>setFilterType(2)}
      >
        week
      </button>

      <button
        className="paper-sort-btn"
        onClick={()=>setFilterType(3)}
      >
        yesterday
      </button>

    </div>
  );
};

export default FilterPapers;
