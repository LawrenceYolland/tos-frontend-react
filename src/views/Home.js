import React, { Component } from "react";
import HomeContentContainer from "../containers/HomeContentContainer";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="home-container">
        <div className="home-splash">
          <h1>Welcome to T.O.S</h1>
        </div>
        <HomeContentContainer allPapers={this.props.allPapers} />
      </div>
    );
  }
}
export default Home;
