import React from "react";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <div className="social-icon-container">
        <div className="social-icon">
          <a
            href="https://twitter.com/lawrenceyolland"
            class="fa fa-twitter fa-2x"
          ></a>
        </div>
        <div className="social-icon">
          <a
            href="https://github.com/lawrenceyolland"
            class="fa fa-github fa-2x"
          ></a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/lawrenceyolland/"
            class="fa fa-linkedin fa-2x"
          ></a>
        </div>
        <div className="social-icon">
          <a
            href="mailto:lawrence@sciencedisrupt.com"
            class="fa fa-envelope fa-2x"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default SocialBar
