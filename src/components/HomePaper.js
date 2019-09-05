import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePaper extends Component {


  handleUpRating = () => {
    console.log("👍");
    this.setState({
      rating: this.state.rating + 1
    });
    this.props.updateRating(this.state.rating + 1, this.props.id); //
  };

  handleDownRating = () => {
    console.log("👎");
    this.setState({
      rating: this.state.rating - 1
    });
    this.props.updateRating(this.state.rating - 1, this.props.id);
  };

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
    const {
      title,
      category,
      abstract,
      created_at
    } = this.props;
    return (
      <li className="home-list-item">
        <div className="home-title-container">
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
          <div className={`paper-category-${category.toLowerCase()}`}>
            <span>{category}</span>
          </div>
          <div>
            <p>{`${abstract.slice(0, 100)}...`}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default HomePaper;
