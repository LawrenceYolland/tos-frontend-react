import React, { Component } from "react";
import HeadingBorder from "./HeadingBorder";

class HomePaperHighlight extends Component {
  render() {
    return (
      <div className="home-paper-highlight-container">
        <HeadingBorder title={"latest posts"} />

        <HeadingBorder title={"hot in xyz"} />
      </div>
    );
  }
}

export default HomePaperHighlight;
