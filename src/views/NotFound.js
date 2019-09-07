import React, { Component } from "react";
import NoContentAvailable from "../containers/NoContentAvailble";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1> NOT FOUND <span role="img" aria-label="page not found">🕵️‍</span></h1>
        <NoContentAvailable />
      </div>
    );
  }
}
export default NotFound;
