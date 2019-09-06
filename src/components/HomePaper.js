import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePaper extends Component {
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
    // console.log("access token", )
    const path = `/papers/${this.props.id}`;
    const { title, category, abstract, created_at } = this.props;
    return (
      <li className="home-list-item">
        <div className="home-title-container">
          <small>
            <span className="created-at">
              {this.editTimeFormat(created_at)}
            </span>
          </small>
          <Link to={path}>
            <h4>{this.upCaseTitles(title)}</h4>
          </Link>
        </div>
      </li>
    );
  }
}

export default HomePaper;
