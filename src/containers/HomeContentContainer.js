import React, { Component } from "react";
import HomePaperHighlight from "../components/HomePaperHighlight";

class HomeContentContainer extends Component {
  render() {
    return (
      <div className="home-content-container">
        <HomePaperHighlight allPapers={this.props.allPapers}/>
      </div>
    );
  }
}

export default HomeContentContainer;
