import React, { Component } from "react";
import HomePaperHighlight from "../components/HomePaperHighlight";

class HomeContentContainer extends Component {
  render() {
    return (
      <div className="home-content-container">
        <h1>Home Page Info ...</h1>
        <br />
        <HomePaperHighlight allPapers={this.props.allPapers}/>
      </div>
    );
  }
}

export default HomeContentContainer;
