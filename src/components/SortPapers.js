import React from "react";

const SortPapers = ({ sortPapers }) => {
  return (
    <div className="paper-sort-btn-collection sort-papers">
      <select onChange={e => sortPapers(e.target.value)}>
        <option value="" disabled selected>
          &#8597; Sort by
        </option>
        <option value="Rating">🔥Rating</option>
        <option value="Debated">🧨Debated</option>
        <option value="Latest">⏱Latest</option>
      </select>
    </div>
  );
};

export default SortPapers;
