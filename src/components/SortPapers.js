import React from "react";

const SortPapers = ({ sortPapers }) => {
  return (
    <div className="paper-sort-btn-collection">
      <button
        className="paper-sort-btn"
        value="Rating"
        onClick={e => sortPapers(e.target.value)}
      >
        <span>🔥</span>Rating
      </button>
      <button
        className="paper-sort-btn"
        value="Debated"
        onClick={e => sortPapers(e.target.value)}
      >
        <span>🧨</span>Debated
      </button>
      <button
        className="paper-sort-btn"
        value="Latest"
        onClick={e => sortPapers(e.target.value)}
      >
        <span>⏱</span>Latest
      </button>
    </div>
  );
};

export default SortPapers;
