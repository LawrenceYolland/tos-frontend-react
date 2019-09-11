import React, { Component } from "react";
import NoContentAvailable from "../containers/NoContentAvailble";

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
