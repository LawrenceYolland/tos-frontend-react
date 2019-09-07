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

  render() {
    const path = `/papers/${this.props.id}`;
    const { title, category, indexType } = this.props;
    return (
      <li className={`${indexType}-list-item`}>
        <div className={`${indexType}-title-container `}>
          <Link to={path}>
            <h4>{this.upCaseTitles(title)}</h4>
          </Link>
          <div className={`paper-category-${category.toLowerCase()}`}>
            <span>{category}</span>
          </div>

        </div>
      </li>
    );
  }
}

export default UserPaper;
