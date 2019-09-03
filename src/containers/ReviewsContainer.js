import React, { Component } from "react";
import Review from "../components/Review";

class ReviewContainer extends Component {
  render() {
    const { paperReviews, allUsers } = this.props;
    // debugger
    const reviews = paperReviews.map((r, idx) => <Review key={idx} {...r} user={allUsers.find(u => u.id === r.user_id)} />);
    return <ul className="reviews-container">{reviews}</ul>;
  }
}

export default ReviewContainer;
