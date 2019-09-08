import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserReview extends Component {
  upCaseTitles = title => {
    return title
      .split(" ")
      .map(t => t[0].toUpperCase() + t.slice(1))
      .join(" ");
  };

  editTimeFormat = time => {
    let tmpTime = time.slice(0, 10).split("-");
    tmpTime.unshift(tmpTime[2]);
    tmpTime.pop();
    [tmpTime[2], tmpTime[1]] = [tmpTime[1], tmpTime[2]];
    return tmpTime.join("-");
  };

  render() {
    const path = `/papers/${this.props.id}`;
    const { created_at, content } = this.props;
    return (
      <div className="review-list-item">
        <div>
          <small>
            <em>
              <span className="created-at">
                {this.editTimeFormat(created_at)}
              </span>
            </em>
          </small>

          <Link to={path}>
            <div className="review-content-container">
              <p>{`${content.slice(0, 100)}...`}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserReview;
