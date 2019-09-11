import React, { Component } from "react";
import HomeContentContainer from "../containers/HomeContentContainer";
import HomeSplash from "../components/HomeSplash";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
