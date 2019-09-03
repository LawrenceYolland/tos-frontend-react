import React, { Component } from "react";
import { Link } from "react-router-dom";

class Review extends Component {
  render() {
    const { content, user } = this.props;
    // debugger
    const path = `/users/${user.id}`;
    return (
      <div className={"paper-review-username"}>
        <li className="review-list-item">{content}</li>
        <span>
          <Link to={path}>{user.username}</Link>
        </span>
      </div>
    );
  }
}

export default Review;
