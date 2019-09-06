import React, { Component } from "react";
import HomeContentContainer from "../containers/HomeContentContainer";
import HomeSplash from "../components/HomeSplash";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <HomeSplash />
        <HomeContentContainer allPapers={this.props.allPapers} />
      </div>
    );
  }
}
export default Home;
