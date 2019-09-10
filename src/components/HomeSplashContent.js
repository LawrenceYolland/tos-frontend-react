import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class HomeSplashContent extends Component {
  render() {
    return (
      <div className="hpc-container ">
        <div className="hpc-h1-container">
          <h1 className="hpc-h1">
            <span className="hpc-span">
              democratising science through open peer review
            </span>
          </h1>
        </div>
        <Button color="purple" fluid> Find out more</Button>
      </div>
    );
  }
}

export default HomeSplashContent;
