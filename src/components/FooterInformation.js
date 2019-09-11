import React from "react";
import { NavLink } from "react-router-dom";
const FooterInformation = () => {
  return (
    <div className="column-bar">
      <div className="column-container">
        <div className="c1">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/about">
            <span>About</span>
          </NavLink>
        </div>
        <div className="c2">
          <a href="#">
            <span>Contact</span>
          </a>
          <a href="#">
            <span>Submissions</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
