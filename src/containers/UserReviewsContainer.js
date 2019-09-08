import React from "react";
import UserReview from "../components/UserReview";

const UserReviewsContainer = ({ userReviews }) => {
  const reviews = userReviews.map(review => (
    <UserReview key={review.id} id={review.id} {...review} />
  ));
  return <ul className="user-reviews-container">{reviews}</ul>;
};

export default UserReviewsContainer;
