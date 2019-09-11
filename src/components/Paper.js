import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    };
  }

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
      indexType,
      abstract,
      created_at,
      reviewCount
    } = this.props;
    return (
      <li className={`${indexType}-list-item`}>
        <Link to={path}>
          <div className={`${indexType}-title-container`}>
            <small>
              <em>
                <span className="created-at">
                  {this.editTimeFormat(created_at)}
                </span>
              </em>
            </small>

            <h3 className="post-title-index">{this.upCaseTitles(title)}</h3>

            <div
              className={`paper-category-${category.toLowerCase()} index-cat`}
            >
              <span>{category}</span>
            </div>
            <div>
              <p>{`${abstract.slice(0, 100)}...`}</p>
            </div>
            <div>
              <span role="img" aria-label="comment icon">
                {" "}
                💬{" "}
              </span>
              {reviewCount}
            </div>
          </div>
        </Link>
        <div className={`${indexType}-rate-block`}>
          <span
            className={`${indexType}-rate-up`}
            value="up"
            onClick={this.handleUpRating}
          >
            +
          </span>
          <br />
          <span className={`${indexType}-rate-value ${this.setRatingColor()}`}>
            {this.state.rating === null ? 0 : this.state.rating}
          </span>
          <br />
          <span
            className={`${indexType}-rate-down`}
            value="down"
            onClick={this.handleDownRating}
          >
            -
          </span>
        </div>
      </li>
    );
  }
}

export default Paper;
