import React from "react";
import ScrollPrompt from "./ScrollPrompt";
import HomeSplashContent from "./HomeSplashContent";

const HomeSplash = ({ setPosition }) => {
  return (
    <div className="home-splash">
      <div className="home-splash-image"></div>
      <div className="home-splash-overlay">
        <HomeSplashContent />
      </div>
      <ScrollPrompt />
      <span id="content-top"></span>
    </div>
  );
};

export default HomeSplash;
