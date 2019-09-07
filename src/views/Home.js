import React, { Component } from "react";
import HomeContentContainer from "../containers/HomeContentContainer";
import HomeSplash from "../components/HomeSplash";

class Home extends Component {

// setPosition = () => window.scrollTo(200, 200);


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
