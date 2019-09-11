import React from "react";

const MenuSocialBar = () => {
  return (
    <div className="menu-social-bar">
      <div className="menu-social-icon-container">
        <div className="menu-social-icon">
          <a
            href="https://twitter.com/lawrenceyolland"
            className=" fa fa-twitter fa-2x"
          ></a>
        </div>
        <div className="menu-social-icon">
          <a
            href="https://github.com/lawrenceyolland"
            className="fa fa-github fa-2x"
          ></a>
        </div>
        <div className="menu-social-icon">
          <a
            href="https://www.linkedin.com/in/lawrenceyolland/"
            className="fa fa-linkedin fa-2x"
          ></a>
        </div>
        <div className="menu-social-icon">
          <a
            href="mailto:lawrence@sciencedisrupt.com"
            className="fa fa-envelope fa-2x"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default MenuSocialBar
