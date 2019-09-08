import React, { Component } from "react";
import NoContentAvailable from "../containers/NoContentAvailble";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="s"> </div>

        <NoContentAvailable />
      </div>
    );
  }
}
export default NotFound;
