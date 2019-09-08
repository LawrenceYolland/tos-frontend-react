import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserPaper extends Component {
  upCaseTitles = title => {
    return title
      .split(" ")
      .map(t => t[0].toUpperCase() + t.slice(1))
      .join(" ");
  };

  setRatingColor = () => {
    const { rating } = this.state;
    if (rating > 0) return "positive";
    if (rating < 0) return "negative";
    return "even";
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
    const { title, category, indexType, created_at, abstract } = this.props;
    return (
      <li className={`user-list-item`}>
        <div className={`user-title-container`}>
          <small>
            <em>
              <span className="created-at">
                {this.editTimeFormat(created_at)}
              </span>
            </em>
          </small>

          <Link to={path}>
            <h4>{this.upCaseTitles(title)}</h4>
          </Link>
          <div>
            <p>{`${abstract.slice(0, 100)}...`}</p>
          </div>
          <div className={`paper-category-${category.toLowerCase()}`}>
            <span>{category}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default UserPaper;
