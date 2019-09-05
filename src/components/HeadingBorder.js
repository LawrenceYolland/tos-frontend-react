import React from "react";

const HeadingBorder = ({ title }) => {
  return (
    <div className="home-header-wrapper">
      <div className="home-header-title">
        <span className="home-header-inner">
          <h2>{title}</h2>
        </span>
      </div>
    </div>
  );
};
export default HeadingBorder;
