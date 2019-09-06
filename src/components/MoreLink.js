import React from "react";
import { Link } from "react-router-dom";

const MoreLink = ({ path }) => {
  return (
    <div className="more-header-wrapper">
      <div className="more-header-title">
        <span className="more-header-inner">
          <Link to={path}>MORE...</Link>
        </span>
      </div>
    </div>
  );
};
export default MoreLink;
