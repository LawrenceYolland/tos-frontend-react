import React from "react";

const SortPapers = ({ sortPapers }) => {
  return (
    <div className="paper-sort-btn-collection sort-papers">
      <button
        className="paper-sort-btn"
        value="Rating"
        onClick={e => sortPapers(e.target.value)}
      >
        <span role="img" aria-label="Rating">🔥</span>Rating
      </button>
      <button
        className="paper-sort-btn"
        value="Debated"
        onClick={e => sortPapers(e.target.value)}
      >
        <span role="img" aria-label="Debated">🧨</span>Debated
      </button>
      <button
        className="paper-sort-btn"
        value="Latest"
        onClick={e => sortPapers(e.target.value)}
      >
        <span role="img" aria-label="Latest">⏱</span>Latest
      </button>
    </div>
  );
};

export default SortPapers;
