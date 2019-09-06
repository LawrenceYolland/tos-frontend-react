import React, { Component } from "react";
import { Link } from "react-router-dom";

class PromotedPaper extends Component {
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
    const { title, category, abstract, created_at, promotedType } = this.props;
    return (
      <li className="home-list-item promoted">
        <div
          className={`image-container-promoted ${
            promotedType === "hottest" ? "hottest" : "latest"
          }`}
        ></div>
        <div className="home-title-container promoted">
          <small>
            <span className="created-at">
              {this.editTimeFormat(created_at)}
            </span>
          </small>
          <Link to={path}>
            <h4>
              {this.upCaseTitles(title)}
              <span role="img" aria-label="promoted post">
                ⭐️
              </span>
            </h4>
          </Link>
          <div>
            <p>{`${abstract.slice(0, 200)}...`}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default PromotedPaper;
